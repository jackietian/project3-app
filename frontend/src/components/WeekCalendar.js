import { weekdays } from '../services/dates'
const WeeklyCalendar = () => {
    const getDaySlots = () => {
        let slots = []
        for (let i = 0; i < 96; i++) {
            slots.push(i)
        }
        return slots
    }

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

    return (
        <>
            <section className="row">
                <section>
                    <ul className="list--time-lines">
                        {getTimeline().map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </section>
                <section style={{ flex: 1 }}>
                    <ul className="list--weekly-calendar list--weekly-calendar--header">
                        {weekdays.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>

                    <ul className="list--weekly-calendar">
                        {weekdays.map((item) => (
                            <li key={item}>
                                <ul className="list--time-slots">
                                    {getDaySlots().map((slot, index) => (
                                        <li key={index}></li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </section>
            </section>
        </>
    )
}

export default WeeklyCalendar
