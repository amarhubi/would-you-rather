import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter, Redirect } from 'react-router-dom'

class LoginPage extends Component {
    state = {
        selectedUser: '',
        redirectToReferrer: false
    }

    handleLogin = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        const { selectedUser } = this.state
        if(selectedUser !== ''){
            dispatch(setAuthedUser(selectedUser))
            this.setState({redirectToReferrer: true})
        }
    }

    handleOptionChange = (e) => {
        this.setState({selectedUser: e.target.value})
    }
    render(){        
        const { users } = this.props
        const { selectedUser, redirectToReferrer } = this.state
        const { from } = this.props.location.state || { from: { pathname: '/' }}
       
        if(redirectToReferrer === true){
            return <Redirect to={from} />
        }
        return(
            <div className='login-form'>
                <h2>Welcome to the Would You Rather App</h2>
                <h5>Please select a user to login</h5>
                <form onSubmit={(e) => this.handleLogin(e)}className='user-list'>
                    {Object.keys(users).map(u => 
                        <label key={u}>
                            <input type='radio' value={u} checked={selectedUser===u} onChange={(e) => this.handleOptionChange(e)} />
                            {u}
                        </label>                    
                                                        
                    )}
                    <button >Login</button>
                </form>
            </div>
        )

    }
}

function mapStateToProps({ users  }){
    return {
        users  
    }
}
export default withRouter(connect(mapStateToProps)(LoginPage))