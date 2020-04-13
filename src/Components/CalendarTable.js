import React, { useState } from 'react'
import {alldays, GetDay, GetLastDay} from '../DataHelper/DataHelper'
import Year from './Year';
import Month from './Month';
import Week from './Week';
const week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Friday', 'Satur'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function CalendarTable() {
    const GetData = new Date();   
   let [m, SetM] = useState(GetData.getMonth())
   let [y, SetY] = useState(GetData.getFullYear())
    let weekday = GetDay(y, m, 1);
    const SetNext = () => {
       GetData.setMonth(m +=1)
       SetM(m)
       if (m === 12) {
        GetData.setMonth(m-12)
        SetM(m-=12)
        GetData.setFullYear(y +=1)
        SetY(y)
       }
    }
    const SetPrevious = () => {
        GetData.setMonth(m -=1)
        SetM(m)
        console.log(m);
        if (m < 0) {
            GetData.setMonth(m+12)
            SetM(m+=12)
            GetData.setFullYear(y -=1)
            SetY(y)
        }
    }
    let LastDay = GetLastDay(y, m, 1);
    let arr = alldays(weekday, LastDay)
    return (
        <>
            <table>
                <thead>
                    <Year year={y} />
                    <Month m={months[m]} />
                    <Week weekdays={week} />
                </thead>
                <tbody>
                    {arr}
                </tbody>
            </table>
            <div className='controls'>
                <button onClick={SetPrevious}> Previous </button>
                <button onClick={SetNext}> Next </button>
            </div>
        </>
    )
}

