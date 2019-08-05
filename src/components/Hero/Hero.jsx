import React from 'react';
import styles from './Hero.module.css';

const Hero = props => (
    <div>
        <div className={styles.heroContainer}>
        <img className={[styles.heroImage, "round"].join(' ')} src={props.imageUrl} alt="mike headshot" />
            <div className={styles.content}>
                <div className={['heroTitle', 'highlight', styles.overlay, styles.heroTitle].join(' ')}>
                    <h1 className={styles.overlay}>
                        {props.title}
                    </h1>
                </div>
                <div className={styles.underlay}>
                    <div className={['heroTitle', styles.heroTitle, styles.shadowLeft].join(' ')}>
                        <h1>{props.title}</h1>
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div className={styles.content}>
                <div className={['heroTitle', 'highlight', styles.overlay, styles.heroTitle].join(' ')}>
                    <h2 className={styles.overlay}>
                        {props.subtitle}
                    </h2>
                </div>
                <div className={styles.underlay}>
                    <div className={['heroTitle', styles.heroTitle, styles.shadowLeft].join(' ')}>
                        <h2>{props.subtitle}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Hero;
