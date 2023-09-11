import React from "react";
class User extends React.Component {
    constructor(props) {
        super(props)
        console.log("text from child constructor")
    }
    componentDidMount() {
        console.log("text from child did mount")
    }
    render() {
        console.log("text from child render")
        return (
            <><div className="contact-card">
                <img className="contact-img" src={this.props.img_url} alt="userimage" />
                <h1>
                    Hii this is  {this.props.name}
                </h1>
                <p>reach out me at {this.props.email}</p>
            </div>
            </>
        )
    }
}
export default User;