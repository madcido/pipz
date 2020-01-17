import React, { useState, useContext } from 'react';
import './index.css';
import NumberInput from '../NumberInput';
import Button from '../Button';
import { Dispatch } from '../../reducer';
import { createNewBoard } from '../../logic';

export default function Panel(props) {
    const dispatch = useContext(Dispatch);
    const [boardSize, setBoardSize] = useState('10');

    function newBoard() {
        dispatch({
            type: 'NEW_BOARD',
            board: createNewBoard(parseInt(boardSize)),
        })
    }

    return (
        <div className='panel row'>
            <NumberInput
                min='3'
                max='30'
                value={boardSize}
                handleChange={setBoardSize}
            />
            <Button
                text={'New Board'}
                action={newBoard}
            />
        </div>
    );
}
