const { app, BrowserWindow } = require("electron");

function createWindow() {
    let win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true,
            backgroundThrottling: false
        }
    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);
