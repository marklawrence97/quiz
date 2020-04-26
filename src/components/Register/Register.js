import React from 'react'
import './Register.css'

class Register extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h1>start quizing <span className="emphasise">today...</span></h1>
                <div className="background">
                    <div className="formContainer">
                        <div className="fields">
                            <div className="field">
                                <label htmlFor="username">Username:</label>
                                <input className="field-input" type="text" name="username">
                                </input>
                            </div>
                        </div>
                        <div className="register button">
                            <button className="submit" type="submit">
                                Register
                            </button>
                            <p>Already a member? Log in instead...</p>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default Register