import './ItemScore.scss'
import { useContext, useState } from "react"

export const ItemScore = () => {

    const votes = [
        {vote: 1, img: '📀'},
        {vote: 2, img: '📀📀'},
        {vote: 3, img: '📀📀📀'},
        {vote: 4, img: '📀📀📀📀'},
        {vote: 5, img: '📀📀📀📀📀'}
    ]

    const [score, setScore] = useState(1)

    const handleSelect = (e) => {
        setScore(e.target.value)
    }

    const handleVote = () => {
        console.log(score)
    }
    

    return(
        <div className='score-container'>
            <select className='score' onChange={handleSelect}> 
                {votes.map((item) => {
                    return <option className='item' value={item.vote}>{item.img}</option>
                })}
            </select>
            <button onClick={handleVote}>Vote</button>
        </div>
    )
}