import React, { useContext } from 'react';
import './index.css';
import Leak from '../Leak';
import { Dispatch, State } from '../../reducer';

export default function Cell(props) {
    const dispatch = useContext(Dispatch);
    const state = useContext(State);

    function handleClick() {
        dispatch({
            type: 'ROTATE_CELL',
            cell: { i: props.i, j: props.j },
        });
    }

    return (
        <button
            className={`cell s-${props.sprite.join('')}`}
            onClick={handleClick}
        >
        {state.showLeak &&
            <>
                <Leak display={props.leakage[0]} position={0} />
                <Leak display={props.leakage[1]} position={1} />
                <Leak display={props.leakage[2]} position={2} />
                <Leak display={props.leakage[3]} position={3} />
            </>
        }
        </button>
    );
}
