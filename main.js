const electron = require('electron')

// moment is a date time software package
const moment = require('moment')
const path = require('path')
const fs = require('fs')

const app = electron.app
const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog


function makeStruct(names) {
	var names = names.split(' ');
	var count = names.length;
	function constructor() {
	  for (var i = 0; i < count; i++) {
		this[names[i]] = arguments[i];
	  }
	}
	return constructor;
  }
  

function date_data () {
	
	var date_data;
	var cell_id;

	this.date_data = date_data;
	this.cell_id = cell_id;
	this.set_date = set_date;
	this.set_cell = set_cell;
	
	function set_date(datum) {
		this.date_data = datum;
	}

	function set_cell(cell_id) {
		this.cell_id = cell_id;
	}
}

/* this function returns the position in date grid
 * for a given date. It retunrs the co-ordinate pair 
 * from this function. If the date is out of range,
 * it returns a "NaN".
 * 
 * 1. For the given date, calculate the month.
 * 2. calculate the day of the week which 1st of the month is on. This 
 *    allow the first square to be known.
 * 3. From the first square, start sequencing out the rest of the days.
 * 4. 
 * 
 * 
 */
function calc_date_square(ref_date) {

	retVal = NaN;
	
	if (moment(ref_date).isValid != false) {
		var now_date = moment(ref_date);
		var day = moment(ref_date);

		switch (day) {
			
		}
	}


}

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

	var dates = new date_data();

	var date_struct = makeStruct("date_id cell_id ")

	/*
	 * struct for holding data for calander page.
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
	array_dates.push({xy_pos:"date_cell_00", weekday:"Monday", 		linear_pos:0, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_01", weekday:"Tueday", 		linear_pos:1, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_02", weekday:"Wednedsay", 	linear_pos:2, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_03", weekday:"Thursday", 	linear_pos:3, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_04", weekday:"Friday", 		linear_pos:4, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_05", weekday:"Saturday", 	linear_pos:5, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_06", weekday:"Sunday", 		linear_pos:6, date_day: 0, date_data: "", CW_data: 0});
	
	array_dates.push({xy_pos:"date_cell_10", weekday:"Monday", 		linear_pos:7, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_11", weekday:"Tueday", 		linear_pos:8, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_12", weekday:"Wednedsay", 	linear_pos:9, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_13", weekday:"Thursday", 	linear_pos:10, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_14", weekday:"Friday", 		linear_pos:11, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_15", weekday:"Saturday", 	linear_pos:12, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_16", weekday:"Sunday", 		linear_pos:13, date_day: 0, date_data: "", CW_data: 0});
	
	array_dates.push({xy_pos:"date_cell_20", weekday:"Monday", 		linear_pos:14, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_21", weekday:"Tuesday",		linear_pos:15, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_22", weekday:"Wednesday",	linear_pos:16, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_23", weekday:"Thursday",	linear_pos:17, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_24", weekday:"Friday",		linear_pos:18, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_25", weekday:"Saturday",	linear_pos:19, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_26", weekday:"Sunday",		linear_pos:20, date_day: 0, date_data: "", CW_data: 0});
	
	array_dates.push({xy_pos:"date_cell_30", weekday:"Monday",		linear_pos:21, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_31", weekday:"Tuesday",		linear_pos:22, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_32", weekday:"Wednesday",	linear_pos:23, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_33", weekday:"Thursday",	linear_pos:24, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_34", weekday:"Friday",		linear_pos:25, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_35", weekday:"Saturday",	linear_pos:26, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_36", weekday:"Sunday",		linear_pos:27, date_day: 0, date_data: "", CW_data: 0});
	
	array_dates.push({xy_pos:"date_cell_40", weekday:"Monday",		linear_pos:28, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_41", weekday:"Tuesday",		linear_pos:29, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_42", weekday:"Wednesday",	linear_pos:30, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_43", weekday:"Thursday",	linear_pos:31, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_44", weekday:"Friday",		linear_pos:32, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_45", weekday:"Saturday",	linear_pos:33, date_day: 0, date_data: "", CW_data: 0});
	array_dates.push({xy_pos:"date_cell_46", weekday:"Sunday",		linear_pos:34, date_day: 0, date_data: "", CW_data: 0});


	console.log(array_dates[27].linear_pos);


	// first_date.set_date(moment().format('dddd DD MMMM YYYY'));
	// first_date.set_cell(123);

	mainWindow.on('closed', () => {
		mainWindow = null
	})

})

