package main

import (
	"backend/api"
	"backend/config"
)

func main() {
	config.InitConfig()
	api.StartServer()
}
