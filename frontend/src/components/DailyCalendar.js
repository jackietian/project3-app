import { useState } from 'react'
import {
    weekdays,
    getMonth,
    getYear,
    getCurrentDate,
    months,
    getDay,
} from '../services/dates'

import { withAuthorization } from './withAuthorization'

const DailyCalendar = () => {
    const [month, setMonth] = useState(getMonth(getCurrentDate()))
    const [year, setYear] = useState(getYear(getCurrentDate()))
    const [curerntDate, setCurrentDate] = useState(getCurrentDate())

    const getTimeline = () => {
        const timelines = []
        let startTime = 0
        for (let i = 0; i < 96; i++) {
            if (i % 4 !== 0) {
                timelines.push('')
            } else {
                if (startTime < 12) {
                    if (startTime === 0) {
                        timelines.push(`12 am`)
                    } else {
                        timelines.push(`${startTime} am`)
                    }
                } else {
                    timelines.push(`${startTime} pm`)
                }
                startTime = startTime + 1
            }
        }

        return timelines
    }

    const getDaySlots = () => {
        let slots = []
        for (let i = 0; i < 96; i++) {
            slots.push(i)
        }
        return slots
    }

    const goPrev = () => {}

    const goNext = () => {}

    const goToday = () => {}

    return (
        <>
            <section>
                <section className="row space-between">
                    <h1>
                        {months[month]} {year}
                    </h1>
                    <ul className="list list--actions">
                        <li onClick={goPrev}>prev</li>
                        <li onClick={goToday}>today</li>
                        <li onClick={goNext}>next</li>
                    </ul>
                </section>
            </section>
            <section className="row">
                <section>
                    <ul className="list--time-lines">
                        {getTimeline().map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
                <section style={{ flex: 1 }}>
                    <h1 className="sm-size mr-0 center bg-dark">
                        {weekdays[getDay(curerntDate)]}
                    </h1>
                    <ul className="list--time-slots">
                        {getDaySlots().map((slot, index) => (
                            <li key={index}></li>
                        ))}
                    </ul>
                </section>
            </section>
        </>
    )
}

export default withAuthorization(DailyCalendar)
