import * as request from 'superagent'
import {baseUrl} from '../constants'


export const GET_CONTACTS = 'GET_CONTACTS'
export const ADD_CONTACT = 'ADD_CONTACT'

export const getContacts = () => (dispatch) => {
    request
    .get(`${baseUrl}/contacts`)
    .then(response => dispatch({
      type: GET_CONTACTS,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const createContact = (contact) => (dispatch) => {
  request
    .post(`${baseUrl}/contacts`)
    .send(contact)
    .then(response => dispatch({
      type: ADD_CONTACT,
      payload: response.body
    }))
    .catch(err => alert(err))
}
