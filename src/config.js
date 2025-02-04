// config.js
module.exports = {
    github: {
        username: 'sujana-kamasany', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 4, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: ['java'] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'sujana--k',
        twitter: 'sujana_kamasany',
        facebook: '',
        dribbble: '',
        behance: '',
        medium: '@sujana-kamasany',
        devto: 'sujanakamasany',
        website: 'https://sujana-kamasany.github.io',
        phone: '',
        email: 'sujanakamasany@gmail.com'
    },
    skills: [
        'Python',
        'HTML',
        'CSS',
        'JavaScript ',
        'C Programming',
        'MySQL',
        'Git',
    ],
    experiences: [
        { 
            company: 'THE SPARKS FOUNDATION ',
            position: 'Web Developement Intern ',
            from: 'September 2021',
            to: 'October 2021'
        },
        { 
            company: 'Girl Script winter of code',
            position: 'Contributor ',
            from: 'August 2021',
            to: 'December 2021'
        },
         { 
            company: 'Script winter of code',
            position: 'Mentor ',
            from: 'December 2021',
            to: 'January 2022'
        },
         { 
            company: 'G Studio ',
            position: 'Vice President ',
            from: 'November 2020',
            to: 'November 2021'
        },
         { 
            company: 'Microsoft ',
            position: 'Azure Developer League ',
            from: 'May 2021',
            to: 'June 2021'
        },
         { 
            company: 'GUSAC',
            position: 'Graphic Lead ',
            from: 'September 2020',
            to: 'September 2021'
        },
         { 
            company: 'GirlUp UNO',
            position: 'Content Writer ',
            from: 'September 2021',
            to: 'January 2022'
        },
         { 
            company: 'EduHub Community ',
            position: 'Campus Lead',
            from: 'August 2021',
            to: 'January 2022'
        },
         { 
            company: 'MichiSpolight',
            position: 'Team Friends of Figma',
            from: 'October 2021',
            to: 'Present'
        }
      
    ],
    education: [
        { 
            institution: 'Gandhi Institute of Technology and Management ',
            degree: 'Bachelor of Technology in computer science ',
            from: '2019',
            to: '2023'
        }
        
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'sujanakamasany',
        limit: 1 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: '' // Please remove this and use your own tag id or keep it empty
    },
    hotjar: {
        id: '', //  Please remove this and use your own id or keep it empty
        snippetVersion : 6
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}
