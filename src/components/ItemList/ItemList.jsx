import './ItemList.scss'
import { ItemCard } from "../ItemCard/ItemCard"

export const ItemList = ( { items } ) => {

    return (
        <div className='card-list'>
            {
                items && items.map((vynil) => (<ItemCard item={vynil} key={vynil.id}/>))
            }
        </div>
    )
}