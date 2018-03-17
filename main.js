const electron = require('electron')

// moment is a date time software package
const moment = require('moment')
const path = require('path')
const fs = require('fs')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog

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
array_dates.push({xy_pos:"date_cell_00", weekday_num: 1, weekday:"Monday", 		linear_pos:0, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_01", weekday_num: 2, weekday:"Tuesday", 		linear_pos:1, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_02", weekday_num: 3, weekday:"Wednedsay", 	linear_pos:2, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_03", weekday_num: 4, weekday:"Thursday", 	linear_pos:3, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_04", weekday_num: 5, weekday:"Friday", 		linear_pos:4, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_05", weekday_num: 6, weekday:"Saturday", 	linear_pos:5, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_06", weekday_num: 0, weekday:"Sunday", 		linear_pos:6, date_day: 0, date_data: "", CW_data: 0});

array_dates.push({xy_pos:"date_cell_10", weekday_num: 1, weekday:"Monday", 		linear_pos:7, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_11", weekday_num: 2, weekday:"Tuesday", 		linear_pos:8, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_12", weekday_num: 3, weekday:"Wednedsay", 	linear_pos:9, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_13", weekday_num: 4, weekday:"Thursday", 	linear_pos:10, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_14", weekday_num: 5, weekday:"Friday", 		linear_pos:11, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_15", weekday_num: 6, weekday:"Saturday", 	linear_pos:12, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_16", weekday_num: 0, weekday:"Sunday", 		linear_pos:13, date_day: 0, date_data: "", CW_data: 0});

array_dates.push({xy_pos:"date_cell_20", weekday_num: 1, weekday:"Monday", 		linear_pos:14, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_21", weekday_num: 2, weekday:"Tuesday",		linear_pos:15, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_22", weekday_num: 3, weekday:"Wednesday",	linear_pos:16, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_23", weekday_num: 4, weekday:"Thursday",	linear_pos:17, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_24", weekday_num: 5, weekday:"Friday",		linear_pos:18, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_25", weekday_num: 6, weekday:"Saturday",	linear_pos:19, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_26", weekday_num: 0, weekday:"Sunday",		linear_pos:20, date_day: 0, date_data: "", CW_data: 0});

array_dates.push({xy_pos:"date_cell_30", weekday_num: 1, weekday:"Monday",		linear_pos:21, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_31", weekday_num: 2, weekday:"Tuesday",		linear_pos:22, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_32", weekday_num: 3, weekday:"Wednesday",	linear_pos:23, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_33", weekday_num: 4, weekday:"Thursday",	linear_pos:24, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_34", weekday_num: 5, weekday:"Friday",		linear_pos:25, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_35", weekday_num: 6, weekday:"Saturday",	linear_pos:26, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_36", weekday_num: 0, weekday:"Sunday",		linear_pos:27, date_day: 0, date_data: "", CW_data: 0});

array_dates.push({xy_pos:"date_cell_40", weekday_num: 1, weekday:"Monday",		linear_pos:28, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_41", weekday_num: 2, weekday:"Tuesday",		linear_pos:29, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_42", weekday_num: 3, weekday:"Wednesday",	linear_pos:30, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_43", weekday_num: 4, weekday:"Thursday",	linear_pos:31, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_44", weekday_num: 5, weekday:"Friday",		linear_pos:32, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_45", weekday_num: 6, weekday:"Saturday",	linear_pos:33, date_day: 0, date_data: "", CW_data: 0});
array_dates.push({xy_pos:"date_cell_46", weekday_num: 0, weekday:"Sunday",		linear_pos:34, date_day: 0, date_data: "", CW_data: 0});
 
 


function outta_way() {
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

}


app.on('ready', () => {

	mainWindow = new BrowserWindow({alwaysOnTop: false})

	console.log('The application is ready.')

	console.log(array_dates[27].linear_pos);

	var date_today = moment(moment());
	var date_1st = moment(date_today);
	var date_found = false;

	// set the date to be the 1st day of the month
	date_1st.date(1);

	// find the first date and start filling.
	for (i = 0; i <= 34; i++) {
		if (date_found == false) {
			if (array_dates[i].weekday_num == date_1st.day()) {
				array_dates[i].date_data = date_1st.toString();
				date_found = true;
				i_copy = i;
			}	
		} else {
			date_1st.add(1, 'days');

			// the date will roll over automatically to the next month
			array_dates[i].date_data = date_1st.toString();
		}
	}

	// back fill the dates in the previous month
	date_1st = moment(date_today);
	date_1st.date(1);	
	for (i = i_copy; i > 0; i--) {
		date_1st.subtract(1, 'days');
		array_dates[i].date_data = date_1st.toString();		
	}

	mainWindow.on('closed', () => {
		mainWindow = null
	})
})

