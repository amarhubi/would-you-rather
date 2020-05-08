import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredQuestionDetail from './UnansweredQuestionDetail'
import AnsweredQuestionDetail from './AnsweredQuestionDetail'

class QuestionPage extends Component {
    render(){
        const { question , answered} = this.props
        return (
            answered 
            ? (<div>
                  <AnsweredQuestionDetail question={question}/>
                </div>)
            : (<div>
                    <UnansweredQuestionDetail question={question}/>
                </div>)
        )
    }
}

function mapStateToProps({ questions, users, authedUser }, props){
    const { id } = props.match.params
    return {
        answered: Object.keys(users[authedUser].answers).includes(id),
        questions,
        users,
        authedUser,
        id,
        question: questions[id]
    }
}
export default connect(mapStateToProps)(QuestionPage)