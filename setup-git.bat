@echo off
cd hertfordshirewebsites
git config user.name "Daniel"
git config user.email "daniel@dreamfree.co.uk"
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/codescribler/hertfordshirewebsites.git
git push -u origin master
