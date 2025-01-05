class MainMenu {
    constructor() {
        const { Menu } = require('electron')
        let template = [
            {
                label: "one",
                submenu: [
                    {
                        label: "1",
                        role: "quit"
                    }
                ]
            },
            {
                label: "tow",
                click:()=>{ 
                    const {shell} = require('electron') //this as url link
                    shell.openExternal("https://www.electronjs.org/docs/latest/")
                }
            },
            {
                label: "three",
                click:()=>{
                    const {dialog}=require('electron')  //this as a show alerat on website
                    dialog.showMessageBox({ //this is info of it
                        type:"info",
                        buttons:['OK'],
                        title:"About",
                        message:"This is the message"
                    })
                }
            },
        ]
        let menu = Menu.buildFromTemplate(template)
        Menu.setApplicationMenu(menu)
    }
}
module.exports = { MainMenu }