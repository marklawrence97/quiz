import React from 'react'

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
            <h1>You have logged in </h1>
            <h3>{this.state.username}</h3>
            </>
        )
    }
}

export default Success