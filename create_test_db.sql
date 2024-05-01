-- Create the database
CREATE DATABASE IF NOT EXISTS ${POSTGRES_DB};

-- Wait until Postgres is available
DO $$ BEGIN
    PERFORM pg_sleep(2);
END $$ WHILE NOT EXISTS (
    SELECT 1 FROM pg_database WHERE datname = '${POSTGRES_DB}'
);

-- Check if the user exists and create if not
DO $$ BEGIN
    IF NOT EXISTS (SELECT FROM pg_user WHERE usename = '${POSTGRES_USER}') THEN
        CREATE USER ${POSTGRES_USER} WITH PASSWORD '${POSTGRES_PASSWORD}';
    END IF;
END $$;

-- Check if the database exists and grant connect privilege to the user
DO $$ BEGIN
    IF NOT EXISTS (SELECT FROM pg_database WHERE datname = '${POSTGRES_DB}') THEN
        CREATE DATABASE ${POSTGRES_DB};
        GRANT CONNECT ON DATABASE ${POSTGRES_DB} TO ${POSTGRES_USER};
    END IF;
END $$;
