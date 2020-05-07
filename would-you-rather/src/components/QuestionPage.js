import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionPage extends Component {
    render(){
        const { id } = this.props
        return <div>Question Page {id}</div>
    }
}

function mapStateToProps({ questions, users, authedUser }, props){
    const { id } = props.match.params
    return {
        questions,
        users,
        authedUser,
        id
    }
}
export default connect(mapStateToProps)(QuestionPage)