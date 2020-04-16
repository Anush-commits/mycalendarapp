import React from 'react'
export default function DataHelper() {
  return  <div> </div>
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
  const DayGetter = new Date(y, m += 1, d); // because it's is 0 based and by setting date to zero we will get the last day of the month
  DayGetter.setDate(0)
  return DayGetter.getDate()
}
function PrevMonthDays(FirstDay) {
  let EmptyTd = [];
  for (let i = 0; i < FirstDay; i++) {
    EmptyTd.push(i)
  }
  return EmptyTd;
}
function PrevDays(prevday) {
  let PrevArr = []
  for (let i = 1; i <= 7 - prevday; i++) {
    PrevArr.push(i)
  }
  return PrevArr;
}
function Week(prevWeek) {
  let NextWeek = [];
  for (let i = prevWeek[prevWeek.length - 1] + 1; i < prevWeek[prevWeek.length - 1] + 1 + 7; i++) {
    NextWeek.push(i)
  }
  return NextWeek;
}
export function alldays(firstday, lastday, today) {
  let prev = PrevMonthDays(firstday)
  let prevdays = PrevDays(firstday)
  let w2 = Week(prevdays);
  let w3 = Week(w2);
  let w4 = Week(w3);
  let [w5, w6, w7] = [[], [], []];
  if (lastday - w4[w4.length - 1] >= 7) {
    w5 = Week(w4);
  }
  if (lastday !== w5[w5.length - 1]) {
    for (let i = w5[w5.length - 1] + 1; i <= lastday; i++) {
      w7.push(i)
    }
  }
  if (lastday - w4[w4.length - 1] < 7) {
    for (let i = w4[w4.length - 1] + 1; i <= lastday; i++) {
      w6.push(i)
    }
  }
  let Style = {}
  return (
    <>
      <tr>{prev.map(k => <td key={k}>..</td>)}{prevdays.map(p => <td key={p}>{p}</td>)}</tr>
      <tr>{w2.map(w => <td key={w}>{w}</td>)}</tr>
      <tr>{w3.map(w => {
        if (w === today) {
          Style = { backgroundColor: '#0c7b93', color: '#21243d' }
        }
        else {
          Style = {}
        }
        return <td key={w} style={Style}>{w}</td>
      })}
      </tr>
      <tr>{w4.map(w => {
        if (w === today) {
          Style = { backgroundColor: '#0c7b93', color: '#21243d' }
        } else {
          Style = {}
        }
        return <td key={w} style={Style}>{w}</td>
      })}</tr>
      <tr>{w5.map(w => {
        if (w === today) {
          Style = { backgroundColor: '#0c7b93', color: '#21243d' }
        } else {
          Style = {}
        }
        return <td key={w} style={Style}>{w}</td>
      })}</tr>
      <tr>{w6.map(w => {
        if (w === today) {
          Style = { backgroundColor: '#0c7b93', color: '#21243d' }
        } else {
          Style = {}
        }
        return <td key={w} style={Style}>{w}</td>
      })}</tr>
      <tr>{w7.map(w => {
        if (w === today) {
          Style = { backgroundColor: '#0c7b93', color: '#21243d' }
        } else {
          Style = {}
        }
        return <td key={w}>{w}</td>
      })}</tr>
    </>
  )
}