const electron = require('electron')

// moment is a date time software package
const moment = require('moment')
const path = require('path')
const fs = require('fs')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog
const Menu = electron.Menu

// exporting the next month and previous month Interfaces.
exports.prevMonth = prevMonth;
exports.nextMonth = nextMonth;

const menu_template = [
	{
	  label: 'File',
	  submenu: [
		{
		  label: 'Open...',
		  accelerator: 'CmdOrCtrl+O',
		  click () { openFile() }
		},
		{
		  label: 'Save...',
		  accelerator: 'CmdOrCtrl+S',
		  click () {
			// We can't call saveFile(content) directly because we need to get
			// the content from the renderer process. So, send a message to the
			// renderer, telling it we want to save the file.
			mainWindow.webContents.send('save-file')
		  }
		}
	  ]
	},
	{
	  label: 'Developer',
	  submenu: [
		{
		  label: 'Toggle Developer Tools',
		  accelerator: process.platform === 'darwin'
			? 'Alt+Command+I'
			: 'Ctrl+Shift+I',
		  click () { mainWindow.webContents.toggleDevTools() }
		}
	  ]
	}
  ]
  
  if (process.platform === 'darwin') {
	const name = app.getName()
	menu_template.unshift({
	  label: name,
	  submenu: [
		{
		  label: 'About ' + name,
		  role: 'about'
		},
		{
		  type: 'separator'
		},
		{
		  label: 'Services',
		  role: 'services',
		  submenu: []
		},
		{
		  type: 'separator'
		},
		{
		  label: 'Hide ' + name,
		  accelerator: 'Command+H',
		  role: 'hide'
		},
		{
		  label: 'Hide Others',
		  accelerator: 'Command+Alt+H',
		  role: 'hideothers'
		},
		{
		  label: 'Show All',
		  role: 'unhide'
		},
		{
		  type: 'separator'
		},
		{
		  label: 'Quit',
		  accelerator: 'Command+Q',
		  click () { app.quit() }
		}
	  ]
	})
  }
  

/*
 * struct for holding data for calender page.
 * 
 * xy_pos: xy coordinate of the cell
 * lin_pos: linear coordinate of the cell
 * date_day: the day of the date for this cell
 * date_data: the actual date for this cell
 * CW_data: the calendar this date belongs to
 *  
 */ 

