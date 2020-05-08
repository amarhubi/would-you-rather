import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionOption from './QuestionOption'


class AnsweredQuestionDetail extends Component {
    render(){
        const { question, users, authedUser } = this.props
        const { optionOne, optionTwo } = question

        const userChoice = optionOne.votes.includes(authedUser) 
            ? 'optionOne'
            : 'optionTwo' 
        return (
            <div className="poll">
                <div className="poll-header">
                    {users[question.author].name} asks
                </div>
                
                <div>
                    <h6 className='question-subtitle'>
                        Would you rather...
                    </h6>
                    <div className="question-body-container">
                        <img src={users[question.author].avatarURL} alt={'avatar of ' + users[question.author].name} className="avatar"/>
                        <div className="question-options">
                            {/* <div className={'option'  + (userChoice === 'optionOne' ? ' chosen' : '')}>
                                ...{optionOne.text}
                            </div>
                            <div onClick={this.handleClick} className={'option'  + (userChoice === 'optionTwo' ? ' chosen' : '')}>
                                ...{optionTwo.text}
                            </div> */}
                            <QuestionOption option={optionOne} question={question}/>
                            <QuestionOption option={optionTwo} question={question}/> 
                        </div>
                    </div>
                </div>
            </div>            
        )
        
    }
}


function mapStateToProps({ authedUser, users }, { option, question }){
    return {
        authedUser,
        users,
        question,
        answered: Object.keys(users[authedUser].answers).includes(question.id),
        option,
        totalVotes: question.optionOne.votes.length + question.optionTwo.votes.length 
    }
}

export default connect(mapStateToProps)(AnsweredQuestionDetail)