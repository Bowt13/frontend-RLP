import {
	USER_LOGIN_SUCCESS,
	USER_LOGOUT,
	USER_SIGNUP_SUCCESS
} from '../actions/types'
import { sessionStorageJwtKey } from '../constants'

let initialState = null
try {
	const jwt = sessionStorage.getItem(sessionStorageJwtKey)
	if (jwt) {
		initialState = { jwt }
	}
} catch (e) {}

export default function(state = initialState, { type, payload }) {
	switch (type) {
		case USER_LOGIN_SUCCESS:
			return payload

		case USER_SIGNUP_SUCCESS:
			return payload

		case USER_LOGOUT:
			return null

		default:
			return state
	}
}
