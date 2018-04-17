import {GET_DELIVERIES} from '../actions/types'

export default function (state = null, {type, payload}) {
	switch (type) {
		case GET_DELIVERIES:
			return payload

		default:
      return state
	}
}
