import React from 'react'
import './Register.css'
import UserInput from '../../components/UserInput/UserInput'

class Register extends React.Component {
    state = {
        username: "",
        fname: "",
        lname: "",
        password: "",
        password2: "",
        email: ""
    }

    handleUserNameInput = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleEmailInput = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleFnameInput = (event) => {
        this.setState({
            fname: event.target.value
        })
    } 

    handleLnameInput = (event) => {
        this.setState({
            lname: event.target.value
        })
    } 

    handlePasswordInput = (event) => {
        this.setState({
            password: event.target.value
        })
    } 

    handlePassword2Input = (event) => {
        this.setState({
            password2: event.target.value
        })
    } 

    render() {
        return (
            <div className="container">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h1>start quizing <span className="emphasise">today...</span></h1>
                <div className="background">
                    <div className="formContainer">
                        <div className="fields">
                            <UserInput 
                                name="Username"
                                stateName="username"
                                stateVal={this.state.username}
                                handleChange={this.handleUserNameInput}
                            />
                            <UserInput 
                                name="Email"
                                stateName="email"
                                stateVal={this.state.email}
                                handleChange={this.handleEmailInput}
                            />
                            <UserInput 
                                name="First Name"
                                stateName="fname"
                                stateVal={this.state.fname}
                                handleChange={this.handleFnameInput}
                            />
                            <UserInput 
                                name="Last Name"
                                stateName="lname"
                                stateVal={this.state.lname}
                                handleChange={this.handleLnameInput}
                            />
                            <UserInput 
                                name="Password"
                                stateName="password"
                                stateVal={this.state.password}
                                handleChange={this.handlePasswordInput}
                            />
                            <UserInput 
                                name="Repeat Password"
                                stateName="password2"
                                stateVal={this.state.password2}
                                handleChange={this.handlePassword2Input}
                            />
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