import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import QuestionListContainer from './QuestionListContainer'
import NewQuestion from './NewQuestion'



class App extends React.Component {
  
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
                <h1>Would you rather</h1>
                <QuestionListContainer />
                <NewQuestion />
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
