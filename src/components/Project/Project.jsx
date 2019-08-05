import React from 'react';
import styles from './Project.module.css';

const Project = props => (
    <div className={styles.project}>
        <div className={styles.content}>
            <img
                className={[styles.projectThumb, 'round'].join(' ')}
                src={props.imageUrl}
                alt={props.name}
            />

            <div className={[styles.overlay, styles.projectThumb, 'round'].join(' ')}>
                <h3 className="title p15vw">{props.name}</h3>
                <div className="p10">{props.slug}</div>
                <div className="p10">
                    <strong>Tech Used:</strong>
                    <div>
                        {props.tech.join(' | ')}
                    </div>
                </div>
                <div>
                    <a className="mr30" href={props.githubUrl} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github fa-3x" />
                    </a>
                    <a href={props.deployedUrl} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-rocket fa-3x" />
                    </a>
                </div>
            </div>
            <hr />
        </div>
    </div>
);

export default Project;