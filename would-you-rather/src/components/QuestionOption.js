import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/shared'

class QuestionOption extends Component {
    handleClick = () => {
        const { id, optionName, dispatch } = this.props
        console.log(optionName)
        dispatch(handleAnswerQuestion(optionName, id))
    }

    render(){
        const { option, authedUser, answered } = this.props

        return(
            <div>
                { answered 
                    ? (option.votes.includes(authedUser)  
                            ? <div>{option.text} <span>Your choice</span></div>
                            : <div>{option.text}</div>
                        )
                    : <div onClick={this.handleClick}>{option.text}</div>


                }
            </div>
            
        )
    }
}

function mapStateToProps({ authedUser }, { option }){
    return {
        authedUser,
        option
    }
}

export default connect(mapStateToProps)(QuestionOption)