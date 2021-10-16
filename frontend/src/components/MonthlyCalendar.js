import React from 'react'
import {
    weekdays,
    getCalendarDates,
    getMonth,
    getYear,
    getCurrentDate,
    months,
} from '../services/dates'

class MonthlyCalendar extends React.Component {
    state = {
        month: getMonth(getCurrentDate()),
        year: getYear(getCurrentDate()),
    }

    isToday = (value) => {
        return new Date().toDateString() === value
    }

    goPrev = () => {
        const { month, year } = this.state
        const prevMonthDate = new Date(year, month - 1)
        this.setState({
            month: getMonth(prevMonthDate),
            year: getYear(prevMonthDate),
        })
    }

    goNext = () => {
        const { month, year } = this.state
        const nextMonthDate = new Date(year, month + 1)
        this.setState({
            month: getMonth(nextMonthDate),
            year: getYear(nextMonthDate),
        })
    }

    goToday = () => {
        this.setState({
            month: getMonth(getCurrentDate()),
            year: getYear(getCurrentDate()),
        })
    }

    renderCalendar = () => {
        const { month, year } = this.state
        return getCalendarDates(month, year)
    }

    handleOnClick = (dateStr) => {
        console.log('clicked', dateStr)
    }

    render() {
        const { month, year } = this.state
        return (
            <section>
                <section className="row space-between">
                    <h1>
                        {months[month]} {year}
                    </h1>
                    <ul className="list list--actions">
                        <li onClick={this.goPrev}>prev</li>
                        <li onClick={this.goToday}>today</li>
                        <li onClick={this.goNext}>next</li>
                    </ul>
                </section>
                <ul className="list list--weekday">
                    {weekdays.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <ul className="list list--monthly-calendar">
                    {this.renderCalendar().map((item, index) => (
                        <li
                            key={index}
                            className={
                                this.isToday(item?.value) ? 'active' : ''
                            }
                            onClick={() => this.handleOnClick(item.value)}>
                            {item?.label === 1
                                ? `1 ${months[getMonth(new Date(item.value))]}`
                                : item.label}
                            <ul>
                                <li>todo1</li>
                                <li>todo2</li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
}

export default MonthlyCalendar
