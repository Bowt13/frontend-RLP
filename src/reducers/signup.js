import { USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILED } from '../actions/types'

export default function(state = {}, { type, payload }) {
	switch (type) {
		case USER_SIGNUP_SUCCESS:
			return {
				success: true
			}

		case USER_SIGNUP_FAILED:
			return {
				success: false
			}

		default:
			return state
	}
}
