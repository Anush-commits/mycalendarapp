import React from 'react'

export default function Week({weekdays}) {
    return (
        <tr>
        {
            weekdays.map(day => <th key={day} > {day} </th>)
        }
    </tr>
    )
}
