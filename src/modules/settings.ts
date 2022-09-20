import { Item } from './game';
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "./index";

export type State = {
    storeItems: Item[]
}

const initialState: State = {
    storeItems: []
}
export type AddItemAction = {
    payload: {
        item: Item;
    }
}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        addItem: (state, {payload}: AddItemAction) => ({
            ...state,
            storeItems: [...state.storeItems, payload.item]
        })
    }
})

export const {
    addItem
} = settingsSlice.actions

export const storeItemsSelector = (state: RootState) => state.settings.storeItems

export default settingsSlice.reducer