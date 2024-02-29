#Create new Repository
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Laxmidhar/wfBestResumeApp.git
git push -u origin main

#Create Angular application : Angular CLI to create a new project
---------------------------------------------------
npm install -g @angular/cli
npm install -g typescript
ng new wfBestResumeApp --standalone false


#### Deploy to Azure App Service using cli ###

##Download the sample app
mkdir htmlapp
cd htmlapp

git clone https://github.com/Laxmidhar/wfBestResumeApp.git
resourceGroup=$(az group list --query "[].{id:name}" -o tsv)
appName=wfBestResumeApp$RANDOM

#Create the web app and deploy
cd wfBestResumeApp
az webapp up --sku F1 -g $resourceGroup -n $appName

{
  "URL": "http://wfbestresumeapp18482.azurewebsites.net",
  "appserviceplan": "sahoo19laxmidhar_asp_8687",
  "location": "eastus",
  "name": "wfBestResumeApp18482",
  "os": "Linux",
  "resourcegroup": "learn-77132478-1db1-4f04-a4ab-1014efbba47a",
  "runtime_version": "node|16-LTS",
  "runtime_version_detected": "0.0",
  "sku": "FREE",
  "src_path": "//home//sahoo19laxmidhar//nodeapp//wfBestResumeApp"
}

#Add angular capability
