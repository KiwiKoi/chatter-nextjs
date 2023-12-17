import React from 'react';
import styles from './card.module.scss'

export default function Card(props: { title: string, body: string }) {
    return (
        <div className={styles.main}>
            <h3 className={styles.cardTitle}>{props.title}</h3>
            <div>{props.body}</div>
        </div>
    );
}