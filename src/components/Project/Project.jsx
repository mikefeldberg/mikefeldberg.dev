import React, { Component } from 'react';
import styles from './Project.module.css';

class Project extends Component {
    state = {
        isOverlayVisible: true,
    };

    toggleOverlay = () => {
        console.log('toggling overlay');
        this.setState(prevState => ({ isOverlayVisible: !prevState.isOverlayVisible }));
    };

    render() {
        const { isOverlayVisible } = this.state;

        return (
            <div className={styles.project}>
                <div className={styles.content}>
                    <img
                        className={[styles.projectThumb, 'round'].join(' ')}
                        src={this.props.imageUrl}
                        alt={this.props.name}
                    />

                    <div onClick={this.toggleOverlay} className={[styles.overlay, styles.projectThumb, `${isOverlayVisible ? "" : styles.mobileHover}`, 'round'].join(' ')}>
                        <h3 className="title p15vw">{this.props.name}</h3>
                        <div className="p10">{this.props.slug}</div>
                        <div className="p10">
                            <strong>Tech Used:</strong>
                            <div>{this.props.tech.join(' | ')}</div>
                        </div>
                        <div>
                            <a className="mr30" href={this.props.githubUrl} target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github fa-3x" />
                            </a>
                            <a href={this.props.deployedUrl} target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-rocket fa-3x" />
                            </a>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        );
    }
}

export default Project;
