import { GET_CUSTOMERS } from '../actions/types'

export default function (state = [], {type, payload}) {
	switch (type) {
		case GET_CUSTOMERS:
			return payload

		default:
      return state
	}
}
