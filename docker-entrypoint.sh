#!/bin/bash
set -e

# Generate the application key
php artisan key:generate --force

# Run migrations
php artisan migrate --force

# Seed the database
php artisan db:seed --force

# Start Apache
exec "$@"
