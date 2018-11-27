import Cookie from 'js-cookie'
import { ColorPicker } from 'element-ui';

const cookieKey = 'EQ'

export default {
  getToken() {
    return Cookie.get(cookieKey)
  },
  setToken(token) {
    return Cookie.set(cookieKey, token)
  },
  removeToken() {
    Cookie.remove(cookieKey)
  }
}