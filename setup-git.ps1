# Navigate to the project directory
Set-Location -Path .\hertfordshirewebsites

# Initialize Git repository (if not already initialized)
if (-not (Test-Path .\.git)) {
    Write-Host "Initializing Git repository..."
    git init
}

# Configure Git user
Write-Host "Configuring Git user..."
git config user.name "Daniel"
git config user.email "daniel@dreamfree.co.uk"

# Add all files
Write-Host "Adding files to Git..."
git add .

# Commit changes
Write-Host "Committing files..."
git commit -m "Initial commit"

# Add remote repository
Write-Host "Adding remote repository..."
git remote add origin https://github.com/codescribler/hertfordshirewebsites.git

# Push to GitHub
Write-Host "Pushing to GitHub..."
git push -u origin master

Write-Host "Git setup complete!"
