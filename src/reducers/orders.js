import {GET_ORDERS, ADD_MESSAGE} from '../actions/types'

export default function (state = [], {type, payload}) {
	switch (type) {
		case GET_ORDERS:
			return payload

		case ADD_MESSAGE:
			const orderId = payload.id
			return state = state.map((order)=> {
				if (order.id === orderId)
				  return payload
				return order
			})
		default:
      return state
	}
}
