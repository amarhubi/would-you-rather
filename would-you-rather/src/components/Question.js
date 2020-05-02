import React, { Component } from 'react'
import { connect } from 'react-redux'


class Question extends Component {
    render(){
        const { question } = this.props
        return(
            <li>
                <span>Question</span>
                <div>{question.optionOne.text}</div>
                <div>{question.optionTwo.text}</div>
            </li>
        )
    }
}

function mapStateToProps({ questions, authedUser }, { id }){
    return{
        question: questions[id],
        authedUser
    }
}

export default connect(mapStateToProps)(Question)