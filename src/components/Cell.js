import React, { useState } from 'react'

const Cell = (props) => {
    const [active, setActive] = useState(false)
    // const [mousedown, setMousedown] = useState(false)

    // const handleMouseDown = () => {
    //     setMousedown(true)
    //     setActive(true)
    // }

    // const handleMouseUp = () => {
    //     setMousedown(false)
    // }

    const handleMouseMove = () => {
        if (props.mousedown) {
            setActive(true)
        }
    }
    // props.handleMouseDown
    return (
        <div
            className={`cell ${active ? ' active' : ''}`}
            onMouseDown={props.handleMouseDown}
            onMouseUp={props.handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <div className="cell-inner">{props.text}</div>
            <div className="cell-color"></div>
        </div>
    )
}

export default Cell
