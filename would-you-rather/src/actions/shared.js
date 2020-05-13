import { _getQuestions, _getUsers, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { receiveUsers, updateUserAnswers, updateUserQuestions } from './users'
import { receiveQuestions, answerQuestion, addQuestion } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'


export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading())
        return Promise.all([_getQuestions(), _getUsers()])
            .then(([questions, users]) => {
                dispatch(receiveQuestions(questions))
                dispatch(receiveUsers(users))
                dispatch(hideLoading())
            })
            .catch(
                console.error('Error trying to retrieve date')
            )
    }
}


export function handleAnswerQuestion(answer, qid){
    return (dispatch, getState) => {
        const { authedUser, questions, users } = getState()
        dispatch(showLoading())
        return (
            _saveQuestionAnswer({authedUser, qid, answer}).then(() => {
                dispatch(answerQuestion({ authedUser, question: questions[qid], answer }))
                dispatch(updateUserAnswers({ authedUser, qid, users, answer})) 
                dispatch(hideLoading())
            }))}
                    
}

export function handleAddQuestion(optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const { authedUser } = getState()
        dispatch(showLoading())
        return (_saveQuestion({optionOneText, optionTwoText, author: authedUser})
            .then(question => {
                console.log(question)
                dispatch(addQuestion(question))
                dispatch(updateUserQuestions(question, authedUser))
                dispatch(hideLoading())
            })
        )
    }
}