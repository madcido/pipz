import React, { useReducer, useEffect } from 'react';
import Panel from './Panel';
import Board from './Board';
import Button from './Button';
import { createNewBoard, isVictory } from '../logic';
import { Dispatch, State, reducer } from '../reducer';

function App() {
    const [state, dispatch] = useReducer(reducer, { board: createNewBoard(10), showLeak: false });

    useEffect(() => {
        if (isVictory(state.board)) {
            alert('Gratz, you are a plumber! :D');
        }
    }, [state.board]);

    return (
        <Dispatch.Provider value={dispatch}>
            <State.Provider value={state}>
                <Panel />
                {state.showLeak ?
                    <Button
                        text={'Hide Leak'}
                        action={() => dispatch({ type: 'HIDE_LEAK' })}
                    /> :
                    <Button
                        text={'Show Leak'}
                        action={() => dispatch({ type: 'SHOW_LEAK' })}
                    />
                }
                <Board />
            </State.Provider>
        </Dispatch.Provider>
    );
}

export default App;
