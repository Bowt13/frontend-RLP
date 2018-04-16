import * as request from 'superagent'
import {baseUrl} from '../constants'


export const GET_COMPANIES = 'GET_COMPANIES'

export const getCompanies = () => (dispatch) => {
  request
    .get(`${baseUrl}/companies`)
    .then(response => dispatch({
      type: GET_COMPANIES,
      payload: response.body
    }))
    .catch(err => alert(err))
}
