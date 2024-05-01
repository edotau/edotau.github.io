init:
	cd cmd && go build -o main .

clean:
	go fmt ./... && golangci-lint run ./... --fix

start:
	cd cmd && ./main

run: init start
