import React, { Component } from 'react'
import { connect } from 'react-redux'

class LoginPage extends Component {
    render(){
        const { users } = this.props
        return(
            <div>
                Login as
                <ul>
                    {users.map(u => {
                        <li key={u.id}>{u.id}</li>
                    })}
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