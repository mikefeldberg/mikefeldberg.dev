import React from 'react';
import styles from './Footer.module.css';

const Footer = props => (
    <footer className={styles.footer}>
        <div className={styles.footerLeft}>
            <h3>
                M<span>F</span>
            </h3>

            <p className={styles.footerCompanyName}>Mike Feldberg © 2019</p>
        </div>

        <div className={styles.footerCenter}>

        </div>

        <div className={styles.footerRight}>
            <a href={props.contact.githubUrl}>
                <div>
                    <i className="fab fa-github fa-lg mb15 github" />
                </div>
            </a>
            <a href={props.contact.linkedinUrl}>
                <i className="fab fa-linkedin fa-lg mb15 linkedin" />
            </a>
            <div>
                <a href={['mailto:', props.contact.email].join(' ')}>
                <i className="fa fa-envelope fa-lg mr10 mb15 email" />
                {props.contact.email}
                </a>
                <div>
                    <i className="fas fa-phone fa-lg mr10 phone" />
                    {props.contact.phone}
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
