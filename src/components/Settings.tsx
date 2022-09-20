import {FormEvent, useState} from "react";
import React from "react";
import {Item, linesSelector} from "../modules/game";
import {addItem, storeItemsSelector} from "../modules/settings";
import {useDispatch, useSelector} from "react-redux";

const Settings = () => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState<number>(0);
    const [multiplier, setMultiplier] = useState<number>(0);
    const dispatch = useDispatch();

    const items = useSelector(storeItemsSelector)

    const handleSummit = (event: FormEvent) => {
        event.preventDefault();

        const item: Item = {
            name,
            cost,
            multiplier
        }

        dispatch(addItem({item}))
    }

    const handleNameChange = (event: FormEvent<HTMLInputElement>) => {
        setName(event.currentTarget.value);
    }

    const handleCostChange = (event: FormEvent<HTMLInputElement>) => {
        setCost(parseInt(event.currentTarget.value));
    }

    const handleMultiplierChange = (event: FormEvent<HTMLInputElement>) => {
        setMultiplier(parseFloat(event.currentTarget.value));
    }

    return (
        <>
            <h1>Settings</h1>
            <form onSubmit={handleSummit}>
                <input
                    defaultValue={name}
                    placeholder={'Name'}
                    type="text"
                    name="itemName"
                    onChange={handleNameChange} />
                <input
                    defaultValue={cost}
                    placeholder={'Cost'}
                    type="number"
                    name="cost"
                    onChange={handleCostChange} />
                <input
                    defaultValue={multiplier}
                    placeholder={'Multiplier'}
                    type="number"
                    name="multiplier"
                    onChange={handleMultiplierChange} />
                <button type="submit">Submit</button>
            </form>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Settings