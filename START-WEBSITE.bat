@echo off
echo ========================================
echo    NGIRI ENERGY DRINK WEBSITE
echo    Starting Local Server...
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo First time setup - Installing dependencies...
    echo This may take 2-3 minutes...
    echo.
    call npm install
    echo.
    echo Installation complete!
    echo.
)

echo Starting website...
echo.
echo The website will open in your browser automatically.
echo URL: http://localhost:3000
echo.
echo To STOP the server: Close this window or press Ctrl+C
echo.
echo ========================================

REM Start the dev server (opens browser automatically)
start http://localhost:3000
call npm run dev

pause
