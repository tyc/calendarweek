# Calendar Week

![Image of the app](https://github.com/tyc/calendarweek/blob/master/images/Calendar_Week.png)


# How it know where to put the dates?

For the current month, it puts the first day of the month on the top row. We find out which day it is, and calculate the actual day cell starting from top left cell, which is Monday. Once this is detected, it continues to fill in the days until it reaches the end of the month.

If the 1st day of the month does not start on a Monday, there will be some days from the previous month. This can be shown on the calendar by decrementing the days backwards from the 1st day.

# momentjs

I am using [momentjs] (http://momentjs.com/) to handle the logic and the processing of the dates. It certainly make things easier.


