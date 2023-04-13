import { useState } from "react"
import { Card } from "./Card"

export const CardList = () => {

    const [results, setResults] = useState([])

    const fetchData = async () => {
        const vynils = [
        /* {id: 1, name: 'Band 1', price: 3000, artist: 'Nirvana', state: [], discs: 1, description: 'A description', picture: "images/vynil-yellow.jpg"},
        {id: 2, name: 'Band 2', price: 4000, artist: 'Nirvana', state: [], discs: 1, description: 'A description', picture: "images/vynil-red.jpg"},
        {id: 3, name: 'Band 3', price: 2500, artist: 'Nirvana', state: [], discs: 1, description: 'A description', picture: "images/vynil-yellow.jpg"},
        {id: 4, name: 'Band 4', price: 3600, artist: 'Nirvana', state: [], discs: 1, description: 'A description', picture: "images/vynil-red.jpg"},
        {id: 5, name: 'Band 5', price: 4100, artist: 'Nirvana', state: [], discs: 1, description: 'A description', picture: "images/vynil-yellow.jpg"},
        {id: 6, name: 'Band 6', price: 7090, artist: 'Nirvana', state: [], discs: 1, description: 'A description', picture: "images/vynil-red.jpg"} */
    ]
        try {
            const importData = await fetch("data.json");
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
                let card = Card(name, artist, price, state, discs, description, picture)
                htmlVynils.push(card)
            })
            setResults(htmlVynils)
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div>
            <button onClick={ fetchData }>Click me</button>
            <div>{results}</div>
        </div>
    )
}