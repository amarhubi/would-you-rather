import React, { Component } from 'react'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'

class NavBar extends Component{
    handleLogout = () => {
        this.props.dispatch(setAuthedUser(null))
    }

    render(){
        return (
            <div>
                <span>Logged in as {this.props.authedUser} </span>
                <Link to='/'>Questions </Link>
                <Link to='/new-question'>New Question </Link>
                <Link to='/leaderboard'>Leaderboard </Link>
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