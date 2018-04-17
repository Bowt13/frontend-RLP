import {GET_CONTACTS, ADD_CONTACT} from '../actions/contacts'

export default function (state = [], action) {
  switch (action.type) {
    case GET_CONTACTS:
      return action.payload
    case ADD_CONTACT:
    return [...state, action.payload]

    default:
      return state
  }
}
