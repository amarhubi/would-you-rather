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
        const userChoice = option.votes.includes(authedUser)

        return(
            answered 
                ?
                    <div className={'option'  + (userChoice ? ' chosen' : '')}>
                        ...{option.text}
                    </div>
                :   <div onClick={this.handleClick} className='option'>
                        ...{option.text}
                    </div>
            // answered 
            //         ? (option.votes.includes(authedUser)  
            //                 ? <div>{option.text} <span>Your choice</span></div>
            //                 : <div>{option.text}</div>
            //             )
            //         : <div onClick={this.handleClick}>{option.text}</div>
        )
    }
}

function mapStateToProps({ authedUser, users }, { option, id }){
    return {
        authedUser,
        answered: Object.keys(users[authedUser].answers).includes(id),
        option
    }
}

export default connect(mapStateToProps)(QuestionOption)