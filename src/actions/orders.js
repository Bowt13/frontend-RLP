import * as request from 'superagent'
import {baseUrl} from '../constants'
import {ADD_ORDER} from './types'


export const addOrder = (order,addresses) => (dispatch, getState) =>
  const state = getState()
  const jwt = state.currentUser.jwt
  
  request
		.post(`${baseUrl}/orders`)
		.send({ order, addresses })
    .set('Authorization', `Bearer ${jwt}`)
		.then(result => {
			dispatch({
				type: ADD_ORDER
        payload: result.body
			})
		})
		.catch(err => console.log(err))
