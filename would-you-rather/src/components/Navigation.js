import React, { Component } from 'react'
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
        return (
            <Navbar>
                <Link to='/'><Navbar.Brand>Would You Rather</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link className="nav-link" to='/'>Questions</Link>
                    <Link className="nav-link" to='/new-question'>New Question </Link>
                    <Link className="nav-link" to='/leaderboard'>Leaderboard </Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a>{this.props.authedUser}</a>
                    </Navbar.Text>
                    <Button variant='secondary' onClick={this.handleLogout}>Logout</Button>
                </Navbar.Collapse>
            </Navbar>
            // <Navbar>
            //     <Navbar.Brand><Link to='/'>Would You Rather</Link></Navbar.Brand>   
            //     <div>
            //     <span>Logged in as {this.props.authedUser} </span>
            //     <Link to='/new-question'>New Question </Link>
            //     <Link to='/leaderboard'>Leaderboard </Link>
            //     <button onClick={this.handleLogout}>Logout</button>
            // </div>
            // </Navbar>
            
        )
    }
}

function mapStateToProps({ authedUser }){
    return {
        authedUser
    }
} 
export default connect(mapStateToProps)(Navigation)