clean:
	cd ./backend && make clean && cd ../ui && yarn clean

build:
	cd ./backend && make build

run:
	cd backend/cmd && ./main && cd ../../ui/ && yarn && yarn start

docker: build
	docker-compose build && docker-compose --env-file .env up 

ls:
	@grep '^[^#[:space:]].*:' Makefile | cut -d ':' -f 1
