# Dev machine preparation

Run in PowerShell:

```PowerShell
Set-ExecutionPolicy Bypass -Force
iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
choco install -y nodejs.install
```

Open Node.js command line with administrative privileges, cd to `react-app`.
Run `npm install`


# Debug

`npm start`

# Build for publishing

`npm run build`
