import React from 'react'

export default function DataHelper() {
  return (
    <div>

    </div>
  )
}

export function LastDay(day) {
  const lastday = new Date(day);
  lastday.setDate(0);
  return lastday.getDay(); // returns the day of the week
}

export function GetDay(y, m, d) {
  const DayGetter = new Date(y, m, d);
  return DayGetter.getDay()
}
export function GetLastDay(y, m, d) {
  const DayGetter = new Date(y, m+=1, d); // because it's is 0 based and by setting date to zero we will get the last day of the month
    DayGetter.setDate(0)
    return DayGetter.getDate()
}
function weeks(week, arr) {
  for (let w = week[week.length - 1] + 1; w <= week[week.length - 1] + 7; w++) {
    arr.push(w)
  }
  return arr;
}

export function alldays(firstday, lastday) {
  let lastMonthDays = [];
  let n = []; // sets an empty array then push the remained days of the prev month into it
  var [secondweek, thirdweek, fourthweek,  fifthweek, LastDays, LastWeek] = [[], [], [], [], [], []];
  let [end, end2] = [[], []];
  for (let i = 0; i < firstday; i++) {
    lastMonthDays.push(i)
  }
  for (let i = 1; i <= 7 - firstday; i++) {
    n.push(i);
  }
  let we = weeks(secondweek, n)
  let we2 = weeks(we, secondweek)
  let we3 = weeks(we2, thirdweek)
  let we4 = weeks(we3, fourthweek);
  
  
if (lastday - we4[we4.length - 1] < 7) {
  let LastDays = lastday - we4[we4.length - 1];
 for (let i = we4[we4.length - 1]+1; i <= LastDays + we4[we4.length - 1]; i++) {
   end.push(i) 
 }
}
 if  ( (lastday - we4[we4.length - 1] >= 7)) {
  for (let k = we4[we4.length - 1]+1; k <= we4[we4.length - 1] + 7; k++) {
    fifthweek.push(k)
  }
}
if (lastday - fifthweek[fifthweek.length - 1] < 7) {
  for (let a = fifthweek[fifthweek.length - 1]+1; a <= lastday - fifthweek[fifthweek.length - 1] + fifthweek[fifthweek.length - 1]; a++) {
    end2.push(a)
    
  }
}
  let nextdays = n.map(n => <td key={n}>{n}</td>)
  let lasts = lastMonthDays.map(l => <td key={l}>..</td>)
 
  return <>
    <tr>{lasts}{nextdays}</tr>
    <tr>
      {secondweek.map(s => <td key={s}>{s}</td>)}
    </tr>
    <tr>
      {thirdweek.map(s => <td key={s}>{s}</td>)}
    </tr>
    <tr>
      {fourthweek.map(f => <td key={f}>{f}</td>)}
    </tr>
    <tr>
      {LastWeek.map(f => <td key={f}>{f}</td>)}
    </tr>
    <tr>
      {LastDays.map(l => <td key={l}>{l}</td>)}
    </tr>
    <tr>
      {fifthweek.map(f => <td key={f}>{f} </td>)}
    </tr>
    <tr>
      {end.map(l => <td key={l}> {l} </td>)}
    </tr>
    <tr>
      {end2.map(l => <td key={l}> {l} </td>)}
    </tr>
  </>

}

