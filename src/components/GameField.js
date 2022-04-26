import React, { useState } from 'react'
import Row from './Row'

const GameField = () => {
    const [mousedown, setMousedown] = useState(false)

    const handleMouseDown = () => {
        setMousedown(true)
        // setActive(true)
        console.log('1')
    }

    const handleMouseUp = () => {
        setMousedown(false)
        console.log('2')
    }

    return (
        <div className="gamefield">
            {Array(8)
                .fill(0)
                .map((item, index) => (
                    <Row
                        key={index}
                        handleMouseDown={handleMouseDown}
                        handleMouseUp={handleMouseUp}
                        mousedown={mousedown}
                    />
                ))}
        </div>
    )
}

export default GameField
