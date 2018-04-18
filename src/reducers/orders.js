import {GET_ORDERS, ADD_ORDER} from '../actions/types'

export default function (state = [], {type, payload}) {
	switch (type) {
		case GET_ORDERS:
			return payload

		case ADD_ORDER:
			return state.concat(payload)

		default:
      return state
	}
}
