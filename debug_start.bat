@echo off
echo STARTING DEBUG > debug_log.txt
echo NODE VERSION: >> debug_log.txt
node -v >> debug_log.txt
echo NPM VERSION: >> debug_log.txt
npm -v >> debug_log.txt
echo INSTALLING DEPS... >> debug_log.txt
call npm install >> debug_log.txt 2>&1
echo RUNNING DEV... >> debug_log.txt
call npm run dev >> debug_log.txt 2>&1
