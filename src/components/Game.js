import React, {useState} from 'react'
import Board from './Board'
import { calculateWinner } from '../helpers'

const style = {
    width: "200px",
    margin: "20px auto"
}

const winner_message = {
    padding: "2px",
    background: "green"
}

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const winner = calculateWinner(board)
    
    const handleClick= (i) => {
        const boardCopy = [...board]
        // If user click an occupied square or if game is won, return
        if (winner || boardCopy[i]) return
        // Put an X or an O in the clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O'
        setBoard(boardCopy)
        setXisNext(!xIsNext)
    }

    const renderMoves = () => {
        return <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    }

    return (
        <div>
            <Board squares={board} onClick={handleClick} />
            <div style={style}>
                <p>{"Player's Turn: " + (xIsNext ? 'X' : 'O')}</p>
                <p style={winner_message}>{winner ? 'Winner: ' + winner : ''}</p> 
                {renderMoves()}
            </div>
        </div>
    )
}

export default Game