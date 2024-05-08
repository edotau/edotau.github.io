#!/bin/bash
POSTGRES="16.2"
# Run docker ps and search for the "postgres:16.2" image, then cut the first column which is the container ID
container_id=$(docker ps | grep "postgres:${POSTGRES}" | awk '{print $1}')

# Check if we found a container ID
if [ -z "$container_id" ]; then
    echo "No container found for the image postgres:${POSTGRES}"
    
else
    echo "docker exec -it $(docker ps | grep "postgres:${POSTGRES}" | awk '{print $1}') su postgres
    "
    docker exec -it $(docker ps | grep "postgres:${POSTGRES}" | awk '{print $1}') su postgres
fi
