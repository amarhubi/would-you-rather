import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProgressBar from 'react-bootstrap/ProgressBar'

class QuestionOption extends Component {
    // handleClick = () => {
    //     const { id, optionName, dispatch } = this.props
    //     console.log(optionName)
    //     dispatch(handleAnswerQuestion(optionName, id))
    // }

    render(){
        const { option, userChoice, totalVotes } = this.props
        const now = option.votes.length / totalVotes * 100

        return(
            <div className={'option' + (userChoice ? ' chosen' : '')}>
                {userChoice 
                    ? (<div>You answered: </div>)
                    : null }
                <div className='option-text'>
                    ...{option.text} 
                </div>
                <ProgressBar now={now} label={`${now.toFixed(1)}%`}/>
                <div className='vote-results'>{option.votes.length} of {totalVotes} votes</div>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }, { option, question }){
    return {
        authedUser,
        option,
        userChoice: option.votes.includes(authedUser), 
        totalVotes: question.optionOne.votes.length + question.optionTwo.votes.length 
    }
}

export default connect(mapStateToProps)(QuestionOption)