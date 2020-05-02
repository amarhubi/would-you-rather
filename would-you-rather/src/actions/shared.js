import { _getQuestions, _getUsers } from '../utils/_DATA'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
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