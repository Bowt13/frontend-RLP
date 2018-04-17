import {GET_COMPANIES, ADD_COMPANY} from '../actions/companies'

export default function (state = [], action) {
  switch (action.type) {
    case GET_COMPANIES:
      return action.payload
    case ADD_COMPANY:
      return [...state, action.payload]

    default:
      return state
  }
}
