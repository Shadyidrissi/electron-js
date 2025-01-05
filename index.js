const { app, BrowserWindow } = require('electron/main')
const fs = require('node:fs')
const path = require('node:path')
const windowsState= require('electron-window-state')

function createWindow () {
  let winstate=windowsState({
    defaultWidth:800,
    defaultHeight:600,
  })
  const win = new BrowserWindow({
    width: winstate.width,
    height: winstate.height,
    x:winstate.x,
    y:winstate.y,
    show:false
  })
  winstate.manage(win)
  win.loadFile('index.html')
  win.once("ready-to-show",win.show)
  

  // garbage 
  // win.on("closed",()=>{
  //   win=null
  // })
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