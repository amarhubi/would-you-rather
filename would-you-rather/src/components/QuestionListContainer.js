import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionList from './QuestionList'

class QuestionListContainer extends Component {
    render(){
        const { answered, unanswered } = this.props
        return (
            <div>
                List of questions
                <div>Answered</div>
                    <ul>
                        <QuestionList questions={answered} />
                    </ul>
                <div>Unanswered</div>
                    <ul>
                        <QuestionList questions={unanswered} />
                    </ul>
            </div>
        )
    }
}


function mapStateToProps({ questions, authedUser }){
    let answered = [], unanswered = []
    for(const q in questions){
        if(questions[q].optionOne.votes.includes(authedUser) || questions[q].optionTwo.votes.includes(authedUser)){
            answered.push(q)
        }
        else {
            unanswered.push(q)
        }
    }

    return{
        authedUser,
        answered,
        unanswered
    }
}
export default connect(mapStateToProps)(QuestionListContainer)