import { _getQuestions, _getUsers, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'
import { receiveUsers, updateUserAnswers, updateUserQuestions } from './users'
import { receiveQuestions, answerQuestion, addQuestion } from './questions'


export function handleInitialData(){
    return (dispatch) => {
        return Promise.all([_getQuestions(), _getUsers()])
            .then(([questions, users]) => {
                dispatch(receiveQuestions(questions))
                dispatch(receiveUsers(users))
            })
        }
}


export function handleAnswerQuestion(answer, qid){
    return (dispatch, getState) => {
        const { authedUser, questions, users } = getState()
        return (
            _saveQuestionAnswer({authedUser, qid, answer}).then(() => {
                dispatch(answerQuestion({ authedUser, question: questions[qid], answer }))
                dispatch(updateUserAnswers({ authedUser, qid, users, answer})) 
            }))}
                    
}

export function handleAddQuestion(optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const { authedUser } = getState()
        return (_saveQuestion({optionOneText, optionTwoText, author: authedUser})
            .then(question => {
                console.log(question)
                dispatch(addQuestion(question))
                dispatch(updateUserQuestions(question, authedUser))
            })
        )
    }
}