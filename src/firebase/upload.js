import data from "../data/data.json" assert { type: 'json' }
import { collection, addDoc } from 'firebase/firestore'
import { db } from './config.js'

data.forEach((elem) => delete elem.id)

const productsRef = collection(db, "products")

data.forEach((elem) => addDoc(productsRef, elem))