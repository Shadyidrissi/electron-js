const { app, BrowserWindow } = require('electron/main')
const fs = require('node:fs')
const path = require('node:path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    show:false
  })
  
  win.loadFile('index.html')
  win.once("ready-to-show",win.show)
  

  // garbage 
  win.on("closed",()=>{
    win=null
  })
}
 
// const fileName = 'recently-used.md'
// fs.writeFile(fileName, 'Lorem Ipsum', () => {
//   app.addRecentDocument(path.join(__dirname, fileName))
// })

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.clearRecentDocuments()
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})