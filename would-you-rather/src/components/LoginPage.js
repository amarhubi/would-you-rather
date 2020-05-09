import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class LoginPage extends Component {
    handleLogin = (user) => {
        const { dispatch } = this.props
        dispatch(setAuthedUser(user))
    }
    render(){
        const { users, loading } = this.props
        console.log(users)

        return(
            loading 
                ? ''
                : (<div className='login-form'>
                        <h2>Welcome to the Would You Rather App</h2>
                        <h5>Please login select a user to login</h5>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.cvQCcoNtBirVwZWX8g8qcwHaEK&pid=Api" alt='would you rather logo'/>
                        <div className='user-list'>
                            {Object.keys(users).map(u => 
                                <div className='user-list-option' onClick={() => this.handleLogin(u)} key={u}>{u}</div>
                            )}
                        </div>
                    </div>)  

        )
    }
}

function mapStateToProps({ users }){
    return {
        loading: Object.keys(users).length === 0,
        users,
    }
}
export default connect(mapStateToProps)(LoginPage)