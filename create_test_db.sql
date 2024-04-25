CREATE DATABASE ${POSTGRES_DB};
DO $$
BEGIN
    -- Check if the user exists
    IF EXISTS (SELECT 1 FROM pg_roles WHERE rolname = ${POSTGRES_USER}) THEN
        -- User exists, change the password
        EXECUTE 'ALTER USER username WITH PASSWORD ''${POSTGRES_PASSWORD}'';';
        RAISE NOTICE 'Password changed for user %', ${POSTGRES_USER};
    ELSE
        -- User does not exist, perhaps raise an error or notice
        RAISE NOTICE 'User % does not exist', ${POSTGRES_USER};
    END IF;
END $$;

GRANT CONNECT ON DATABASE postgres TO sparky;

