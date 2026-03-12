import { initializeApp } from 'firebase/app'
import { getStorage, ref, uploadString } from 'firebase/storage'
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAkd8YKMC0w4J1Yclu9qY1c_-oBk-iEkNY',
  authDomain: 'photo-gallery-a9e6b.firebaseapp.com',
  projectId: 'photo-gallery-a9e6b',
  storageBucket: 'photo-gallery-a9e6b.firebasestorage.app',
  messagingSenderId: '729608489244',
  appId: '1:729608489244:web:8ba294530fabe8df1f92d9'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const storage = getStorage(app)
const db = getFirestore(app)

export {
  storage,
  ref,
  uploadString,
  db,
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy
}
