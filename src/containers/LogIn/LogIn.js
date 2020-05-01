import React from 'react';
import UserInput from '../../components/UserInput/UserInput';
import { Link, Redirect } from 'react-router-dom'
import './login.css'

class LogIn extends React.Component {
    state = {
        username: "",
        password: "",
        error: "",
        redirect: ""
    }

    handleUserNameInput = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordInput = (event) => {
        this.setState({
            password: event.target.value
        })
    } 

    onRegister = async () => {
        const {username, password} = this.state

        if (!username) {
            this.setState({
                error: "You haven't added a username!"
            })
            return;
        }

        if (!password) {
            this.setState({
                error: "You haven't included a password"
            })
            return;
        }

        const response = await fetch('/login', {
            method: "POST",
            cache: "no-cache",
            mode: "cors",
            headers: {
                username,
                password
            }
        })

        const content = await response.json()

        if (content['logIn']) {
            this.setState({
                redirect: '/success'
            })
        }

        if (content['error']) {
            this.setState({
                error: content['error']
            })
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
                                name="Password"
                                stateName="password"
                                stateVal={this.state.password}
                                handleChange={this.handlePasswordInput}
                            />
                            <p className="error">{this.state.error}</p>
                        </div>
                        <div className="register button">
                            <button 
                                className="submit" 
                                type="submit"
                                onClick={this.onRegister}>
                                Log in!
                            </button>
                            <Link to="/Register">Not a member? register here instead...</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LogIn