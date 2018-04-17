import * as request from 'superagent'
import {baseUrl} from '../constants'
import {ADD_ORDER, GET_ORDERS, GET_ORDER} from './types'


export const addOrder = (order,addresses) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  console.log(order, addresses)
  request
		.post(`${baseUrl}/orders`)
		.send({ order, addresses })
    .set('Authorization', `Bearer ${jwt}`)
		.then(result => {
			dispatch({
				type: ADD_ORDER,
        payload: result.body
			})
		})
		.catch(err => console.error(err))
  }

export const getOrders = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
		.get(`${baseUrl}/orders`)
    .set('Authorization', `Bearer ${jwt}`)
		.then(result => {
			dispatch({
				type: GET_ORDERS,
        payload: result.body
			})
		})
		.catch(err => console.error(err))
  }

export const getOrder = (id) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
		.post(`${baseUrl}/orders/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
		.then(result => {
			dispatch({
				type: GET_ORDER,
        payload: result.body
			})
		})
		.catch(err => console.error(err))
  }
