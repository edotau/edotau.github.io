package db

import (
	"database/sql"
	"fmt"
	"os"
	"path/filepath"

	"github.com/apex/log"
	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/postgres"
	_ "github.com/golang-migrate/migrate/v4/source/file"
)

func ConnectDB() *sql.DB {
	user := os.Getenv("POSTGRES_USER")
	password := os.Getenv("POSTGRES_PASSWORD")
	database := os.Getenv("POSTGRES_DB")
	host := os.Getenv("POSTGRES_SERVER_HOST")

	endpoint := fmt.Sprintf("postgres://%s:%s@%s:5432/%s?sslmode=disable", user, password, host, database)
	db, err := sql.Open("pgx", endpoint)

	if err != nil {
		log.Fatalf("Error: Unable to connect to database: %v\n", err)
	}
	return db
}

func Migrate(db *sql.DB, dbName string) error {
	log.Info("running db migrations, to disable set RUN_MIGRATION=false")
	driver, err := postgres.WithInstance(db, &postgres.Config{})
	if err != nil {
		return err
	}

	dir, _ := filepath.Abs("../packages/db/migrations")

	if err != nil {
		return err
	}
	m, err := migrate.NewWithDatabaseInstance(fmt.Sprintf("file://%s", dir), dbName, driver)
	if err != nil {
		return err
	}

	if err := m.Up(); err != nil && err != migrate.ErrNoChange {
		return err
	}

	return nil
}
