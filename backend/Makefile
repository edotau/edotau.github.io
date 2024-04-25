build:
	cd cmd && go build -o main .

clean:
	go fmt ./... && golangci-lint run ./... --fix

run:
	cd cmd && ./main

test:
	go test -covermode=atomic ./...

ls:
	@grep '^[^#[:space:]].*:' Makefile | cut -d ':' -f 1