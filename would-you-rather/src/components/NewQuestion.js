import React, { Component } from 'react'
import { handleAddQuestion } from '../actions/shared'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

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
        this.props.history.push('/')
    }

    render(){
        const { optionOne, optionTwo } = this.state,
            maxLength = 100
        return (<div className='new-question'>
            <h3>New Question</h3>
            <form className='new-question' onSubmit={(e) => this.handleSubmit(e)}>
                <label>Option one</label>
                <textarea 
                    value={optionOne}
                    onChange={(e) => this.handleChange(e)}
                    placeholder="Option one"
                    className='textarea'
                    maxLength={maxLength}
                    id='optionOne'
                />
                <label>Option two</label>
                <textarea 
                    value={optionTwo}
                    onChange={(e) => this.handleChange(e)}
                    placeholder="Option one"
                    className='textarea'
                    maxLength={maxLength}
                    id='optionTwo'
                />
                <button className='btn'>SUBMIT</button>
            </form>
        </div>)
    }
}

export default withRouter(connect()(NewQuestion))