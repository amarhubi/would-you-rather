import { showLoading, hideLoading } from "react-redux-loading"
import { _saveQuestion } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWSER_QUESTION = 'ANSWER_QUESTION'

export function receiveQuestions(questions){
    return {
        type : RECEIVE_QUESTIONS,
        questions
    }
}

export function addQuestion(question){
    return {
        type: ADD_QUESTION,
        question
    }
}

export function answerQuestion({ authedUser, question, answer }){
    return {
        type: ANSWSER_QUESTION,
        authedUser,
        question,
        answer,
    }
}


// export function handleAddQuestion(optionOneText, optionTwoText){
//     return (dispatch, getState) => {
//         const { authedUser } = getState()
//         dispatch(showLoading())
//         return (_saveQuestion({optionOneText, optionTwoText, author: authedUser})
//             .then(question => {
//                 dispatch(addQuestion(question))
//                 dispatch(hideLoading())
//             })
//         )
//     }
// }
