import React from 'react';
import styles from './Statement.module.css';

const Statement = (props) => (
    <div className={styles.statement}>
        <div className={[styles.content, "mb40"].join(' ')}>{props.paragraph1}</div>
        <div className={styles.content}>{props.paragraph2}</div>
    </div>
);

export default Statement;
