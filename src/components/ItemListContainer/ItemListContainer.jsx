import { ItemList } from "../ItemList/ItemList"
import { useVynils } from "../../hooks/useVynils"
import { Spinner } from "../Spinner/Spinner"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

    const { id } = useParams()  // useParams() es un custom hook
    const { loading, vynils } = useVynils(id)
    
    return(
        <div>
            { loading ? <Spinner/> : <ItemList items={vynils}/> }
        </div>
    )

}