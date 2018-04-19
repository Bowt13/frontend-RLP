import * as request from 'superagent'
import {baseUrl} from '../constants'


export const GET_COMPANIES = 'GET_COMPANIES'
export const ADD_COMPANY = 'ADD_COMPANY'

export const getCompanies = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  request
    .get(`${baseUrl}/companies`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response =>
      dispatch({
      type: GET_COMPANIES,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const createCompany = (company) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt
  request
    .post(`${baseUrl}/companies`)
    .send(company)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response =>
      dispatch({
      type: ADD_COMPANY,
      payload: response.body
    }))
    .catch(err => alert(err))
}
