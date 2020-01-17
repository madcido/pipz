import React from 'react';
import './index.css';
import leak from '../../images/leak.png';

export default function Leak(props) {
    const styles = {
        display: (props.display === 1) ? 'block' : 'none',
        top: (props.position === 0) ? '0' : (props.position === 2) ? '100%' : '50%',
        left: (props.position === 3) ? '0' : (props.position === 1) ? '100%' : '50%',
    }

    return (
        <img className='leak' style={styles} src={leak} />
    );
}
