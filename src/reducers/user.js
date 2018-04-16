import {GET_USER} from '../actions/types'
//import {sessionStorageJwtKey} from '../constants'

let initialState = {}

export default function (state = initialState, {type, payload}) {
	switch (type) {
		case GET_USER:
      return payload

		default:
      return state
	}
}
