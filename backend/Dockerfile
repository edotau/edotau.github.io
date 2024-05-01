FROM golang:1.22-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache make

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

EXPOSE 8081

CMD ["make", "run"]
