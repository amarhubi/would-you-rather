import React, { Component } from 'react'
import { handleAnswerQuestion } from '../actions/shared'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'



class UnansweredQuestionDetail extends Component {
    state = {
        selectedOption: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const { question, dispatch } = this.props
        const { selectedOption } = this.state
        console.log(`Selected: ${selectedOption}`)
        dispatch(handleAnswerQuestion(selectedOption, question.id))
    }

    handleOptionChange = (e) => {
        this.setState({selectedOption: e.target.value})
    }

    toQuestion = (e) => {
        e.preventDefault()
        const { id } = this.props
        this.props.history.push(`/question/${id}`)
    }

    render(){
        const { question, users} = this.props
        return(
            <div className="poll">
                <div className="poll-header">
                    {users[question.author].name} asks
                </div>
                
                <div>
                    <h6 className='question-subtitle'>
                        Would you rather...
                    </h6>
                    <div className="question-body-container">
                        <img src={users[question.author].avatarURL} alt={'avatar of ' + users[question.author].name} className="avatar"/>
                        <div className="question-options">
                            <form onSubmit={(e) => this.handleSubmit(e)}>
                                <label>
                                    <input type='radio' value='optionOne' checked={this.state.selectedOption==='optionOne'} onChange={(e) => this.handleOptionChange(e)} />
                                    {question.optionOne.text}
                                </label>
                                <label>
                                    <input type='radio' value='optionTwo' checked={this.state.selectedOption==='optionTwo'} onChange={(e) => this.handleOptionChange(e)} />
                                    {question.optionTwo.text}
                                </label>                            
                                <button >Submit</button>
                            </form>

                            {/* <QuestionOption option={question.optionOne} optionName='optionOne' id={id}/>
                            <QuestionOption option={question.optionTwo} optionName='optionTwo' id={id}/>  */}
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
}

function mapStateToProps({ users }){
    return{
        users
    }
}

export default withRouter(connect(mapStateToProps)(UnansweredQuestionDetail))