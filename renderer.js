const electron = require('electron')

const ipc = electron.ipcRenderer
const remote = electron.remote
const clipboard = remote.clipboard
const shell = electron.shell

const $ = selector => document.querySelector(selector)

const $calendar_date_cell=$('.calendar_date_cell')
const $calendar_week_cell=$('.calendar_week_cell');

const $cw_cell_00=$('.cw_cell_00');
const $cw_cell_10=$('.cw_cell_10');
const $cw_cell_20=$('.cw_cell_20');
const $cw_cell_30=$('.cw_cell_30');
const $cw_cell_40=$('.cw_cell_40');

const $date_cell_00=$('.date_cell_00');
const $date_cell_01=$('.date_cell_01');
const $date_cell_02=$('.date_cell_02');
const $date_cell_03=$('.date_cell_03');
const $date_cell_04=$('.date_cell_04');
const $date_cell_05=$('.date_cell_05');
const $date_cell_06=$('.date_cell_06');
const $date_cell_07=$('.date_cell_07');
const $date_cell_08=$('.date_cell_08');
const $date_cell_09=$('.date_cell_09');
const $date_cell_10=$('.date_cell_10');
const $date_cell_11=$('.date_cell_11');
const $date_cell_12=$('.date_cell_12');
const $date_cell_13=$('.date_cell_13');
const $date_cell_14=$('.date_cell_14');
const $date_cell_15=$('.date_cell_15');
const $date_cell_16=$('.date_cell_16');
const $date_cell_17=$('.date_cell_17');
const $date_cell_18=$('.date_cell_18');
const $date_cell_19=$('.date_cell_19');
const $date_cell_20=$('.date_cell_20');
const $date_cell_21=$('.date_cell_21');
const $date_cell_22=$('.date_cell_22');
const $date_cell_23=$('.date_cell_23');
const $date_cell_24=$('.date_cell_24');
const $date_cell_25=$('.date_cell_25');
const $date_cell_26=$('.date_cell_26');
const $date_cell_27=$('.date_cell_27');
const $date_cell_28=$('.date_cell_28');
const $date_cell_29=$('.date_cell_29');
const $date_cell_30=$('.date_cell_30');
const $date_cell_31=$('.date_cell_31');
const $date_cell_32=$('.date_cell_32');
const $date_cell_33=$('.date_cell_33');
const $date_cell_34=$('.date_cell_34');
const $date_cell_35=$('.date_cell_35');
const $date_cell_36=$('.date_cell_36');
const $date_cell_37=$('.date_cell_37');
const $date_cell_38=$('.date_cell_38');
const $date_cell_39=$('.date_cell_39');
const $date_cell_40=$('.date_cell_40');
const $date_cell_41=$('.date_cell_41');
const $date_cell_42=$('.date_cell_42');
const $date_cell_43=$('.date_cell_43');
const $date_cell_44=$('.date_cell_44');
const $date_cell_45=$('.date_cell_45');
const $date_cell_46=$('.date_cell_46');


ipc.on('Update-calendar-cw', (event, content) => {    $calendar_week_cell.innerHTML=content})
ipc.on('Update-calendar-date', (event, content) => {    $calendar_date_cell.innerHTML=content;})

ipc.on('Update-cw_cell_00', (event, content) => {    $cw_cell_00.innerHTML=content;})
ipc.on('Update-cw_cell_10', (event, content) => {    $cw_cell_10.innerHTML=content;})
ipc.on('Update-cw_cell_20', (event, content) => {    $cw_cell_20.innerHTML=content;})
ipc.on('Update-cw_cell_30', (event, content) => {    $cw_cell_30.innerHTML=content;})
ipc.on('Update-cw_cell_40', (event, content) => {    $cw_cell_40.innerHTML=content;})

