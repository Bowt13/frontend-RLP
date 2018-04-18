import * as request from 'superagent'
import {baseUrl} from '../constants'
import {ADD_ORDER, GET_ORDERS, GET_ORDER, GET_BONNUMMER} from './types'

const orderAPIurl = 'http://flexicon.craftingapps.com:8080/crp_api/api/fcrpi_eorder_vw'

export const addOrder = (order,addresses, photo) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  request
		.post(`${baseUrl}/orders`)
		.send({ order, addresses })
    .attach('photo', photo)
    .field(photo)
    .set('Authorization', `Bearer ${jwt}`)
		.then(result => {
			dispatch({
				type: ADD_ORDER,
        payload: result.body
			})
		})
		.catch(err => console.error(err))
  }

  export const addOrderNewAPI = (order) => (dispatch, getState) => {
    const state = getState()
    console.log(order)
    request
      .post(orderAPIurl)
      .auth('crpi_api_helper_user@rest_client_id', 'codaisseur')
  		.send(order)
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

export const getBonnummer = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/orders/orderNumber/newNumber`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: GET_BONNUMMER,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}
