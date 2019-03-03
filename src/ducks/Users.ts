import { Dispatch } from 'redux'
import { IServices } from '../services'

export interface ILogin {
  email: string
  password: string
}

export default function reducer(state = {}) {
  return state
}

// export const login = ({ email, password }: ILogin) => 
//   async (dispatch: Dispatch, getState: () => any, { auth }: IServices) => 
//     await auth.signInWithEmailAndPassword(email, password)
export const login = ({ email, password }: ILogin) => 
  (dispatch: Dispatch, getState: () => any, { auth }: IServices) => 
    auth.createUserWithEmailAndPassword(email, password)
      .then()
      .catch(() => {
        // tslint:disable-next-line:no-console 
        console.log('failed')
        return
      })
