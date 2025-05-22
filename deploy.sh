#!/bin/bash

# Exit on any error
set -e

# Build the app
npm run build

# Navigate into the build output
cd build

# Init a new git repo inside build
git init
git checkout -b gh-pages
git add .
git commit -m "Deploy to GitHub Pages"

# Force push to gh-pages branch
git push --force https://github.com/udesh98/ColorFit.git gh-pages

# Clean up
cd ..
rm -rf build/.git

echo "🚀 Deployed successfully!"
