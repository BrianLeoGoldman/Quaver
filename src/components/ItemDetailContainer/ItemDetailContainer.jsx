import { useEffect, useState } from "react"
import { getVynilsFromJSON } from "../../helpers/dataHelper"
import { Spinner } from "../Spinner/Spinner"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    // Efecto de montaje
    useEffect(() => {
        setLoading(true)
        /* getVynilsFromJSON()
            .then((data) => setItem(data.find((elem) => elem.id === Number(id))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false)) */

            // 1. Armar una referencia (sync)
            const docRef = doc(db, "products", id) // Base de datos, Coleccion, Id del doc
            // 2. Consumir esa referencia (async)
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

        return(
            <div>
                { loading ? <Spinner/> : <ItemDetail item={item}/> }
            </div>
        )
}