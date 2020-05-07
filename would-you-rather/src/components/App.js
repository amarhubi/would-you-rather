import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import QuestionListContainer from './QuestionListContainer'
import NewQuestion from './NewQuestion'
import LoginPage from './LoginPage'
import Navigation from './Navigation'
import Leaderboard from './Leaderboard'
import QuestionPage from './QuestionPage'
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
            {this.props.loggedIn 
              ? <div>
                  <Navigation />
                  <Route path='/' exact component={QuestionListContainer} />
                  <Route path='/new-question' exact component={NewQuestion} />
                  <Route path='/leaderboard' exact component={Leaderboard} />
                  <Route path='/question/:id' component={QuestionPage} />
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
