import { Spinner } from "../Spinner/Spinner"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { useDocument } from "../../hooks/useDocument"

export const ItemDetailContainer = () => {

    const { id } = useParams()
    const { loading, item } = useDocument(id)

        return(
            <div>
                { loading ? <Spinner/> : <ItemDetail item={item}/> }
            </div>
        )
}