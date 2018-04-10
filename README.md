# Calendar Week

![Image of the app](https://github.com/tyc/calendarweek/blob/master/images/Calendar_Week.png)

# Why did you write Calendar Week

I wrote Calendar Week as a way of getting back to codding. Electron JS was a convinient way of writing code and can write code on a MacOS. Especially when I can just download it, install it and start coding without paying any money.

The only thing is that I am most experience with C and assembly. Javascript is very new for me. It is almost oo high level with many abstraction level.

# Calendar Week

It starts off with displaying the current month and the current day is highlighted. Each row represents a week, the starting day is a Monday. It shows the current month with a colour focus. It may also show the trailing days from the previous month and the starting days from the next months.

 

# How it know where to put the dates?

For the current month, it puts the first day of the month on the top row. We find out which day it is, and calculate the actual day cell starting from top left cell, which is Monday. Once this is detected, it continues to fill in the days until it reaches the end of the month.

If the 1st day of the month does not start on a Monday, there will be some days from the previous month. This can be shown on the calendar by decrementing the days backwards from the 1st day.

# momentjs

I am using [momentjs] (http://momentjs.com/) to handle the logic and the processing of the dates. It certainly make things easier.


