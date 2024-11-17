echo "%~dp0"

cd..

echo "%CD%"

echo "Removing war..."
del Cash-Connect.war

echo "Building application..."
echo "npm run build -- --profile"

cd build/

echo "Building war..."
jar cvf ../Cash-Connect.war *

cd ../

echo "%CD%"

echo "Removing build folder..."
RMDIR build /S /Q

echo "Build completed."