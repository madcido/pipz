import React, { useRef } from 'react';
import './index.css';

export default function NumberInput(props) {
    const input = useRef();

    const handleMinus = () => {
        input.current.stepDown();
        props.handleChange(input.current.value);
    }

    const handlePlus = () => {
        input.current.stepUp();
        props.handleChange(input.current.value);
    }

    return (
        <div class='custom-number'>
            <input
                ref={input}
                type='number'
                min={props.min}
                max={props.max}
                value={props.value}
                onChange={e => props.handleChange(e.target.value)}
            />
            <div class='number-symbol minus' onClick={handleMinus}>-</div>
            <div class='number-symbol plus' onClick={handlePlus}>+</div>
        </div>
    );
}
