import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardEntry from './LeaderboardEntry'

class Leaderboard extends Component {
    render(){
        const { userIds, authedUser } = this.props
        return(
                <div className='leaderboard-container'>
                    <h6>Leaderboard</h6>
                    { userIds.map(u => 
                        <LeaderboardEntry key ={u} userId={u} />
                    )}
                </div>
        )
    }
}

function mapStateToProps({ users, authedUser }){
    return {
        userIds: Object.keys(users).sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length) ),
        authedUser
    }
}

export default connect(mapStateToProps)(Leaderboard)