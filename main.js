const electron = require('electron')
const path = require('path')
const fs = require('fs')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog

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
		var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
		var months = ["January", "February", "March", "April", " May", "June", "July", "August", "September", "October", "November", "December"]
		var display_date = today_date.getDate()
		var display_day = today_date.getDay()

		var display_string = days[today_date.getDay()] + ", " + today_date.getDate() + " " + months[today_date.getMonth()] + " " + today_date.getFullYear()

		mainWindow.webContents.send('Update-calendar-date', display_string)

		console.log("display_string = " + display_string )

	})

	mainWindow.webContents.openDevTools()

	mainWindow.on('closed', () => {
		mainWindow = null
	})
})

