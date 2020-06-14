import React from 'react'

const style = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '1.8 rem',
    fontWeight: '800',
    course: 'pointer',
    outline: 'none'
}
const Square = ({value, onClick}) => (
    <button style={style} onClick={onClick}>
        {value}
    </button>
)

export default Square