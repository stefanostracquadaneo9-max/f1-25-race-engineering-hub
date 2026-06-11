@echo off
cd /d "%~dp0"
title Race Engineering Hub - F1 25 Telemetry
echo Avvio collegamento telemetria F1 25...
start "F1 25 Telemetry Bridge" cmd /k node f1-telemetry-bridge.js
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:20778/ferrari_strategy_setup_engineer_f1_25.html"
pause
