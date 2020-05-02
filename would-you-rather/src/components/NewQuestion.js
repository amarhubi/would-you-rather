import React, { Component } from 'react'
import { handleAddQuestion } from '../actions/questions'
import { connect } from 'react-redux'

class NewQuestion extends Component {
    state = {
        text: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({text: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Submitted question text: ${e.target.value}`)
        const { dispatch } = this.props

        dispatch(handleAddQuestion('option 1', 'option 2'))
    }

    render(){
        const { text } = this.state,
            maxLength = 100
        let questionLeft = maxLength - text.length
        return (<div>
            <h3>New Question</h3>
            <form className='new-question' onSubmit={(e) => this.handleSubmit(e)}>
                <textarea 
                    value={text}
                    onChange={(e) => this.handleChange(e)}
                    placeholder="What do you want to know"
                    className='textarea'
                    maxLength={maxLength}
                />
                {questionLeft <= 50 && <div className='tweet-length'>{questionLeft}</div>}
                <button className='btn'>SUBMIT</button>
            </form>
        </div>)
    }
}

export default connect()(NewQuestion)