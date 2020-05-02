import React, { Component } from 'react'
import { connect } from 'react-redux'


class QuestionList extends Component {
    state = {
        answered: [],
        unanswered: [],
    }

    componentDidMount(){
        const { questions, authedUser } = this.props
        let answered = [], unanswered = []
        for(const q in questions){
            if(questions[q].optionOne.votes.includes(authedUser) || questions[q].optionTwo.votes.includes(authedUser)){
                answered.push(questions[q])
            }
            else {
                unanswered.push(questions[q])
            }
        }
        
        this.setState({
            answered,
            unanswered,
        })
    }
    render(){
        const { answered, unanswered } = this.state
        return (
            <div>
                List of questions
                <div>Answered</div>
                <ul>
                    {answered.map(q => {
                        console.log(q)
                        return (<div>
                            <div>{q.optionOne.text}</div>
                            <div>{q.optionTwo.text}</div>
                        </div>)
                    })}
                </ul>
                <div>Unanswered</div>
                <ul>
                    {unanswered.map(q => {
                            console.log(q)
                            return (<div>
                                <div>{q.optionOne.text}</div>
                                <div>{q.optionTwo.text}</div>
                            </div>)
                        })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ questions, authedUser }){
    return{
        questions,
        authedUser
    }
}
export default connect(mapStateToProps)(QuestionList)