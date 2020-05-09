import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredQuestionDetail from './UnansweredQuestionDetail'
import AnsweredQuestionDetail from './AnsweredQuestionDetail'

class QuestionPage extends Component {
    render(){
        const { question , answered} = this.props
        console.log(question)
        if (question === null) {
            return <p>This question does not exist</p>
        }
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
    const question = questions[id]
    return {
        answered: Object.keys(users[authedUser].answers).includes(id),
        question: question ? question : null
    }
}
export default connect(mapStateToProps)(QuestionPage)