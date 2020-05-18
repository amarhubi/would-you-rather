import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import QuestionListContainer from './QuestionListContainer'
import NewQuestion from './NewQuestion'
import LoginPage from './LoginPage'
import Navigation from './Navigation'
import Leaderboard from './Leaderboard'
import QuestionPage from './QuestionPage'
import PrivateRoute from './PrivateRoute'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
          <div className='container'>
            <Route path='/login' exact component={LoginPage}/>
            {this.props.isAuthenticated && <Navigation />}
            <PrivateRoute path='/' exact component={QuestionListContainer} isAuthenticated={this.props.isAuthenticated} />
            <PrivateRoute path='/add' exact component={NewQuestion} isAuthenticated={this.props.isAuthenticated} />
            <PrivateRoute path='/leaderboard' exact component={Leaderboard} isAuthenticated={this.props.isAuthenticated} />
            <PrivateRoute path='/question/:id' exact component={QuestionPage} isAuthenticated={this.props.isAuthenticated} />
          </div>
      </Router>
      
    )
  }
}

function mapStateToProps({ authedUser }){
  return {
    isAuthenticated: authedUser !== null,
  }
}

export default connect(mapStateToProps)(App);
