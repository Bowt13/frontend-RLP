import {GET_USER, USER_LOGOUT} from '../actions/types'
//import {sessionStorageJwtKey} from '../constants'

let initialState = {}

export default function (state = initialState, {type, payload}) {
	switch (type) {
		case GET_USER:
      return payload

		case USER_LOGOUT:
			return null

		default:
      return state
	}
}
