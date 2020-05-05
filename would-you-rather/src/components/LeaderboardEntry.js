import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderboardEntry extends Component {
    render(){
        const { userId, authedUser, user } = this.props
        const numberOfQuestions = user.questions.length,
            numberOfAnswers = Object.keys(user.answers).length
        const total = numberOfAnswers + numberOfQuestions
        return(
            <li key={userId}>
                {userId} Total: {total} Questions asked: {numberOfQuestions} Questions answered: {numberOfAnswers} 
                {userId === authedUser && <span>This is you!</span>}
            </li>
        )
    }
}

function mapStateToProps({ users, authedUser }, { userId }){
    return {
        user: users[userId],
        authedUser
    }
}

export default connect(mapStateToProps)(LeaderboardEntry)