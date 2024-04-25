#!/bin/bash
set -e  # Exit script on any error
export POSTGRES_DB="db"
export POSTGRES_USER="sparky"
export POSTGRES_PASSWORD=""

# Wait for Postgres to become available 
until PGPASSWORD=$POSTGRES_PASSWORD psql -h "localhost" -U "postgres" -c '\q' > /dev/null 2>&1; do
    echo "Postgres is unavailable - sleeping"
    sleep 2
done

echo "Postgres is up - checking for database and users"

# Check if the database exists
if PGPASSWORD=$POSTGRES_PASSWORD psql -h "localhost" -U "postgres" -lqt | cut -d \| -f 1 | grep -qw "${POSTGRES_DB}"; then
    echo "Database ${POSTGRES_DB} exists"
else
    # Create the database
    echo "Creating database ${POSTGRES_DB}"
    PGPASSWORD=$POSTGRES_PASSWORD psql -h "localhost" -U "postgres" -c "CREATE DATABASE ${POSTGRES_DB}"
fi

# Check if the user exists
if PGPASSWORD=$POSTGRES_PASSWORD psql -h "localhost" -U "postgres" -lqt | cut -d \| -f 1 | grep -qw "${POSTGRES_USER}"; then
    echo "User ${POSTGRES_USER} exists"
else
    # Create the user
    echo "Creating user ${POSTGRES_USER}"
    PGPASSWORD=$POSTGRES_PASSWORD psql -h "localhost" -U "postgres" -c "CREATE USER ${POSTGRES_USER} WITH PASSWORD '${POSTGRES_PASSWORD}';"
fi

psql -h "localhost" -U "postgres" -c "GRANT CONNECT ON DATABASE ${POSTGRES_DB} TO ${POSTGRES_USER};"