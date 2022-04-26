class Row extends Component {
    render() {
        let items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        let listItem = []
        for (var i = 0; i < 10; i++) {
            listItem.push(<Cell text="1" key={i}></Cell>)
        }

        // const listItem = items.map(function(item){
        //     <Cell key={item.toString()} text='1'></Cell>
        // })

        return <div className="row">{listItem}</div>
    }
}

import React from 'react'
import Cell from './Cell'

const Row = () => {
    return (
        <div className="row">
            {Array(10)
                .fill(0)
                .map((item, index) => (
                    <Cell
                        key={index}
                        handleMouseDown={handleMouseDown}
                        handleMouseUp={handleMouseUp}
                        mousedown={mousedown}
                    />
                ))}
        </div>
    )
}

export default Row
