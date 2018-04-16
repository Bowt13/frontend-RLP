import {GET_COMPANIES} from '../actions/companies'

export default function (state = [], action) {
  switch (action.type) {
    case GET_COMPANIES:
      return action.payload

    default:
      return state
  }
}
