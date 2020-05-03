import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class LoginPage extends Component {
    handleLogin = (user) => {
        const { dispatch } = this.props
        dispatch(setAuthedUser(user))
    }
    render(){
        const { users } = this.props
        console.log(users)

        return(
            <div>
                Login as
                <ul>
                    {Object.keys(users).map(u => 
                        <li onClick={() => this.handleLogin(u)} key={u}>{u}</li>
                    )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users }){
    return {
        users,
    }
}
export default connect(mapStateToProps)(LoginPage)