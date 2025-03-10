@echo off
cd hertfordshirewebsites
git status
git add .
git commit -m "Latest build and updates to master branch"
git push origin master
echo Changes successfully pushed to GitHub repository
