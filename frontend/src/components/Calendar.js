import { useState } from 'react'
import MonthlyCalendar from './MonthlyCalendar'
import WeeklyCalendar from './WeekCalendar'
import DailyCalendar from './DailyCalendar'

const Calendar = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <>
            <section className="center">
                <ul className="list list--actions">
                    <li onClick={() => setActiveTab(0)}>Month</li>
                    <li onClick={() => setActiveTab(1)}>Week</li>
                    <li onClick={() => setActiveTab(2)}>Day</li>
                </ul>
            </section>
            <section>
                {activeTab === 0 && <MonthlyCalendar />}
                {activeTab === 1 && <WeeklyCalendar />}
                {activeTab === 2 && <DailyCalendar />}
            </section>
        </>
    )
}

export default Calendar
