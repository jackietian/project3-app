export const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
export const months = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]
export const getCurrentDate = () => new Date()

export const getMonth = (date) => date.getMonth()

export const getYear = (date) => date.getFullYear()

export const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate()

export const getDay = (date) => date.getDay()

export const getFirstDayOfMonth = (year, month) =>
    getDay(new Date(year, month, 1))

export const getLastDayOfMonth = (year, month) =>
    getDay(new Date(year, month + 1, 0))

export const getCalendarDates = (month, year) => {
    const firstDay = getFirstDayOfMonth(year, month)
    const lastDay = getLastDayOfMonth(year, month)
    const daysInMonth = getDaysInMonth(year, month)
    let daysInPrevMonth = getDaysInMonth(year, month - 1)

    const calendarDates = []
    for (let i = 1; i <= daysInMonth; i++) {
        calendarDates.push({
            label: i,
            value: new Date(year, month, i).toDateString(),
        })
    }

    for (let i = 0; i < firstDay; i++) {
        calendarDates.unshift({
            label: daysInPrevMonth,
            value: new Date(year, month - 1, daysInPrevMonth).toDateString(),
        })
        daysInPrevMonth = daysInPrevMonth - 1
    }

    let day = 1
    for (let i = 6; i > lastDay; i--) {
        calendarDates.push({
            label: day,
            value: new Date(year, month + 1, day).toDateString(),
        })
        day = day + 1
    }

    return calendarDates
}
