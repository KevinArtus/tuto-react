import {createSelector, createSlice} from '@reduxjs/toolkit';
import { RootState } from '.';

export type Item = {
    name: string;
    cost: number;
    multiplier: number;
}

export type State = {
    lines: number;
    ownedItems : Item[];
    linesPerSecond: number
}

export type GenerateLinesAction = {
    payload: {
        lines: number;
    }
}

export type BuyAction = {
    payload: {
        item: Item;
    }
}

const initialState: State = {
    lines: 0,
    ownedItems: [],
    linesPerSecond: 0
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        increment: (state) => ({
            ...state,
            lines: state.lines + 1
        }),
        generateLines: (state, {payload}: GenerateLinesAction) => ({
            ...state,
            lines: state.lines + payload.lines
        }),
        buyItem: (state, {payload}: BuyAction) => ({
            ...state,
            lines: state.lines - payload.item.cost,
            linesPerSecond: state.linesPerSecond + payload.item.multiplier,
            ownedItems: [...state.ownedItems, payload.item]
        })
    }
})

export type SelectableStates = Pick<RootState, 'game'>

export const linesSelector = (state: RootState) => state.game.lines
export const ownedItemsSelector = (state: RootState) => state.game.ownedItems
export const totalMultiplierSelector = (state: RootState) => {
    state.game.ownedItems.reduce((prev: number, item: Item) => prev + item.multiplier, 0)
}

export const {
    increment,
    generateLines,
    buyItem
} = gameSlice.actions

export default gameSlice.reducer