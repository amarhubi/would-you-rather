import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderboardEntry extends Component {
    render(){
        const { userId, authedUser, user } = this.props
        const numberOfQuestions = user.questions.length,
            numberOfAnswers = Object.keys(user.answers).length
        const total = numberOfAnswers + numberOfQuestions
        
        return(
            <div className='leaderboard-entry-container'>
                <img src={user.avatarURL} alt={'avatar of ' + user.name} className="avatar"/>
                <div className='leaderboard-entry-details'>
                    <h5>{user.name}</h5> 
                    <table>
                        <tr>
                            <td className='attribute'>Total</td>
                            <td className='value'>{total}</td>
                        </tr>
                        <tr>
                            <td className='attribute'>Questions asked</td>
                            <td className='value'>{numberOfQuestions}</td>
                        </tr>
                        <tr>
                            <td className='attribute'>Questions answered</td>
                            <td className='value'>{numberOfAnswers}</td>
                        </tr>
                    </table>
                    {userId === authedUser && <span>This is you!</span>}
                </div>
            </div>
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