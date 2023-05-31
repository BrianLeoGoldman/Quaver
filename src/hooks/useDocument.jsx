import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"

// This custom hook returns a reference to variables loading and item
export const useDocument = (id) => {
    
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
            // 1. Set up a reference (sync)
            // Parameters: database, collection, document id
            const docRef = doc(db, "products", id)
            // 2. Consume the reference (async)
            getDoc(docRef)
                .then((doc) => {
                    const _item = {
                        id: doc.id,
                        ...doc.data()
                    }
                    setItem(_item)
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {
                    setLoading(false)
                })
    }, [])

    return ( { loading, item } )
}