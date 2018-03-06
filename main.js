const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const path = require('path')
const dialog = electron.dialog
const fs = require('fs')

fileName = ''


app.on('ready', () => {
	console.log('The application is ready.')
	
	mainWindow = new BrowserWindow({alwaysOnTop: true})

	mainWindow.loadURL('file://'+path.join(__dirname, 'index.html'))

	// the main window is finish loading up the index.html. Now it is
	// time to print today's date and the calendar week number for 
	// that date.
	mainWindow.webContents.on('did-finish-load', () => {
		// grab today's date.
		var today_date = new Date()
		var display_date = today_date.getDate()
		var display_day = today_date.getDay()

		var display_string = display_day + " " + display_date

	})

	mainWindow.webContents.openDevTools()

	mainWindow.on('closed', () => {
		mainWindow = null
	})
})

