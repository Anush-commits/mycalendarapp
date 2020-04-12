import React from 'react'

export default function DataHelper() {
  return (
    <div>

    </div>
  )
}

export function Day(data) {
  const weekday = new Date(data);
  return weekday.getDay(); // returns the day of the week
}

export function FullYear(y) {
  const year = new Date(y);
  return year.getFullYear();
}

export function myMonth(m) {
  const month = new Date(m);
  return month.getMonth();
}

export function LastDay(day) {
  const lastday = new Date(day);
  lastday.setDate(0);
  return lastday.getDay(); // returns the day of the week
}

export function today() {
  let data = new Date();
  return data;
}

function weeks(week, arr) {
  for (let w = week[week.length - 1] + 1; w <= week[week.length - 1] + 7; w++) {
    arr.push(w)
  }
  return arr;
}

export function alldays(firstday) {
  let lastMonthDays = [];
  let n = []; // sets an empty array then push the remained days of the prev month into it
  let secondweek = [];
  let thirdweek = [];
  let fourthweek = [];
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
  let LastDays = [];
  let nextdays = n.map(n => <td key={n}>{n}</td>)
  let lasts = lastMonthDays.map(l => <td key={l}>..</td>)

  for (let i = we4[we4.length - 1]; i <= 31; i++) {
    LastDays.push(i)
  }
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
      {LastDays.map(l => <td key={l}>{l}</td>)}
    </tr>
  </>

}

