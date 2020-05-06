import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


class QuestionListContainer extends Component {
    render(){
        const { answered, unanswered } = this.props
        return (
            <Tabs defaultActiveKey='answered'>
                <Tab eventKey='answered' title='Answered'>
                    <ul>
                        {answered.map(id => {
                            return <Question key={id} id={id} answered={true} />
                        })}
                    </ul>
                </Tab>
                <Tab eventKey='unanswered' title='unanswered'>
                    <ul>
                        {unanswered.map(id => {
                            return <Question key={id} id={id} answered={false} />
                        })}
                    </ul>
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