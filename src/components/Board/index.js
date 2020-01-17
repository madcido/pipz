import React, { useContext } from 'react';
import './index.css';
import Cell from '../Cell';
import { State } from '../../reducer';

export default function Board(props) {
    const state = useContext(State);

    return (
        <div className='board'>
            {state.board.map((row, i) => (
                <div className='row' key={i}>
                    {row.map((cell, j) => (
                        <Cell key={j} {...cell} />
                    ))}
                </div>
            ))}
        </div>
    );
}
