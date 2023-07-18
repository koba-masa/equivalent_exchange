const AUTHENTICATION_KEY: string = 'authToken'

/* TODO: ローカルストレージの使用をやめる */
export const logined = (): boolean => {
  return localStorage.getItem(AUTHENTICATION_KEY) !== null
}

export const login = (token: string): void => {
  localStorage.setItem(AUTHENTICATION_KEY, token)
}
