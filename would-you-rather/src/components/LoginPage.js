import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class LoginPage extends Component {
    state = {
        selectedUser: ''
    }

    handleLogin = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(setAuthedUser(this.state.selectedUser))
    }

    handleOptionChange = (e) => {
        console.log(e.target.value)
        this.setState({selectedUser: e.target.value})
    }
    render(){
        const { users, loading } = this.props

        return(
            loading 
                ? ''
                : (<div className='login-form'>
                        <h2>Welcome to the Would You Rather App</h2>
                        <h5>Please login select a user to login</h5>
                        <form onSubmit={(e) => this.handleLogin(e)}className='user-list'>
                            {Object.keys(users).map(u => 
                                <label key={u}>
                                    <input type='radio' value={u} checked={this.state.selectedUser===u} onChange={(e) => this.handleOptionChange(e)} />
                                    {u}
                                </label>                    
                                                                
                            )}
                            <button >Submit</button>
                        </form>
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
export default withRouter(connect(mapStateToProps)(LoginPage))