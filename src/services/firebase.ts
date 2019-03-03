import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCzWrgcwWCgqfMbXlcgfm4MDXjD92tm45Y',
  authDomain: 'instacool-1033d.firebaseapp.com',
  databaseURL: 'https://instacool-1033d.firebaseio.com',
  messagingSenderId: '132678206349',
  projectId: 'instacool-1033d',
  storageBucket: 'instacool-1033d.appspot.com'
}
firebase.initializeApp(config)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const storage = firebase.storage()
