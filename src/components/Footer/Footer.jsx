import React from 'react';
import styles from './Footer.module.css';

const Footer = props => (
    <footer className={styles.footer}>
        <div className={styles.footerLeft}>
            <h3>
                M<span>F</span>
            </h3>

            <p className={styles.footerCompanyName}>Mike Feldberg © 2020</p>
        </div>

        <div className={styles.footerCenter}></div>

        <div className={styles.footerRight}>
            <a href={props.contact.githubUrl} className="github" target="_blank" rel="noopener noreferrer">
                <span>
                    <i className="fab fa-github fa-lg mb15 mr10" />
                    github
                </span>
            </a>
            <a href={props.contact.linkedinUrl} className="linkedin" target="_blank" rel="noopener noreferrer">
                <span>
                    <i className="fab fa-linkedin fa-lg mb15 mr10" />
                    linkedin
                </span>
            </a>
            <a
                href="https://drive.google.com/file/d/1OSkzYz5Dl4o8E57jtYwHeaAmNEPETXno/view?usp=sharing"
                className="resume"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span>
                    <i className="fas fa-file-word fa-lg mb15 mr10" aria-hidden="true" />
                    resume
                </span>
            </a>
            <a href={['mailto:', props.contact.email].join('')} className="email">
                <span>
                    <i className="fa fa-envelope fa-lg mr10 mb15" />
                    {props.contact.email}
                </span>
            </a>
            <a href={['tel:', props.contact.phone].join('')} className="phone">
                <span>
                    <i className="fas fa-phone-square-alt fa-lg mr10" />
                    {props.contact.phone}
                </span>
            </a>
        </div>
    </footer>
);

export default Footer;
