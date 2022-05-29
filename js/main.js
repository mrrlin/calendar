let months = [ "January", "February", "March", "April", 
                 "May", "June", "July", "August", "September",
                 "October", "November", "December"]

let date = new Date(),
    nowDateNumber = date.getDate(),
    nowMonth = date.getMonth(),
    nowYear = date.getFullYear()

let calendar = document.getElementById('calendar'),
      calNameMonth = calendar.getElementsByClassName('calendar__month-name')[0],
      calYear = calendar.getElementsByClassName('calendar__year-name')[0],
      calDays = calendar.getElementsByClassName('calendar__days')[0],
      prevMonth = calendar.getElementsByClassName('calendar__prev-month')[0],
      nextMonth = calendar.getElementsByClassName('calendar__next-month')[0]

let curDate = date.setMonth(date.getMonth() - 1)

function setMonthCal(year, month) {
  let monthDays = new Date(year, month + 1, 0).getDate(), //Returns the number of days in the selected month
      monthPrefix = new Date(year, month, 0).getDay(), //eturns the number of the day of the week
      monthDaysText = ''
  
  calNameMonth.textContent = months[month]
  calYear.textContent = year
  calDays.innerHTML = ''
  
  if (monthPrefix > 0) {
    for (let i = 1; i <= monthPrefix; i++) {
      monthDaysText += '<li></li>'
    }
  }

    for (let i = 1; i <= monthDays; i++) {
      monthDaysText += '<li>' + i + '</li>'
    }

    calDays.innerHTML = monthDaysText

  //Highlight the current date
  if (month == nowMonth && year == nowYear) {
    days = calDays.getElementsByTagName('li')
    days[monthPrefix + nowDateNumber - 1].classList.add('calendar__date-now')
  }
}

setMonthCal(nowYear, nowMonth)

prevMonth.onclick = function() {
  let curDate = new Date(calYear.textContent, months.indexOf(calNameMonth.textContent))
  curDate.setMonth(curDate.getMonth() - 1) //Move the date back a month

  let curYear = curDate.getFullYear(),
      curMonth = curDate.getMonth()

      setMonthCal(curYear, curMonth)
}

nextMonth.onclick = function() {
  let curDate = new Date(calYear.textContent, months.indexOf(calNameMonth.textContent))
  curDate.setMonth(curDate.getMonth() + 1) //Move the date forward by a month

  let curYear = curDate.getFullYear(),
  curMonth = curDate.getMonth()

  setMonthCal(curYear, curMonth)
}