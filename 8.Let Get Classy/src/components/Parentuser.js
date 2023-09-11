import React from "react"
import User from "./User";
class Parent extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "undefined",
            image_url: "",
            id: "",
            email: ""
        }
        console.log('text from parent constructor')
    }
    componentDidMount() {
        const data = async () => {
            let data = await fetch("https://api.github.com/users/onkarpethe15-ai")
            let userData = await data.json()
            this.setState({
                name: userData.name || "No Name",
                image_url: userData.avatar_url,
                id: userData.id,
                email: "omkarpethe4@gmail.com"

            })
        }
        console.log('text from parent did mount')
        data()
    }
    componentDidUpdate() {
        console.log('text from component didupdate')

    }
    componentWillUnmount() {
        console.log("text from component will unmount")
    }

    render() {
        console.log("text from parent rendered")
        return (
            <>
                <User name={this.state.name} img_url={this.state.image_url} id={this.state.id} email={this.state.email} />
            </>
        )
    }

}
export default Parent;