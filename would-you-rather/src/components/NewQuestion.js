import React, { Component } from 'react'

class NewQuestion extends Component {
    state = {
        text: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({text: e.target.value})
    }

    handleSubmit = (e) => {
        console.log(`Submitted question text: ${e.target.value}`)
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

export default NewQuestion