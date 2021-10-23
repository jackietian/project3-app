import { weekdays } from '../services/dates'
const WeeklyCalendar = () => {
    const todos = [
        {
            weekday: 'Sun',
            startHour: 3,
            startMin: 0,
            endHour: 5,
            endMin: 0,
            title: 'todo1',
        },
        {
            weekday: 'Mon',
            startHour: 6,
            startMin: 0,
            endHour: 7,
            endMin: 0,
            title: 'todo2',
        },
        {
            weekday: 'Thu',
            startHour: 0,
            startMin: 0,
            endHour: 3,
            endMin: 0,
            title: 'todo3',
        },
    ]
    const getDaySlots = () => {
        let slots = []
        let hour = 0
        let minute = 0
        for (let i = 0; i < 96; i++) {
            // hour = [0, 0, 0, 0, 1, 1, 1, 1, ...23, 23, 23, 23]
            // minute = [(0, 15, 30, 45)]

            slots.push({
                hour,
                minute: (minute = [0, 15, 30, 45][i % 4]),
            })

            if (i % 4 === 0) {
                hour = hour + 1
            }
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
                            <li key={item} style={{ position: 'relative' }}>
                                <ul className="list--time-slots">
                                    {getDaySlots().map((slot, index) => (
                                        <li key={index}></li>
                                    ))}
                                </ul>

                                <ul>
                                    {todos.map((todo) => {
                                        if (todo.weekday === item) {
                                            return (
                                                <li
                                                    style={{
                                                        position: 'absolute',
                                                        backgroundColor: 'red',
                                                        color: '#fff',
                                                        top: `${
                                                            todo.startHour *
                                                            4 *
                                                            2
                                                        }rem`,
                                                        height: `${
                                                            (todo.endHour -
                                                                todo.startHour) *
                                                            8
                                                        }rem`,
                                                    }}>
                                                    {todo.title}
                                                </li>
                                            )
                                        }
                                    })}
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
