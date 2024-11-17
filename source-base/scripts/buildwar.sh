#!/bin/bash

echo "%~dp0"

cd ../

echo "%CD%"

echo "Removing war..."
rm -rf Cash-Connect.war

echo "Building application..."
echo "npm run build -- --profile"

cd build/

echo "Building war..."
jar -cvf ../Cash-Connect.war *

cd ../

echo "%CD%"

echo "Removing build folder..."
rm -rf build/ /S /Q

echo "Build completed."