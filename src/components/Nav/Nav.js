import React from 'react'
import './Nav.css'

const Nav = () => {

    const onSignOut = async () => {
        const response = await fetch('/logout')
        const content = await response.json()
        console.log(content)
    }

    return ( 
        <div className="Nav">
            <div className="left-items">
                Let's get quizzeh
            </div>
            <div className="right-items">
                <p onClick={onSignOut} className="button">Sign Out</p>
            </div>
        </div>
    )
}

export default Nav