import React from 'react';

const UserInput = ({name, stateName, stateVal, handleChange}) => {

    let type = stateName

    if (stateName.includes("password")) {
        type = "password"
    }

    return(
        <div className="field">
            <label htmlFor={stateName}>{name}:</label>
            <input 
                className="field-input" 
                type={type} 
                name={stateName}
                value={stateVal}
                onChange={handleChange}>
            </input>
        </div>
    )
}

export default UserInput