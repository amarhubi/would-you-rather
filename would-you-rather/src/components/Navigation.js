import React, { Component, useReducer } from 'react'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

class Navigation extends Component{
    handleLogout = () => {
        this.props.dispatch(setAuthedUser(null))
    }

    render(){
        const { authedUser } = this.props
        return (
            <Navbar>
                <Link to='/'><Navbar.Brand>Would You Rather</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link className="nav-link" to='/'>Questions</Link>
                    <Link className="nav-link" to='/new-question'>New Question </Link>
                    <Link className="nav-link" to='/leaderboard'>Leaderboard </Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className='user-info'>
                        Signed in as: <a>{authedUser.id}</a><img className='navbar-avatar' src={authedUser.avatarURL} alt={`avatar for ${authedUser.name}`}/>
                    </Navbar.Text>
                    <Button variant='secondary' onClick={this.handleLogout}>Logout</Button>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

function mapStateToProps({ authedUser, users }){
    return {
        authedUser: users[authedUser],
    }
} 
export default connect(mapStateToProps)(Navigation)