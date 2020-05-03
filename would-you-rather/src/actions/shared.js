import { _getQuestions, _getUsers, _saveQuestionAnswer } from '../utils/_DATA'
import { receiveUsers, updateUserQuestions } from './users'
import { receiveQuestions, answerQuestion } from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

const authedUser = "tylermcginnis"

export function handleInitialData(){
    return (dispatch) => {
        dispatch(showLoading())
        return Promise.all([_getQuestions(), _getUsers()])
            .then(([questions, users]) => {
                dispatch(receiveQuestions(questions))
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(authedUser))
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
                dispatch(updateUserQuestions({ authedUser, qid, users})) 
            }))}
                    
}