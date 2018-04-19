import * as request from 'superagent'
import {baseUrl} from '../constants'
import {GET_CONTACTS, ADD_CONTACT} from './types'

export const getContacts = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

    request
    .get(`${baseUrl}/contacts`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => dispatch({
      type: GET_CONTACTS,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const createContact = (companyId, contact) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/users/company/${companyId}`)
    .send(contact)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => dispatch({
      type: ADD_CONTACT,
      payload: response.body
    }))
    .catch(err => alert(err))
}
