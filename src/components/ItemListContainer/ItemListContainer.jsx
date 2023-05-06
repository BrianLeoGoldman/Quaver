import { ItemList } from "../ItemList/ItemList"
import { useVynils } from "../../hooks/useVynils"

export const ItemListContainer = () => {

    const { loading, vynils } = useVynils()
    
    return(
        <div>
            { loading ? <h2>Loading...</h2> : <ItemList items={vynils}/> }
        </div>
    )

}