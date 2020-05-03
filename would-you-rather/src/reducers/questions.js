import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWSER_QUESTION } from '../actions/questions'

export default function questions(state = {}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS: 
            return {
                ...state,
                ...action.questions,
            }
        case ADD_QUESTION:
            return{
                ...state,
                [action.question.id]: action.question
            }
        case ANSWSER_QUESTION:
            return {
                ...state,
                [action.question.id]: {
                    ...action.question,
                    [action.answer]: {
                        ...action.question[action.answer],
                        votes: action.question[action.answer].votes.concat(action.authedUser)
                    }
                }
            }
        default: 
            return state
    }
}