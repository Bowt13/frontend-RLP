import * as request from 'superagent'
import { baseUrl } from '../constants'
import { GET_DELIVERIES, ADD_DELIVERY } from './types'

export const getDeliveries = () => (dispatch, getState) => {
	const state = getState()
	const jwt = state.currentUser.jwt

	request
		.get(`${baseUrl}/deliveries`)
		.set('Authorization', `Bearer ${jwt}`)
		.then(result => {
			dispatch({
				type: GET_DELIVERIES,
				payload: result.body
			})
		})
		.catch(err => console.error(err))
}

export const addDelivery = delivery => (dispatch, getState) => {
	const state = getState()
	const jwt = state.currentUser.jwt

	request
		.post(`${baseUrl}/deliveries`)
		.send(delivery)
		.set('Authorization', `Bearer ${jwt}`)
		.then(result => {
			dispatch({
				type: ADD_DELIVERY,
				payload: result.body
			})
		})
		.catch(err => console.error(err))
}
