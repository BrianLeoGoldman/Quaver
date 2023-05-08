import { useEffect, useState } from "react"
import { MOCK_DATA } from "../data/MOCK_DATA"
import { getVynilsFromJSON } from "../helpers/dataHelper"

export const useVynils = (id) => {
    // Custom hooks que retorna una referencia al estado de las variables loading y vynils

    const [vynils, setVynils] = useState([]) 
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
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
    }, [id])

    return ( { loading, vynils } )
}