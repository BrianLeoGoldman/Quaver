import './VynilCardList.scss'
import { VynilCard } from "../VynilCard/VynilCard"

export const VynilCardList = ( { items } ) => {

    return (
        <div className='card-list'>
            {
                items && items.map((vynil) => (<VynilCard item={vynil} key={vynil.id}/>))
            }
        </div>
    )
}