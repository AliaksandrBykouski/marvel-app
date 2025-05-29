import React from 'react';
import img from './error.gif';

const ErrorMessage = () => {
    const styles = {
        display: 'block',
        width: '200px',
        height: '200px',
        margin: 'auto auto',
        objectFit: 'contain',
    };

    return (
        <div>
            <img style={styles} src={img} alt="Error occurred" />
            <p style={{textAlign: 'center', color: 'red', fontSize: '30px'}}>
               ERROR
            </p>
        </div>
    )
};

export default ErrorMessage;

