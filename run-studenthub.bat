@echo off
echo ===================================================
echo             Starting StudentHub Platform
echo ===================================================
echo.

echo [1/2] Starting StudentHub Backend API (Port 5000)...
start "StudentHub Backend" cmd /k "cd /d %~dp0backend && npm start"

echo [2/2] Starting StudentHub React Frontend (Port 5173)...
start "StudentHub Frontend" cmd /k "cd /d %~dp0frontend && npm run dev"

echo.
echo ===================================================
echo StudentHub is launching!
echo Frontend: http://localhost:5173
echo Backend:  http://localhost:5000
echo ===================================================
timeout /t 3 >nul
start http://localhost:5173
