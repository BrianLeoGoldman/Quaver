import { useEffect, useState } from "react"
import { MOCK_DATA } from "../data/MOCK_DATA"
import { getVynilsFromJSON } from "../helpers/dataHelper"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"
import { useParams } from "react-router-dom"

export const useVynils = (categoryId) => {
    // Custom hooks que retorna una referencia al estado de las variables loading y vynils

    const [vynils, setVynils] = useState([]) 
    const [loading, setLoading] = useState(true)

    //const { categoryId } = useParams()  
    // Esto seria lo mismo que id

    useEffect(() => {
        setLoading(true)
        /* setTimeout(() => {
            getVynilsFromJSON()
            .then((data) => {
                !id ? setVynils(data) : setVynils(data.filter((elem) => elem.genre === id))
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                setLoading(false)
            })
        }, 2000); */

        // 1. Armar una referencia (sync)
        const productsRef = collection(db, "products")
        const q = categoryId 
            ? query(productsRef, where("genre", "==", categoryId)) 
            : productsRef
        // 2. Consumir esa referencia (async)
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