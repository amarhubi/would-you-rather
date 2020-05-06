import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import QuestionListContainer from './QuestionListContainer'
import NewQuestion from './NewQuestion'
import LoginPage from './LoginPage'
import NavBar from './NavBar'
import Leaderboard from './Leaderboard'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
          <div className='container'>
            <LoadingBar />
            <h1>Would you rather</h1>

            {this.props.loggedIn 
              ? <div>
                  <NavBar />
                  <Route path='/' exact component={QuestionListContainer} />
                  <Route path='/new-question' exact component={NewQuestion} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
                </div>
              : <Route path='/' exact component={LoginPage} />
              // : (this.props.usersLoading 
              //     ? null
              //     : <Route path='/' exact component={LoginPage} />  
              //   )
            }
          </div>
      </Router>
      
    )
  }
}

function mapStateToProps({ authedUser, questions, users }){
  console.log(users)
  return {
    loggedIn: authedUser !== null,
    usersLoading: Object.keys(users).length === 0,
    questions,
  }
}

export default connect(mapStateToProps)(App);
