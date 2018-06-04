import io from 'socket.io-client'
import { baseUrl } from './constants'

export default class SocketIO {
	socket = null

	connect(dispatch, jwt) {
		this.socket = io.connect(
			baseUrl,
			{
				query: `auth_token=${jwt}`
			}
		)
		this.socket.on('action', payload => dispatch(payload))
	}

	disconnect() {
		this.socket.disconnect()
	}
}
