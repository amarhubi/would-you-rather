import React, { Component } from 'react'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

class NavBar extends Component{
    handleLogout = () => {
        this.props.dispatch(setAuthedUser(null))
    }

    render(){
        return (
            <div>
                <span>Logged in as {this.props.authedUser}</span>
                <a onClick={()=> <Redirect to='/questions' />}>Questions</a>
                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }){
    return {
        authedUser
    }
} 
export default connect(mapStateToProps)(NavBar)