import {GET_ORDERS} from '../actions/types'

export default function (state = null, {type, payload}) {
	switch (type) {
		case GET_ORDERS:
			return payload
      
		default:
      return state
	}
}
