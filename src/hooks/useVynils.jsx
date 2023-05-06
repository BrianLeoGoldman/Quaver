import { useEffect, useState } from "react"
import { MOCK_DATA } from "../data/MOCK_DATA"
import { getVynils } from "../helpers/vynilHelper"

export const useVynils = () => {

    const [vynils, setVynils] = useState() 
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

    return ( { loading, vynils } )
}