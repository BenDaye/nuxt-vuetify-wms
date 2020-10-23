import Auth from './auth'
import Admin from './admin'
import User from './user'
import Menu from './menu'
import Role from './role'
import Log from './log'
import Banner from './banner'
import Message from './message'
import Notification from './notification'

export const getUrl = (url) => {
  return url ? `/api/${url}` : undefined
}

export {
  Auth,
  Admin,
  User,
  Menu,
  Role,
  Log,
  Banner,
  Message,
  Notification,
}
