import * as request from 'superagent'
import {baseUrl} from '../constants'
import {USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILED, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGOUT} from './types'


export const signup = (email, password) => (dispatch) =>
	request
		.post(`${baseUrl}/users`)
		.send({ email, password })
		.then(result => {
			dispatch({
				type: USER_SIGNUP_SUCCESS
			})
		})
		.catch(err => {
			if (err.status === 400) {
				dispatch({
					type: USER_SIGNUP_FAILED,
					payload: err.response.body.message || 'Unknown error'
				})
			}
			else {
				console.error(err)
			}
		})

export const login = (email, password) => (dispatch) =>
	request
		.post(`${baseUrl}/logins`)
    .send({ email, password })
    .then(result => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: result.body
      })
    })
    .catch(err => {
    	if (err.status === 400) {
    		dispatch({
    			type: USER_LOGIN_FAILED,
    			payload: err.response.body.message || 'Unknown error'
    		})
    	}
    	else {
    		console.error(err)
    	}
    })

export const logout = () => ({
  type: USER_LOGOUT
})
