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
            <a href={props.contact.githubUrl} target="_blank" rel="noopener noreferrer">
                <div>
                    <i className="fab fa-github fa-lg mb15 github" />
                </div>
            </a>
            <a href={props.contact.linkedinUrl} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-lg mb15 linkedin" />
            </a>
            <div>
                <a href={['mailto:', props.contact.email].join('')}>
                    <i className="fa fa-envelope fa-lg mr10 mb15 email" />
                </a>
                <a href={['mailto:', props.contact.email].join('')}>
                    {props.contact.email}
                </a>
                <div>
                    <a href={["tel:", props.contact.phone].join('')}><i className="fas fa-phone fa-lg mr10 phone" /></a>
                    <a href={["tel:", props.contact.phone].join('')}>{props.contact.phone}</a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
