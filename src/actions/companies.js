import * as request from 'superagent'
import {baseUrl} from '../constants'


export const GET_COMPANIES = 'GET_COMPANIES'
export const ADD_COMPANY = 'ADD_COMPANY'

export const getCompanies = () => (dispatch) => {
  request
    .get(`${baseUrl}/companies`)
    .then(response => dispatch({
      type: GET_COMPANIES,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const createCompany = (company) => (dispatch) => {
  request
    .post(`${baseUrl}/companies`)
    .send(company)
    .then(response => dispatch({
      type: ADD_COMPANY,
      payload: response.body
    }))
    .catch(err => alert(err))
}
