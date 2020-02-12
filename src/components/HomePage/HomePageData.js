const HomePageData = {
    hero: {
        imageUrl: 'https://i.imgur.com/AlzagUe.jpg',
        title: `Hi, I’m Mike`,
        subtitle: `Attorney turned dev`,
    },
    statements: [{
        paragraph1: `I used to be an attorney in New York. I liked it. But I didn’t like it enough to do it for another 30 years. Now I’m a dev in LA. And I love it. It’s a lot of the same multi-tasking and problem-solving skills but in a substantially more fun and engaging medium.`,
        paragraph2: `I spend most of my free time cooking, building stuff, hanging out with my wife, and coding!`,
    }],
    projects: [{
        name: 'Feldberguesa’s Cookbook',
        slug: 'Browse, review, and share your favorite recipes!',
        tech: ['Node', 'Express', 'MongoDB', 'Google OAuth'],
        imageUrl: 'https://imgur.com/Ea4CBUO.png',
        githubUrl: 'https://github.com/mikefeldberg/feldberguesa-cookbook',
        deployedUrl: 'https://feldberguesa-cookbook.herokuapp.com'
    }, {
        name: 'Getting There',
        slug: 'An app for NYC commuters to check the status of their trains and crowdsource delay and other service update information.',
        tech: ['Python', 'Django', 'APIs', 'Pandas', 'PosgreSQL', 'Materialize'],
        imageUrl: 'https://i.imgur.com/GqFP3n5.png',
        githubUrl: 'https://github.com/mikefeldberg/getting-there',
        deployedUrl: 'https://getting-there.herokuapp.com'
    }, {
        name: 'Park Safe',
        slug: `Onboarding and applicant management app for local nonprofit providing safe parking options for people experiencing homelessness in their vehicles.`,
        tech: ['Node', 'Express', 'React', 'MongoDB', 'Bootstrap', 'CSVLink', 'Token Auth'],
        imageUrl: 'https://imgur.com/HyORYQK.png',
        githubUrl: 'https://github.com/mikefeldberg/park-safe',
        deployedUrl: 'https://park-safe.herokuapp.com'
    }, {
        name: 'Plant Plans',
        slug: 'An app for people who own plants and need help keeping them alive.',
        tech: ['Node', 'Express', 'React', 'MongoDB', 'Bootstrap', 'Token Auth'],
        imageUrl: 'https://imgur.com/PqJ7AeH.png',
        githubUrl: 'https://github.com/mikefeldberg/plant-plans',
        deployedUrl: 'https://plant-plans.herokuapp.com'
    }, {
        name: 'Mastermind',
        slug: 'Classic codebreaker-style strategy game.',
        tech: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        imageUrl: 'https://i.imgur.com/esFCM08.png',
        githubUrl: 'https://github.com/mikefeldberg/mastermind',
        deployedUrl: 'https://mikefeldberg.github.io/mastermind/'
    }],
    contact: {
        githubUrl: 'https://www.github.com/mikefeldberg',
        linkedinUrl: 'https://www.linkedin.com/in/mikefeldberg',
        email: 'mikefeldberg@gmail.com',
        phone: '‪424.273.5570‬',
        resume: '‪‬',
        location: 'Los Angeles'
    },
    contactColor: {
        github: 'black',
        linkedin: '#0077B5',
        email: '#b23121',
        phone: '#973999',
    }
}

export default HomePageData;