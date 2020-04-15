import React from 'react'

function UserInput({label, placeholder, ChangeHandler}) {
    return (
        <>
           <label>
                {label}
            <input placeholder={placeholder} onChange={ChangeHandler}/>
            </label>
        </>
    )
}

export default UserInput
