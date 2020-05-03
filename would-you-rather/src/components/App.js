import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import QuestionListContainer from './QuestionListContainer'
import NewQuestion from './NewQuestion'
import LoginPage from './LoginPage'
import NavBar from './NavBar'



class App extends React.Component {
  
  componentDidMount(){
    // debugger
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <LoadingBar />
          <h1>Would you rather</h1>

          {this.props.loggedIn 
            ? <div>
                <NavBar />
                <QuestionListContainer />
                <NewQuestion />
              </div>
            : (this.props.usersLoading 
                ? null
                : <div>
                    <LoginPage />
                  </div>
              )
          }
        </div>
      </div>
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
