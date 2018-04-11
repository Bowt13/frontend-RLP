import * as request from 'superagent'
import { baseUrl } from '../constants'

//actions
import { FORGOT_PASSWORD } from './types'

export const forgotPassword = (email) => (dispatch) =>
  request
    .post(`${baseUrl}/users`)
    .send({ email: email })
    .catch(err => {
      console.error(err)
    })
