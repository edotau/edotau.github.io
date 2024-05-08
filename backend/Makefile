build:
	cd cmd && go build -o main .

run:
	cd cmd && ./main

clean:
	go fmt ./... && golangci-lint run ./... --fix

start:
	cd cmd && env=../.env ./main

build-run: build run
