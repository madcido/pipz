import React from 'react';
import { updateLeakage, rotateCell } from './logic';

const Dispatch = React.createContext();
const State = React.createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'NEW_BOARD':
            return { ...state, board: action.board };
        case 'ROTATE_CELL':
            const board = state.board;
            const i = action.cell.i;
            const j = action.cell.j;
            board[i][j].sprite = rotateCell(board[i][j].sprite);
            return { ...state, board: updateLeakage(board) };
        case 'SHOW_LEAK':
            return { ...state, showLeak: true };
        case 'HIDE_LEAK':
            return { ...state, showLeak: false };
        default:
            return state;
    }
}

export { Dispatch, State, reducer };
