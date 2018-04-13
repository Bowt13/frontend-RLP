import * as request from 'superagent'
import {baseUrl} from '../constants'
import {USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILED, USER_LOGIN_SUCCESS, USER_LOGIN_FAILED, USER_LOGOUT, GET_USER} from './types'


export const signup = (jwt, password) => (dispatch) => {
		console.log(jwt);
		console.log(password);
	request
		.patch(`${baseUrl}/signup/${jwt}`)
		.send({ password })
		.then(result => {
			dispatch({
				type: USER_SIGNUP_SUCCESS,
				payload: result.body
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
	}

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

export const getUser = (userId) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/users/${userId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch({
        type: GET_USER,
        payload: response.body
      })
    })
    .catch(err => console.error(err))
}
