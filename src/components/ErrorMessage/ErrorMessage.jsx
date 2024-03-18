import React from 'react';
import styles from '../ErrorMessage/ErrorMessage.module.scss'

function ErrorMessage(props) {
    return (
        <>
            <p className={styles.text}>This could be due to syntax errors or importing non-existent modules bububu. </p>
        </>
    );
}

export default ErrorMessage;