import { ItemList } from "../ItemList/ItemList"
import { useCollection } from "../../hooks/useCollection"
import { Spinner } from "../Spinner/Spinner"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {

    const { categoryId } = useParams()
    const { loading, vynils } = useCollection(categoryId)
    
    return(
        <div>
            { loading ? <Spinner/> : <ItemList items={vynils}/> }
        </div>
    )

}