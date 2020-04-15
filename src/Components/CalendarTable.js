import React, { useState } from 'react'
import { alldays, GetDay, GetLastDay } from '../DataHelper/DataHelper'
import Year from './Year';
import Month from './Month';
import Week from './Week';
import UserInput from './UserInput';
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function CalendarTable() {
    const GetData = new Date();    
    let [m, SetM] = useState(GetData.getMonth())
    let [y, SetY] = useState(GetData.getFullYear())
    let [toggle, settoggle] = useState(false)
    const [UserMonth, setUserMonth] = useState('')
    const [UserDay, setUserDay] = useState('')
    const [UserYear, SetUserYear] = useState(false)
    let weekday = GetDay(y, m, 1);
    let [UserResult, setUserResult] = useState('')
    const SetNext = () => {
        GetData.setMonth(m += 1)
        SetM(m)
        if (m === 12) {
            GetData.setMonth(m - 12)
            SetM(m -= 12)
            GetData.setFullYear(y += 1)
            SetY(y)
        }
    }
    const SetPrevious = () => {
        GetData.setMonth(m -= 1)
        SetM(m);
        if (m < 0) {
            GetData.setMonth(m + 12)
            SetM(m += 12)
            GetData.setFullYear(y -= 1)
            SetY(y)
        }
    }
    let LastDay = GetLastDay(y, m, 1);
    let arr = alldays(weekday, LastDay)
    let SetYearInput = null;
    if (toggle === true) {
        SetYearInput = <UserInput label="Write year:" placeholder="Year" ChangeHandler={e => {SetUserYear(e.target.value)}}/>
    }
    const SubmitHandler = e => {
        e.preventDefault()       
        if (UserYear === false) {
            SetUserYear(y)
            const SetUserDate = new Date(y, UserMonth, UserDay);
            let FoundDay = SetUserDate.getDay();
            setUserResult( week[FoundDay] )
            
        } else {
            const SetUserDate = new Date(UserYear, UserMonth, UserDay);
           let FoundDay = SetUserDate.getDay();
           console.log(week[FoundDay]);
           setUserResult( week[FoundDay] )
        }
        
    }
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
            <form>
                <UserInput label="Write month:" placeholder="Month" ChangeHandler={e => {setUserMonth(e.target.value)}} />
                <UserInput label="Write day:" placeholder="Day" ChangeHandler={e => {setUserDay(e.target.value)}}/>
                {SetYearInput}
                <button onClick={e => { e.preventDefault(); settoggle(toggle = !toggle)}}> Set year too</button>
                <input type="submit" onClick={SubmitHandler}/>
            </form>
    <h1> Hi, that day was {UserResult}</h1> 

        </>
    )
}

