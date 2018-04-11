import * as request from 'superagent'

//actions
import { FORGOT_PASSWORD } from './types'

const baseUrl = 'http://localhost:4001'

export const forgotPassword = (email) => (dispatch) =>
  request
    .post(`${baseUrl}/users`)
    .send({ email: email })
    .catch(err => {
      console.error(err)
    })
