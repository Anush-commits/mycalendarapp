import React, { useState } from 'react'
import { Day, FullYear, myMonth, alldays } from '../DataHelper/DataHelper'
import Year from './Year';
import Month from './Month';
import Week from './Week';
const week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Friday', 'Satur'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function CalendarTable() {
    const [weekday, setweekday] = useState(Day('2020, 1, 1'))
    const [year, setyear] = useState(FullYear('2020, 1, 1'))
    const [month, setmonth] = useState(myMonth('2020, 1, 1'))
    const SetNext = () => {
        setmonth(month + 1)
        if (months[month] === 'December') {
            setmonth(month - 11)
            setyear(year + 1)
        }
    }
    let arr = alldays(weekday)
    return (
        <>
            <table>
                <thead>
                    <Year year={year} />
                    <Month m={months[month]} />
                    <Week weekdays={week} />
                </thead>
                <tbody>
                    {arr}
                </tbody>
            </table>
            <div className='controls'>
                <button> Previous </button>
                <button onClick={SetNext}> Next </button>
            </div>
        </>
    )
}

