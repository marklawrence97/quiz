import React from 'react';
import './Register.css';
import UserInput from '../../components/UserInput/UserInput';
import { Redirect, Link } from 'react-router-dom'

class Register extends React.Component {
    state = {
        username: "",
        fname: "",
        lname: "",
        password: "",
        password2: "",
        email: "",
        error: "",
        showError: false,
        redirec: null,
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
    
    onRegister = async () => {
        const { username, fname, lname, password, email, password2, showError} = this.state

        if (!password || !password2 || !email || !username || !lname || !fname) {
            this.setState({
                showError: true,
                error: "Your need to fill in all of the fields!"
            })
            return
        }

        if (!email.includes("@")) {
            this.setState({
                showError: true,
                error: "Your email address doesn't look like the right format!"
            })
            return 
        }
        
        if (password !== password2) {
            this.setState({
                showError: true,
                error: "Your passwords don't match!"
            })
            return
        }

        this.setState({
            error: "",
            showError: false
        })     

        if (!showError) {
            const response = await fetch('/register', 
                {
                    method: "POST",
                    cache: "no-cache",
                    mode: "cors",
                    headers: {
                        username,
                        fname,
                        lname,
                        password,
                        email
                    }
                })
        
            const content = await response.json()

            if (content['logIn']) {
                this.setState({
                    redirect: '/success'
                })
            }
        }
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

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
                            <p className="error">{this.state.error}</p>
                        </div>
                        <div className="register button">
                            <button 
                                className="submit" 
                                type="submit"
                                onClick={this.onRegister}>
                                Register
                            </button>
                            <Link to="/login">Already a member? Log in instead...</Link>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

export default Register