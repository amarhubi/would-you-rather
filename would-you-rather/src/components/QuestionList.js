import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Question from './Question'


class QuestionList extends Component {

    render(){
        const { questions } = this.props
        return (
                <ul>
                    {questions.map(id => {
                        console.log(id)
                        return <Question key={id} id={id} />
                    })}
                </ul>        
        )
    }
}

export default QuestionList