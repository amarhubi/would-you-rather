import React, { Component } from 'react'
import { handleAnswerQuestion } from '../actions/shared'
import { connect } from 'react-redux'
import QuestionOption from './QuestionOption'


class Question extends Component {
    handleClick = (answer) => {
        const { answered, id, dispatch } = this.props
        if (answered === false){
            console.log(`Selected: ${answer}`)
            dispatch(handleAnswerQuestion(answer, id))
        } else {
            console.log(`Question already answered`)
        }    
    }

    render(){
        const { question, answered, id} = this.props
        return(
            <li>
                <span>Question</span>
                <QuestionOption option={question.optionOne} optionName='optionOne' id={id} answered={answered}/>
                <QuestionOption option={question.optionTwo} optionName='optionTwo' id={id} answered={answered}/>
                {/* <div onClick={() => this.handleClick('optionOne')}>{question.optionOne.text} {answered && <span>Your choice</span>}</div>
                <div onClick={() => this.handleClick('optionTwo')}>{question.optionTwo.text}</div> */}
            </li>
        )
    }
}

function mapStateToProps({ questions, authedUser }, { id }){
    return{
        question: questions[id],
        authedUser
    }
}

export default connect(mapStateToProps)(Question)