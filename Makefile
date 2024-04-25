build:
	cd ./backend && make build && cd ../ui && yarn build

run: build
	cd backend/cmd && ./main && cd ../../ui/ && yarn && yarn start

install:
	cd ui && yarn install && cd ../backend/ && go install github.com/google/yamlfmt/cmd/@latest 

clean:
	cd ./backend && make clean && cd ../ui && yarn clean

docker:
	docker-compose build 

dev:
	docker-compose --env-file .env-sparky up --remove-orphans --force-recreate --build

list:
	@grep '^[^#[:space:]].*:' Makefile | cut -d ':' -f 1