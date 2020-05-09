import { RECEIVE_USERS, UPDATE_USER_ANSWERS, UPDATE_USER_QUESTION } from '../actions/users'

export default function users (state = {}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case UPDATE_USER_ANSWERS:
            return {
                ...state,
                [action.authedUser]: {
                    ...action.users[action.authedUser],
                    answers: {
                        ...action.users[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            }
        case UPDATE_USER_QUESTION:
            return {
                ...state,
                [action.authedUser]:{
                    ...state[action.authedUser],
                    questions: state[action.authedUser].questions.concat(action.questionId)
                }
            }
        default:
            return state
    }
}