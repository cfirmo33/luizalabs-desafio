import Types from './actionTypes'

export const sendNotification = notification => ({
  type: Types.SEND_NOTIFICATION,
  payload: notification,
})

export const clearNotification = () => ({
  type: Types.CLEAR_NOTIFICATION,
})
