import React, { Component } from 'react'
import { handleAddQuestion } from '../actions/questions'
import { connect } from 'react-redux'

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({[e.target.id]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { optionOne, optionTwo } = this.state
        const { dispatch } = this.props
        this.setState({optionOne: '', optionTwo: ''})
        dispatch(handleAddQuestion(optionOne, optionTwo))
    }

    render(){
        const { optionOne, optionTwo } = this.state,
            maxLength = 100
        // let questionLeft = maxLength - text.length
        return (<div>
            <h3>New Question</h3>
            <form className='new-question' onSubmit={(e) => this.handleSubmit(e)}>
                <textarea 
                    value={optionOne}
                    onChange={(e) => this.handleChange(e)}
                    placeholder="Option one"
                    className='textarea'
                    maxLength={maxLength}
                    id='optionOne'
                />
                <textarea 
                    value={optionTwo}
                    onChange={(e) => this.handleChange(e)}
                    placeholder="Option one"
                    className='textarea'
                    maxLength={maxLength}
                    id='optionTwo'
                />
                {/* {questionLeft <= 50 && <div className='question-length'>{questionLeft}</div>} */}
                <button className='btn'>SUBMIT</button>
            </form>
        </div>)
    }
}

export default connect()(NewQuestion)