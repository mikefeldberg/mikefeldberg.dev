import React from 'react';
import Hero from '../Hero/Hero'
import Heading from '../Heading/Heading';
import Statement from '../Statement/Statement';
import Project from '../Project/Project';
import Footer from '../Footer/Footer';
import styles from './HomePage.module.css';
import HomePageData from './HomePageData';

const HomePage = props => (
    <div>
        <Hero
            imageUrl={HomePageData.hero.imageUrl}
            title={HomePageData.hero.title}
            subtitle={HomePageData.hero.subtitle}
        />
        <Heading title='About Me' />
        <div className={styles.setContainer}>
            {HomePageData.statements.map((statement, idx) =>
                <Statement
                    paragraph1={statement.paragraph1}
                    paragraph2={statement.paragraph2}
                    key={idx}
                />
            )}
        </div>
        <Heading title='Projects' />
        <div className={styles.setContainer}>
            {HomePageData.projects.map((project, idx) =>
                <Project
                    name={project.name}
                    slug={project.slug}
                    tech={project.tech}
                    imageUrl={project.imageUrl}
                    githubUrl={project.githubUrl}
                    deployedUrl={project.deployedUrl}
                    key={idx}
                />
            )}
        </div>
        <Footer contact={HomePageData.contact} />
    </div>
);

export default HomePage;
