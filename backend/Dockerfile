FROM golang:1.22.2-alpine

RUN apk update && apk upgrade && \
    apk add --no-cache make

WORKDIR /backend
EXPOSE 8081

COPY go.mod go.sum ./

COPY . .
RUN go mod download



CMD ["make", "start"]