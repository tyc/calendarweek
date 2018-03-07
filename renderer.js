const electron = require('electron')

const ipc = electron.ipcRenderer
const remote = electron.remote
const clipboard = remote.clipboard
const shell = electron.shell

const $ = selector => document.querySelector(selector)

const $Today_DateTime=$('.Today_DateTime')

ipc.on('Update-calendar-date', (event, content) => {
    $Today_DateTime.innerHTML=content
    console.log("The content is " + content)
})