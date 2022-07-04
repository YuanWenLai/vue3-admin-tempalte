const TokenKey = 'Admin-Token'

export function getToken() {
  return true
  return sessionStorage.getItem(TokenKey)
}

export function setToken(token: string) {
  return sessionStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return sessionStorage.removeItem(TokenKey)
}