/* max 35 days in a displayed month */
var array_dates = [];
array_dates.push({xy_pos:"date_cell_00", weekday_num: 1, weekday:"Monday", 		linear_pos:0, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_00'});
array_dates.push({xy_pos:"date_cell_01", weekday_num: 2, weekday:"Tuesday", 	linear_pos:1, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_01'});
array_dates.push({xy_pos:"date_cell_02", weekday_num: 3, weekday:"Wednedsay", 	linear_pos:2, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_02'});
array_dates.push({xy_pos:"date_cell_03", weekday_num: 4, weekday:"Thursday", 	linear_pos:3, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_03'});
array_dates.push({xy_pos:"date_cell_04", weekday_num: 5, weekday:"Friday", 		linear_pos:4, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_04'});
array_dates.push({xy_pos:"date_cell_05", weekday_num: 6, weekday:"Saturday", 	linear_pos:5, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_05'});
array_dates.push({xy_pos:"date_cell_06", weekday_num: 0, weekday:"Sunday", 		linear_pos:6, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_06'});

array_dates.push({xy_pos:"date_cell_10", weekday_num: 1, weekday:"Monday", 		linear_pos:7, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_10'});
array_dates.push({xy_pos:"date_cell_11", weekday_num: 2, weekday:"Tuesday", 	linear_pos:8, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_11'});
array_dates.push({xy_pos:"date_cell_12", weekday_num: 3, weekday:"Wednedsay", 	linear_pos:9, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_12'});
array_dates.push({xy_pos:"date_cell_13", weekday_num: 4, weekday:"Thursday", 	linear_pos:10, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_13'});
array_dates.push({xy_pos:"date_cell_14", weekday_num: 5, weekday:"Friday", 		linear_pos:11, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_14'});
array_dates.push({xy_pos:"date_cell_15", weekday_num: 6, weekday:"Saturday", 	linear_pos:12, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_15'});
array_dates.push({xy_pos:"date_cell_16", weekday_num: 0, weekday:"Sunday", 		linear_pos:13, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_16'});

array_dates.push({xy_pos:"date_cell_20", weekday_num: 1, weekday:"Monday", 		linear_pos:14, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_20'});
array_dates.push({xy_pos:"date_cell_21", weekday_num: 2, weekday:"Tuesday",		linear_pos:15, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_21'});
array_dates.push({xy_pos:"date_cell_22", weekday_num: 3, weekday:"Wednesday",	linear_pos:16, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_22'});
array_dates.push({xy_pos:"date_cell_23", weekday_num: 4, weekday:"Thursday",	linear_pos:17, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_23'});
array_dates.push({xy_pos:"date_cell_24", weekday_num: 5, weekday:"Friday",		linear_pos:18, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_24'});
array_dates.push({xy_pos:"date_cell_25", weekday_num: 6, weekday:"Saturday",	linear_pos:19, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_25'});
array_dates.push({xy_pos:"date_cell_26", weekday_num: 0, weekday:"Sunday",		linear_pos:20, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_26'});

array_dates.push({xy_pos:"date_cell_30", weekday_num: 1, weekday:"Monday",		linear_pos:21, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_30'});
array_dates.push({xy_pos:"date_cell_31", weekday_num: 2, weekday:"Tuesday",		linear_pos:22, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_31'});
array_dates.push({xy_pos:"date_cell_32", weekday_num: 3, weekday:"Wednesday",	linear_pos:23, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_32'});
array_dates.push({xy_pos:"date_cell_33", weekday_num: 4, weekday:"Thursday",	linear_pos:24, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_33'});
array_dates.push({xy_pos:"date_cell_34", weekday_num: 5, weekday:"Friday",		linear_pos:25, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_34'});
array_dates.push({xy_pos:"date_cell_35", weekday_num: 6, weekday:"Saturday",	linear_pos:26, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_35'});
array_dates.push({xy_pos:"date_cell_36", weekday_num: 0, weekday:"Sunday",		linear_pos:27, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_36'});

array_dates.push({xy_pos:"date_cell_40", weekday_num: 1, weekday:"Monday",		linear_pos:28, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_40'});
array_dates.push({xy_pos:"date_cell_41", weekday_num: 2, weekday:"Tuesday",		linear_pos:29, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_41'});
array_dates.push({xy_pos:"date_cell_42", weekday_num: 3, weekday:"Wednesday",	linear_pos:30, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_42'});
array_dates.push({xy_pos:"date_cell_43", weekday_num: 4, weekday:"Thursday",	linear_pos:31, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_43'});
array_dates.push({xy_pos:"date_cell_44", weekday_num: 5, weekday:"Friday",		linear_pos:32, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_44'});
array_dates.push({xy_pos:"date_cell_45", weekday_num: 6, weekday:"Saturday",	linear_pos:33, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_45'});
array_dates.push({xy_pos:"date_cell_46", weekday_num: 0, weekday:"Sunday",		linear_pos:34, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_46'});
 
array_dates.push({xy_pos:"date_cell_50", weekday_num: 1, weekday:"Monday",		linear_pos:35, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_50'});
array_dates.push({xy_pos:"date_cell_51", weekday_num: 2, weekday:"Tuesday",		linear_pos:36, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_51'});
array_dates.push({xy_pos:"date_cell_52", weekday_num: 3, weekday:"Wednesday",	linear_pos:37, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_52'});
array_dates.push({xy_pos:"date_cell_53", weekday_num: 4, weekday:"Thursday",	linear_pos:38, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_53'});
array_dates.push({xy_pos:"date_cell_54", weekday_num: 5, weekday:"Friday",		linear_pos:39, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_54'});
array_dates.push({xy_pos:"date_cell_55", weekday_num: 6, weekday:"Saturday",	linear_pos:40, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_55'});
array_dates.push({xy_pos:"date_cell_56", weekday_num: 0, weekday:"Sunday",		linear_pos:41, date_day: 0, date_data: "", CW_data: 0, event:'Update-date_cell_56'}); 

var i_first_day = 0;
var i_last_day = 0;
var today_index = 0;
var date_today = moment(moment());
var calendar_day = moment(date_today); // the day that is currently shown

function prevMonth() {
	calendar_day.subtract('1', "months");
	update_calendar(calendar_day);
	render_calendar();
}

function nextMonth() {
	calendar_day.add('1', "months");
	update_calendar(calendar_day);
	render_calendar();

}

function render_calendar() {
			// loop through out array and print it out.
			var i;
			for (i=0; i<=41; i++) {
				// console.log("sending data " + i + ":" + array_dates[i].date_day.toString());
				mainWindow.webContents.send("Update-date_cell_array" , array_dates[i].linear_pos, array_dates[i].date_day.toString());	
			}
	
			
			// change the colour of the days that are out of the current month
			for (i=0; i<i_first_day; i++) {
				// console.log("before sending data " + i + ":" + array_dates[i].date_day.toString());
				mainWindow.webContents.send("Update-out_of_month" , array_dates[i].linear_pos, array_dates[i].date_day.toString());	
			}
			for (i=i_last_day; i<=41; i++) {
				// console.log("after  sending data " + i + ":" + array_dates[i].date_day.toString());
				mainWindow.webContents.send("Update-out_of_month" , array_dates[i].linear_pos, array_dates[i].date_day.toString());	
			}
	
			if (today_index != 0) {
				mainWindow.webContents.send("Update-date_cell_array_today" , array_dates[today_index].linear_pos, array_dates[today_index].date_day.toString());	
			}
	
			// send across the CW number for the monday of the week.
			mainWindow.webContents.send('Update-cw_cell_00', "CW"+array_dates[0].CW_data.toString());	
			mainWindow.webContents.send('Update-cw_cell_10', "CW"+array_dates[7].CW_data.toString());	
			mainWindow.webContents.send('Update-cw_cell_20', "CW"+array_dates[14].CW_data.toString());	
			mainWindow.webContents.send('Update-cw_cell_30', "CW"+array_dates[21].CW_data.toString());	
			mainWindow.webContents.send('Update-cw_cell_40', "CW"+array_dates[28].CW_data.toString());	
			mainWindow.webContents.send('Update-cw_cell_50', "CW"+array_dates[35].CW_data.toString());	
	
			// send across the two headers
			mainWindow.webContents.send('Update-calendar-cw', "CW"+calendar_day.format('WW'));
			mainWindow.webContents.send('Update-calendar-date', calendar_day.format('MMMM YYYY'));
}

// function to update the calendar based on the passed in date.
function update_calendar(updated_date) {

//	calendar_day = moment(updated_date);
	var date_1st = moment(updated_date);
	var date_found = false;

	// set the date to be the 1st day of the month
	date_1st.date(1);

	today_index = 0;
	// find the first date and start filling.
	for (i = 0; i <= 41; i++) {
		if (date_found == false) {
			/* look for the first day by check that day in the
			 * first row matches the day of the first day.
			 * Mark index values of
			 * i_first_day = i;
			 * i_last_day = i_first_day.date_1st.daysInMonth();
			 */
			if (array_dates[i].weekday_num == date_1st.day()) {
				array_dates[i].date_day = date_1st.date();
				array_dates[i].CW_data = date_1st.isoWeek();
				array_dates[i].date_data = date_1st.toString();
				date_found = true;
				i_copy = i;
				i_first_day = i_copy;
				i_last_day = i_first_day + date_1st.daysInMonth();

				// console.log("i_first_day " + i_first_day);
				// console.log("i_last_day " + i_last_day);
			}	
		} else {
			date_1st.add(1, 'days');

			if ((date_1st.isSame(date_today)) == true) {
				today_index = i;
				// console.log("same day detection +++")
				// console.log(date_1st);
				// console.log(date_today);
			}

			// the date will roll over automatically to the next month
			array_dates[i].date_day = date_1st.date();
			array_dates[i].CW_data = date_1st.isoWeek();
			array_dates[i].date_data = date_1st.toString();
		}
	}

	// back fill the dates in the previous month
	date_1st = moment(calendar_day);
	date_1st.date(1);
	
	// if i_copy is 0, then there is no prevous days to back fill in.
	if (i_copy > 0) {

		i_copy--;
		for (i = i_copy; i > 0; i--) {
			date_1st.subtract(1, 'days');
			array_dates[i].date_day = date_1st.date();
			array_dates[i].CW_data = date_1st.isoWeek();
			array_dates[i].date_data = date_1st.toString();		
		}

		date_1st.subtract(1, 'days');
		array_dates[i].date_day = date_1st.date();
		array_dates[i].CW_data = date_1st.isoWeek();
		array_dates[i].date_data = date_1st.toString();
	}	
}


// the main code starts here

app.on('ready', () => {

	mainWindow = new BrowserWindow({
		alwaysOnTop: false,
		width: 400,
		height: 349,
		resizable: false,
		title: "CalenderWeek"
	});
	
	mainWindow.loadURL('file://'+path.join(__dirname, 'index.html'))
	// the main window is finish loading up the index.html. Now it is
	// time to print today's date and the calendar week number for 
	// that date.

	// mainWindow.webContents.openDevTools();

	const menu = Menu.buildFromTemplate(menu_template);
	Menu.setApplicationMenu(menu);

	update_calendar(date_today);

	mainWindow.webContents.on('did-finish-load', () => {
		render_calendar();
	})

	mainWindow.on('closed', () => {
		mainWindow = null
	})
})

