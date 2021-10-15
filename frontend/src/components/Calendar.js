import { useState } from 'react'
import MonthlyCalendar from './MonthlyCalendar'

const Calendar = () => {
    const [activeTab, setActiveTab] = useState(0)
    return (
        <>
            <section>
                <ul className="list">
                    <li onClick={() => setActiveTab(0)}>Month</li>
                    <li onClick={() => setActiveTab(1)}>Week</li>
                    <li onClick={() => setActiveTab(2)}>Day</li>
                </ul>
            </section>
            <section>
                {activeTab === 0 && <MonthlyCalendar />}
                {activeTab === 1 && <h1>day cal</h1>}
                {activeTab === 2 && <h1>week cal</h1>}
            </section>
        </>
    )
}

export default Calendar