ipc.on('Update-date_cell_00', (event, content) => {    $date_cell_00.innerHTML=content;})
ipc.on('Update-date_cell_01', (event, content) => {    $date_cell_01.innerHTML=content;})
ipc.on('Update-date_cell_02', (event, content) => {    $date_cell_02.innerHTML=content;})
ipc.on('Update-date_cell_03', (event, content) => {    $date_cell_03.innerHTML=content;})
ipc.on('Update-date_cell_04', (event, content) => {    $date_cell_04.innerHTML=content;})
ipc.on('Update-date_cell_05', (event, content) => {    $date_cell_05.innerHTML=content;})
ipc.on('Update-date_cell_06', (event, content) => {    $date_cell_06.innerHTML=content;})
ipc.on('Update-date_cell_07', (event, content) => {    $date_cell_07.innerHTML=content;})
ipc.on('Update-date_cell_08', (event, content) => {    $date_cell_08.innerHTML=content;})
ipc.on('Update-date_cell_09', (event, content) => {    $date_cell_09.innerHTML=content;})
ipc.on('Update-date_cell_10', (event, content) => {    $date_cell_10.innerHTML=content;})
ipc.on('Update-date_cell_11', (event, content) => {    $date_cell_11.innerHTML=content;})
ipc.on('Update-date_cell_12', (event, content) => {    $date_cell_12.innerHTML=content;})
ipc.on('Update-date_cell_13', (event, content) => {    $date_cell_13.innerHTML=content;})
ipc.on('Update-date_cell_14', (event, content) => {    $date_cell_14.innerHTML=content;})
ipc.on('Update-date_cell_15', (event, content) => {    $date_cell_15.innerHTML=content;})
ipc.on('Update-date_cell_16', (event, content) => {    $date_cell_16.innerHTML=content;})
ipc.on('Update-date_cell_17', (event, content) => {    $date_cell_17.innerHTML=content;})
ipc.on('Update-date_cell_18', (event, content) => {    $date_cell_18.innerHTML=content;})
ipc.on('Update-date_cell_19', (event, content) => {    $date_cell_19.innerHTML=content;})
ipc.on('Update-date_cell_20', (event, content) => {    $date_cell_20.innerHTML=content;})
ipc.on('Update-date_cell_21', (event, content) => {    $date_cell_21.innerHTML=content;})
ipc.on('Update-date_cell_22', (event, content) => {    $date_cell_22.innerHTML=content;})
ipc.on('Update-date_cell_23', (event, content) => {    $date_cell_23.innerHTML=content;})
ipc.on('Update-date_cell_24', (event, content) => {    $date_cell_24.innerHTML=content;})
ipc.on('Update-date_cell_25', (event, content) => {    $date_cell_25.innerHTML=content;})
ipc.on('Update-date_cell_26', (event, content) => {    $date_cell_26.innerHTML=content;})
ipc.on('Update-date_cell_27', (event, content) => {    $date_cell_27.innerHTML=content;})
ipc.on('Update-date_cell_28', (event, content) => {    $date_cell_28.innerHTML=content;})
ipc.on('Update-date_cell_29', (event, content) => {    $date_cell_29.innerHTML=content;})
ipc.on('Update-date_cell_30', (event, content) => {    $date_cell_30.innerHTML=content;})
ipc.on('Update-date_cell_31', (event, content) => {    $date_cell_31.innerHTML=content;})
ipc.on('Update-date_cell_32', (event, content) => {    $date_cell_32.innerHTML=content;})
ipc.on('Update-date_cell_33', (event, content) => {    $date_cell_33.innerHTML=content;})
ipc.on('Update-date_cell_34', (event, content) => {    $date_cell_34.innerHTML=content;})
ipc.on('Update-date_cell_35', (event, content) => {    $date_cell_35.innerHTML=content;})
ipc.on('Update-date_cell_36', (event, content) => {    $date_cell_36.innerHTML=content;})
ipc.on('Update-date_cell_37', (event, content) => {    $date_cell_37.innerHTML=content;})
ipc.on('Update-date_cell_38', (event, content) => {    $date_cell_38.innerHTML=content;})
ipc.on('Update-date_cell_39', (event, content) => {    $date_cell_39.innerHTML=content;})
ipc.on('Update-date_cell_40', (event, content) => {    $date_cell_40.innerHTML=content;})
ipc.on('Update-date_cell_41', (event, content) => {    $date_cell_41.innerHTML=content;})
ipc.on('Update-date_cell_42', (event, content) => {    $date_cell_42.innerHTML=content;})
ipc.on('Update-date_cell_43', (event, content) => {    $date_cell_43.innerHTML=content;})
ipc.on('Update-date_cell_44', (event, content) => {    $date_cell_44.innerHTML=content;})
ipc.on('Update-date_cell_45', (event, content) => {    $date_cell_45.innerHTML=content;})
ipc.on('Update-date_cell_46', (event, content) => {    $date_cell_46.innerHTML=content;})