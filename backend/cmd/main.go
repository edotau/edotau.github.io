package main

import (
	"backend/packages/config"
	"context"
	"database/sql"
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	_ "github.com/jackc/pgx/v5/stdlib" // pgx driver for database/sql compatibility
)

// GolfClub represents a single row in the golf_clubs table
type GolfClub struct {
	ID     int    `json:"id"`
	Club   string `json:"club"`
	Model  string `json:"model"`
	Loft   string `json:"loft"`
	Shaft  string `json:"shaft"`
	Length string `json:"length"`
	Weight string `json:"weight"`
	Torque string `json:"torque"`
	Tip    string `json:"tip"`
	Flex   string `json:"flex"`
}

func main() {
	config.InitConfig()

	dbHost := os.Getenv("POSTGRES_SERVER_HOST")
	dbUser := os.Getenv("POSTGRES_USER")
	dbPassword := os.Getenv("POSTGRES_PASSWORD")
	dbName := os.Getenv("POSTGRES_DB")

	dsn := fmt.Sprintf("postgres://%s:%s@%s:5432/%s?sslmode=disable", dbUser, dbPassword, dbHost, dbName)
	// Open a database connection
	db, err := sql.Open("pgx", dsn)
	if err != nil {
		log.Fatalf("Unable to connect to database: %v\n", err)
	}
	defer db.Close()

	// Check the connection
	if err = db.Ping(); err != nil {
		log.Fatalf("Unable to ping the database: %v\n", err)
	}

	// Create a new Fiber app
	app := fiber.New()
	app.Use(cors.New())

	// Route to get all golf clubs
	app.Get("/api/table", func(c *fiber.Ctx) error {
		// Prepare the query
		query := "SELECT id, club, model, loft, shaft, length, weight, torque, tip, flex FROM golf_clubs"
		rows, err := db.QueryContext(context.Background(), query)
		if err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"Error": "Failed to query database",
			})
		}
		defer rows.Close()

		// Parse the rows
		var clubs []GolfClub
		for rows.Next() {
			var club GolfClub
			if err := rows.Scan(&club.ID, &club.Club, &club.Model, &club.Loft, &club.Shaft, &club.Length, &club.Weight, &club.Torque, &club.Tip, &club.Flex); err != nil {
				return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
					"Error": "Error scanning rows",
				})
			}
			clubs = append(clubs, club)
		}

		// Check for errors in iteration
		if err = rows.Err(); err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
				"Error": "Error reading rows",
			})
		}

		// Return the rows as JSON
		return c.JSON(clubs)
	})

	// Start the Fiber server
	log.Fatal(app.Listen(":8081"))
}
