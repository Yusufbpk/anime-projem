@echo off
echo Anime Projesi Başlatılıyor...
echo.

REM Eski process'leri temizle
taskkill /F /IM node.exe >nul 2>&1
timeout /t 2 /nobreak >nul

REM Backend'i başlat
start "Backend Server" cmd /k "npm run server"

REM 3 saniye bekle
timeout /t 3 /nobreak >nul

REM Frontend'i başlat
start "Frontend Server" cmd /k "npm run dev"

echo.
echo Proje başlatıldı!
echo Backend: http://localhost:3000
echo Frontend: http://localhost:5173
echo.
pause
