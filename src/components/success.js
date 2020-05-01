import React from 'react'
import Nav from '../components/Nav/Nav'

class Success extends React.Component {
    state = {
        username: null
    }

    async componentDidMount() {
        const response = await fetch('/profile', 
        {
            method: "GET",
            cache: "no-cache",
            mode: "cors"
        })

        const content = await response.json()

        this.setState({
            username: content.username
        })
    }


    render() {
        return (
            <>
            <Nav />
            <h1>You have logged in </h1>
            <h3>{this.state.username}</h3>
            </>
        )
    }
}

export default Success