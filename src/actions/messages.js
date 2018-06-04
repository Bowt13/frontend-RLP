import * as request from 'superagent'
import { baseUrl } from '../constants'
import { MESSAGE_SUCCESS } from './types'
import { socket } from '../store'

export const addMessage = (orderId, message) => (dispatch, getState) => {
	const state = getState()
	const jwt = state.currentUser.jwt
	request
		.post(`${baseUrl}/messages/${orderId}`)
		.set('Authorization', `Bearer ${jwt}`)
		.send({ message })
		.then(result => {
			dispatch({
				type: MESSAGE_SUCCESS
			})
		})
		.catch(err => console.error(err))
}
