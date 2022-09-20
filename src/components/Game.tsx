import { useEffect, useMemo, useState } from 'react';
import { useParams } from "react-router-dom";
import React from 'react';

import './Game.css'
import Gitcoin from './Gitcoin';
import Score from './Score';
import Store from './Store';
import Inventory from './Inventory';
import { useSelector, useDispatch } from 'react-redux';
import {
    buyItem,
    generateLines,
    Item,
    linesSelector,
    ownedItemsSelector
} from '../modules/game';
import { RootState } from '../modules';

const Game = () => {
    const dispatch = useDispatch()

    const lines = useSelector(linesSelector)
    const ownedItems = useSelector(ownedItemsSelector)
    const linesPerSecond = useSelector((state:RootState) => state.game.linesPerSecond)

    const handleGenerateLines = (lineNumber = 1) => {
        dispatch(generateLines({lines: lineNumber}))
    }

    const handleBuy = (item: Item) => {
        try {
            dispatch(buyItem({item}))
        } catch (error) {
            console.log('C PT!')
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
        }, 100)

        return () => clearInterval(interval)
      }, [lines, ownedItems, linesPerSecond])

    return (
        <>
            <Gitcoin onClick={handleGenerateLines}/>
            <Score lines={lines} linesPerSecond={linesPerSecond}/>
            <Store lines={lines} onClick={handleBuy}/>
            <Inventory ownedItems={ownedItems}/>
        </>
    )
}

export default Game