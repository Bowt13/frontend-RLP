import { GET_BONNUMMER } from '../actions/types'

export default function(state = {}, { type, payload }) {
	switch (type) {
		case GET_BONNUMMER:
			return payload

		default:
			return state
	}
}
