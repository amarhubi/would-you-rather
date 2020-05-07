import React, { Component } from 'react'
import { handleAnswerQuestion } from '../actions/shared'
import { connect } from 'react-redux'
import QuestionOption from './QuestionOption'
import Card, { CardHeader } from 'react-bootstrap/Card'
import { withRouter } from 'react-router-dom'



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

    toQuestion = (e) => {
        e.preventDefault()
        const { id } = this.props
        this.props.history.push(`/question/${id}`)
    }

    render(){
        const { question, answered, id, users} = this.props
        return(
            <div className="poll">
                <div className="poll-header">
                    {users[question.author].name} asks
                </div>
                
                <div>
                    <h6 className='question-subtitle'>
                        Would you rather...
                    </h6>
                    <div className="question-body-container">
                        <img src={users[question.author].avatarURL} className="avatar"/>
                        <div className="question-options">
                            <QuestionOption option={question.optionOne} optionName='optionOne' id={id} answered={answered}/>
                            <QuestionOption option={question.optionTwo} optionName='optionTwo' id={id} answered={answered}/> 
                        </div>
                        <button onClick={(e) => this.toQuestion(e)}>View Poll</button>
                    </div>
                </div>
            </div>            
        )
    }
}

function mapStateToProps({ questions, authedUser, users }, { id }){
    return{
        question: questions[id],
        authedUser,
        users
    }
}

export default withRouter(connect(mapStateToProps)(Question))