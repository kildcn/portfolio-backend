#!/bin/bash
set -e

# Generate the application key
php artisan key:generate --force

# Run migrations fresh to reset the database and re-create tables
php artisan migrate:fresh --force

# Seed the database
php artisan db:seed --force

# Start Apache
exec "$@"
