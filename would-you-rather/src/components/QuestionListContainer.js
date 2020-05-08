import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionSnippet from './QuestionSnippet'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


class QuestionListContainer extends Component {
    render(){
        const { answered, unanswered } = this.props
        return (
            <Tabs defaultActiveKey='answered'>
                <Tab eventKey='answered' title='Answered'>
                    <div className='question-list-container'>
                        <h5 className='poll-container-header'>Your answered Polls</h5>

                        {answered.map(id => {
                            return <QuestionSnippet key={id} id={id} />
                        })}
                    </div>
                </Tab>
                <Tab eventKey='unanswered' title='Unanswered'>
                    <div className='question-list-container'>
                        <h5 className='poll-container-header'>Your unanswered Polls</h5>
                        {unanswered.map(id => {
                            return <QuestionSnippet key={id} id={id}/>
                        })}
                    </div>
                </Tab>
            </Tabs>
        )
    }
}


function mapStateToProps({ questions, authedUser }){
    let answered = [], unanswered = []
    for(const q in questions){
        if(questions[q].optionOne.votes.includes(authedUser) || questions[q].optionTwo.votes.includes(authedUser)){
            answered.push(q)
        }
        else {
            unanswered.push(q)
        }
    }

    return{
        answered,
        unanswered
    }
}
export default connect(mapStateToProps)(QuestionListContainer)