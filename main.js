const electron = require('electron')

// moment is a date time software package
const moment = require('moment')
const path = require('path')
const fs = require('fs')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog



app.on('ready', () => {
	console.log('The application is ready.')
	
	mainWindow = new BrowserWindow({alwaysOnTop: true})

	mainWindow.loadURL('file://'+path.join(__dirname, 'index.html'))

	// the main window is finish loading up the index.html. Now it is
	// time to print today's date and the calendar week number for 
	// that date.
	mainWindow.webContents.on('did-finish-load', () => {
		// grab today's date.
		var now_date = moment().format('dddd DD MMMM YYYY')
		var now_cw = "CW " + moment().format('WW')

		// mainWindow.webContents.send('Update-calendar-date', now_cw)

		mainWindow.webContents.send('Update-calendar-cw', now_cw)
		mainWindow.webContents.send('Update-calendar-date', now_date)

		console.log("now_date = " + now_date )
		console.log("now_cw = " + now_cw )
	})

	mainWindow.webContents.openDevTools()

	mainWindow.on('closed', () => {
		mainWindow = null
	})
})

