import { useEffect, useState } from "react"
import { MOCK_DATA } from "../../data/MOCK_DATA"
import { getVynils } from "../../helpers/vynilHelper"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = () => {

    const [vynils, setVynils] = useState([]) 
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getVynils()
            .then((res) => {
                setVynils(vynils.concat(res))
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
            { loading ? <h2>Loading...</h2> : <ItemList items={vynils}/> }
        </div>
    )

}