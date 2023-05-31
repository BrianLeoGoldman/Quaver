import './ItemScore.scss'
import { useContext, useState } from "react"
import swal from 'sweetalert';

export const ItemScore = () => {

    const votes = [
        {vote: 1, img: '📀'},
        {vote: 2, img: '📀📀'},
        {vote: 3, img: '📀📀📀'},
        {vote: 4, img: '📀📀📀📀'},
        {vote: 5, img: '📀📀📀📀📀'}
    ]

    const [score, setScore] = useState(1)
    const [voted, setVoted] = useState(false)

    const handleSelect = (e) => {
        setScore(e.target.value)
    }

    const handleVote = () => {
        setVoted(true)
        swal({
            title: "Thanks for your vote",
            text: `You give a vote of ${score} vynils`,
            button: "OK!"
        })
    }
    

    return(
        <div className='score-container'>
            <select disabled={voted} className='score' onChange={handleSelect}> 
                {votes.map((item) => {
                    return <option key={item.vote} className='item' value={item.vote}>{item.img}</option>
                })}
            </select>
            <button disabled={voted} className='button' onClick={handleVote}>Vote</button>
        </div>
    )
}