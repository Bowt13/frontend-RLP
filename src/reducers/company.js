import {GET_COMPANIES} from '../actions/companies'
import {ADD_CONTACT} from '../actions/types'

export default function (state = [], action) {
  switch (action.type) {
    case GET_COMPANIES:
      return action.payload
    //case ADD_COMPANY:
    //  return [...state, action.payload]
    case ADD_CONTACT:
      return state.map(company=>{
        if(action.payload.id===company.id)
          return action.payload
        return company
      })

    default:
      return state
  }
}
