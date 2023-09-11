import React from 'react'
class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }
    }
    render() {
        return (
            <> <h1>count:{this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })

                }}>click</button >
                <h1>hello from class component</h1>
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
            </>
        )

    }
}
export default User;