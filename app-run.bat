@echo off
start cmd /k "php artisan serve"
start cmd /k "npm run dev"
start cmd /k "cd ml-app && python main.py"
