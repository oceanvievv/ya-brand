#!/usr/bin/env sh

set -e

npm run build

cd build

git init
git add -A
git commit -m 'New deployment to GH-pages'
git push -f git@github.com:oceanvievv/ya-brand.git master:gh-pages

cd -