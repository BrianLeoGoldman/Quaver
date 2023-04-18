import './VynilCardList.scss'
import { useState } from "react"
import { VynilCard } from "../VynilCard/VynilCard"

export const VynilCardList = () => {

    const [results, setResults] = useState([])

    const fetchData = async () => {
        const vynils = [
    /*  {id: 1, name: 'Band 1', price: 3000, artist: 'Artist A', state: [], discs: 1, description: 'A description', picture: '../../src/assets/images/vynils/A.jpg'},
        {id: 2, name: 'Band 2', price: 4000, artist: 'Artist B', state: [], discs: 2, description: 'A description', picture: '../../src/assets/images/vynils/B.jpg'},
        {id: 3, name: 'Band 3', price: 2500, artist: 'Artist C', state: [], discs: 3, description: 'A description', picture: '../../src/assets/images/vynils/A.jpg'},
        {id: 4, name: 'Band 4', price: 3600, artist: 'Artist D', state: [], discs: 4, description: 'A description', picture: '../../src/assets/images/vynils/B.jpg'},
        {id: 5, name: 'Band 5', price: 4100, artist: 'Artist E', state: [], discs: 1, description: 'A description', picture: '../../src/assets/images/vynils/A.jpg'},
        {id: 6, name: 'Band 6', price: 7090, artist: 'Artist F', state: [], discs: 2, description: 'A description', picture: '../../src/assets/images/vynils/B.jpg'} */
    ]
        try {
            const importData = await fetch("../../src/assets/data.json");
            const data = await importData.json();
            data.forEach(item => {
                vynils.push(
                    {id: item.id,
                    name: item.name, 
                    price: item.price, 
                    artist: item.artist, 
                    state: item.state, 
                    discs: item.discs, 
                    description: item.description, 
                    picture: item.picture}
                )
            })
            let htmlVynils = []
            vynils.map(({name, price, artist, state, discs, description, picture}) => {
                let card = VynilCard(name, artist, price, state, discs, description, picture)
                htmlVynils.push(card)
            })
            setResults(htmlVynils)
        } catch(error) {
            console.log(error);
        }
    }

    fetchData()

    return (
        <div className='card-list'>
            {/* <button onClick={ fetchData }>See Vynils</button> */}
            <div>{results}</div>
        </div>
    )
}