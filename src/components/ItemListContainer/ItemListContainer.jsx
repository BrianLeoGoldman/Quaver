import { ItemList } from "../ItemList/ItemList"
import { useVynils } from "../../hooks/useVynils"
import { Spinner } from "../Spinner/Spinner"

export const ItemListContainer = () => {

    const { loading, vynils } = useVynils()
    
    return(
        <div>
            { loading ? <Spinner/> : <ItemList items={vynils}/> }
        </div>
    )

}