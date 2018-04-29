import * as request from 'superagent'
import { baseUrl } from '../constants'

//actions
import { FORGOT_PASSWORD } from './types'

export const forgotPassword = (email) => (dispatch) =>
  request
    .post(`${baseUrl}/forgotPassword`)
    .send({email})
    .then(result=>console.log(result.body))
    .catch(err => {
      console.error(err)
    })
