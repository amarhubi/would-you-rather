import { RECEIVE_USERS, UPDATE_USER_QUESTIONS } from '../actions/users'

export default function users (state = {}, action){
    switch(action.type){
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users,
            }
        case UPDATE_USER_QUESTIONS:
            return {
                ...state,
                [action.authedUser]: {
                    ...[action.authedUser],
                    questions: action.users[action.authedUser].questions.concat(action.qid)
                }
            }
        default:
            return state
    }
}