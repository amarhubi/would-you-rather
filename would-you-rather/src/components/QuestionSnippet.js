import React, { Component } from 'react'
import { handleAnswerQuestion } from '../actions/shared'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'



class QuestionSnippet extends Component {
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
        const { question, users} = this.props
        const author = users[question.author]
        return(
            <div className="poll">
                <div className="poll-header">
                    {author.name} asks
                </div>
                
                <div>
                    <h6 className='question-subtitle'>
                        Would you rather...
                    </h6>
                    <div className="question-body-container">
                        <img src={author.avatarURL} alt={`avatar for ${author.name}`} className="avatar"/>
                        <div className="question-options">
                            ...{question.optionOne.text}...or...
                        </div>
                        
                    </div>
                    <button onClick={(e) => this.toQuestion(e)}>View Poll</button>
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

export default withRouter(connect(mapStateToProps)(QuestionSnippet))