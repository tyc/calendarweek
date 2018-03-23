const electron = require('electron')

const ipc = electron.ipcRenderer
const remote = electron.remote
const clipboard = remote.clipboard
const shell = electron.shell

const $ = selector => document.querySelector(selector)

const $calendar_date_cell=$('.calendar_date_cell')

const $cw_cell_00=$('.cw_cell_00');
const $cw_cell_10=$('.cw_cell_10');
const $cw_cell_20=$('.cw_cell_20');
const $cw_cell_30=$('.cw_cell_30');
const $cw_cell_40=$('.cw_cell_40');

// Create an array of references to the html elements.
const $date_cell_array = [];
$date_cell_array.push({cell_ref: $('.date_cell_00'), cell_id: "date_cell_00"});
$date_cell_array.push({cell_ref: $('.date_cell_01'), cell_id: "date_cell_01"});
$date_cell_array.push({cell_ref: $('.date_cell_02'), cell_id: "date_cell_02"});
$date_cell_array.push({cell_ref: $('.date_cell_03'), cell_id: "date_cell_03"});
$date_cell_array.push({cell_ref: $('.date_cell_04'), cell_id: "date_cell_04"});
$date_cell_array.push({cell_ref: $('.date_cell_05'), cell_id: "date_cell_05"});
$date_cell_array.push({cell_ref: $('.date_cell_06'), cell_id: "date_cell_06"});
$date_cell_array.push({cell_ref: $('.date_cell_10'), cell_id: "date_cell_10"});
$date_cell_array.push({cell_ref: $('.date_cell_11'), cell_id: "date_cell_11"});
$date_cell_array.push({cell_ref: $('.date_cell_12'), cell_id: "date_cell_12"});
$date_cell_array.push({cell_ref: $('.date_cell_13'), cell_id: "date_cell_13"});
$date_cell_array.push({cell_ref: $('.date_cell_14'), cell_id: "date_cell_14"});
$date_cell_array.push({cell_ref: $('.date_cell_15'), cell_id: "date_cell_15"});
$date_cell_array.push({cell_ref: $('.date_cell_16'), cell_id: "date_cell_16"});
$date_cell_array.push({cell_ref: $('.date_cell_20'), cell_id: "date_cell_20"});
$date_cell_array.push({cell_ref: $('.date_cell_21'), cell_id: "date_cell_21"});
$date_cell_array.push({cell_ref: $('.date_cell_22'), cell_id: "date_cell_22"});
$date_cell_array.push({cell_ref: $('.date_cell_23'), cell_id: "date_cell_23"});
$date_cell_array.push({cell_ref: $('.date_cell_24'), cell_id: "date_cell_24"});
$date_cell_array.push({cell_ref: $('.date_cell_25'), cell_id: "date_cell_25"});
$date_cell_array.push({cell_ref: $('.date_cell_26'), cell_id: "date_cell_26"});
$date_cell_array.push({cell_ref: $('.date_cell_30'), cell_id: "date_cell_30"});
$date_cell_array.push({cell_ref: $('.date_cell_31'), cell_id: "date_cell_31"});
$date_cell_array.push({cell_ref: $('.date_cell_32'), cell_id: "date_cell_32"});
$date_cell_array.push({cell_ref: $('.date_cell_33'), cell_id: "date_cell_33"});
$date_cell_array.push({cell_ref: $('.date_cell_34'), cell_id: "date_cell_34"});
$date_cell_array.push({cell_ref: $('.date_cell_35'), cell_id: "date_cell_35"});
$date_cell_array.push({cell_ref: $('.date_cell_36'), cell_id: "date_cell_36"});
$date_cell_array.push({cell_ref: $('.date_cell_40'), cell_id: "date_cell_40"});
$date_cell_array.push({cell_ref: $('.date_cell_41'), cell_id: "date_cell_41"});
$date_cell_array.push({cell_ref: $('.date_cell_42'), cell_id: "date_cell_42"});
$date_cell_array.push({cell_ref: $('.date_cell_43'), cell_id: "date_cell_43"});
$date_cell_array.push({cell_ref: $('.date_cell_44'), cell_id: "date_cell_44"});
$date_cell_array.push({cell_ref: $('.date_cell_45'), cell_id: "date_cell_45"});
$date_cell_array.push({cell_ref: $('.date_cell_46'), cell_id: "date_cell_46"});

ipc.on('Update-date_cell_array_today', (event, id, content) => {    

    var myElement = document.getElementById($date_cell_array[id].cell_id);

    console.log("the id is " + id);

    myElement.style.backgroundColor="lightblue";

    // $date_cell_array[id].cell_ref.style.backgroundColour="lightblue";
})

ipc.on('Update-date_cell_array', (event, id, content) => {    $date_cell_array[id].cell_ref.innerHTML=content;})

ipc.on('Update-calendar-date', (event, content) => {    $calendar_date_cell.innerHTML=content;})

ipc.on('Update-cw_cell_00', (event, content) => {    $cw_cell_00.innerHTML=content;})
ipc.on('Update-cw_cell_10', (event, content) => {    $cw_cell_10.innerHTML=content;})
ipc.on('Update-cw_cell_20', (event, content) => {    $cw_cell_20.innerHTML=content;})
ipc.on('Update-cw_cell_30', (event, content) => {    $cw_cell_30.innerHTML=content;})
ipc.on('Update-cw_cell_40', (event, content) => {    $cw_cell_40.innerHTML=content;})
