import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import QuestionList from './QuestionList'



class App extends React.Component {
  state = {
    answered: [],
    unanswered: [],
  }

  componentDidMount(){
      this.props.dispatch(handleInitialData())
    }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <LoadingBar />
          {this.props.loading 
            ? null
            : <div>
                <span>Would you rather</span>
                <QuestionList />
              </div>
          }
          
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }){
  return {
    loading: authedUser === null,
    questions,
  }
}

export default connect(mapStateToProps)(App);
