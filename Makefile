clean:
	cd ./backend && make clean && cd ../ui && yarn clean

init:
	cd ./backend && make init

local: init
	cd backend/cmd && ./main && cd ../../ui/ && yarn && yarn start

build:
	docker-compose build

docker: build
	docker-compose --env-file backend/.env up 

ls:
	@grep '^[^#[:space:]].*:' Makefile | cut -d ':' -f 1
