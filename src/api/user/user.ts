const url = 'http://localhost:8000/api/'

async function login<T>(userData: T): Promise<T> {
  console.log('login api')
  return await fetch(`${url}login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData),
    credentials: 'include'
  }).then((response: any) => {
    return response.json()
  })
}

async function register(userData: any): Promise<any> {
  console.log('register api')
  return await fetch(`${url}register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  }).then((response: any) => {
    return response.json()
  })
}

async function getUser(): Promise<any> {
  return await fetch(`${url}user`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  }).then((response: any) => {
    return response.json()
  })
}

export { register, login, getUser }
