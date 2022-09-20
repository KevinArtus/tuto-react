import React from 'react';
import {Item} from '../modules/game'

type Props = {
    ownedItems: Item[]
}

const Inventory = (props: Props) => {
    return (
        <>
            <ul>
                {props.ownedItems.map((item, index) => (
                    <li key={index}>
                        {item.name} x {item.multiplier}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Inventory