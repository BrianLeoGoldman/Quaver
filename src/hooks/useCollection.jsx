import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

// This custom hook returns a reference to variables loading and vynils
export const useCollection = (categoryId) => {
    
    const [vynils, setVynils] = useState([]) 
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        // 1. Set up a reference (sync)
        const productsRef = collection(db, "products")
        const q = categoryId 
            ? query(productsRef, where("genre", "==", categoryId)) 
            : productsRef
        // 2. Consume the reference (async)
        getDocs(q)
            .then((res) => {
                const docs = res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setVynils(docs)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
        
    }, [categoryId])

    return ( { loading, vynils } )
}