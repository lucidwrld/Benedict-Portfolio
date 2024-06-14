import {
    css,
    firebase,
    git,
    github,
    html,
    javascript,
    angular,
    ccc,
    mysql,
    php,
    python,
    react,
    sass,
    tailwindcss,
    typescript,
    oakchain,
    nsialogo,
    gdsclogo,
    gt,
    sideH,
    radi,
    coW,
    app,
    phonep,
    githubp,
    linkedinp, next, skillseed, webflow
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    }
    ,
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend ",
    },
    {
        imageUrl: webflow,
        name: "Webflow",
        type: "Frontend ",
    },{
        imageUrl: next,
        name: "Next",
        type: "Frontend ",
    },
    {
        imageUrl: ccc,
        name: "C++",
        type: "Backend ",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Backend",
    },
    {
        imageUrl: php,
        name: "PHP",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    }
];

export const experiences = [
    
    {
        title: "Frontend Developer",
        company_name: "Skillseed Limited",
        icon: skillseed,
        iconBg: "#ffffff",
        date: "Feb 2024 - Present",
        points: [
            "Effectively completed all client's projects under company's name to suit the personal desires of the clients while adding a touch of artistic creativity.",
            "Organized and prioritized work to complete projects in a timely, eﬃcient manner.",
            "Maintained an eagerness to add to my knowledge and skills and operated with a willingness to embrace chance and adapt strategies accordingly.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Oakchain",
        icon: oakchain,
        iconBg: "#ffffff",
        date: "July 2023 - Present",
        points: [
            "Developed the company's landing page, maintaining the ﬁgma design provided while maintaining it's web responsiveness.",
            "Tested, debugged and optimized lines of code of the company's website.",
            "Utilized react in order to develop a 100% web responsive site for the company.",
            "Added lazy image loading feature to better improve site accessibility speed and user interface.",
            "Worked with team to get and evaluate user feedback and make adjustments on needed improvements on the site.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "NSIA Insurance",
        icon: nsialogo,
        iconBg: "#ffffff",
        date: "Jan 2023 - June 2023",
        points: [
            "Eﬀectively established a 100% database structure based on ﬁrebase database and implemented it on the company’s website which runs on Angular framework, the structure provides speciﬁc staﬀ members ability to access and modify data being displayed on the company’s website.",
            "Ensured all updates made to the website were pushed to the company’s GitHub repository.",
            "Worked with team to get feedback and make adjustments on needed imporvements on the site.",
            "Utilized angular in order to develop clean and scalable web pages required by the company on the website.",
            "Tested, troubleshooted,  debugged and optimized 100% lines of code of the company's website.",
            "Added lazy image loading feature to better improve site accessibility speed and user interface."
        ],
    },
    {
        title: "Web Developer",
        company_name: "GurutechHQ",
        icon: gt,
        iconBg: "#ffffff",
        date: "May 2023 - Oct 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Developer Intern",
        company_name: "SideHustle",
        icon: sideH,
        iconBg: "#ffffff",
        date: "March 2023 - April 2023",
        points: [
            "Developed well detailed websites to improve user’s experience and quality.",
            "Eﬀectively implemented 100% web responsiveness in each website assigned to me and ensured it was suited for user needs.",
            "Completely implemented all weekly tasks eﬃciently before their deadline.",
            "Operated with a willingness to embrace chance and adapt strategies accordingly.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "GDSC",
        icon: gdsclogo,
        iconBg: "#ffffff",
        date: "September 2022 - Present",
        points: [
            "Organized and prioritized work to complete assignments in a timely, eﬃcient manner.",
            "Mentored new junior front-end developers on team in expanding react and angular.",
            "Collaborated with the team to develop the landing page of the GDSC website.",
            "Assisted in the building of 100% reusable code.",
            "Tested, debugged and optimized the GDSC website.",
        ],
    },
    {
        title: "Artificial Intelligence Engineer Intern",
        company_name: "RADICALX",
        icon: radi,
        iconBg: "#ffffff",
        date: "October 2023 - Present",
        points: [
            "Collaborated with team members to implement and ﬁne-tune neural networks using TensorFlow and Keras, gaining practical experience in deep learning architectures.",
            "Completely implemented all weekly tasks eﬃciently before their deadline.",
            "Operated with a willingness to embrace chance and adapt strategies accordingly.",
        ],
    },
    {
        title: "Ambassador",
        company_name: "CowryWise",
        icon: coW,
        iconBg: "#ffffff",
        date: "May 2023 - Present",
        points: [
            "Acted as a brand representative, promoting Cowrywise ﬁnancial products and services through social media, campus events, and targeted outreach. ",
            "Participated in team building.",
            "Contributed ideas for content creation, enhancing engagement.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: phonep,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: githubp,
        link: 'https://github.com/lucidwrld',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedinp,
        link: 'https://www.linkedin.com/in/benedicttobi',
    }
];

export const projects = [
    {
        iconUrl: app,
        theme: 'btn-back-yellow',
        name: 'Oakchain',
        description: 'A web3 platform',
        link: 'https://www.oakchain.io/',
    },
    {
        iconUrl: app,
        theme: 'btn-back-yellow',
        name: 'Anon',
        description: 'Ecommerce website that based on the principle of the famous Jumia website',
        link: 'https://lucidwrld.github.io/sengProject/',
    },
    {
        iconUrl: app,
        theme: 'btn-back-red',
        name: 'LendSQR Project',
        description: 'Developed a web application based on react which reads mock api and displays it on the site, making it accessible to be modify based on staff needs',
        link: 'https://lendsqr-project-xi.vercel.app/',
    },
    {
        iconUrl: app,
        theme: 'btn-back-green',
        name: 'Molinge',
        description: 'Created a landing page for a construction company, utilizing the design provided by the ui/ux designers ',
        link: 'https://molinge1.netlify.app/',
    },
    {
        iconUrl: app,
        theme: 'btn-back-blue',
        name: 'Weather Forecast',
        description: 'The goal of this project was to build a weather forecast website that provides real-time weatherinformation for cities around the world. The website has a clean and modern design and is easy to use for users to access weather information quickly and accurately.', 
        link: 'https://weather-webapp-ap.netlify.app/',
    },
    {
        iconUrl: app,
        theme: 'btn-back-pink',
        name: 'Chow',
        description: 'The goal of this project was to create a food delivery website for my school that allows both students and staffs to order food and other items from stores. The website has a simple and intuitive interface, allowing customers to browse menus and place orders.',
        link: 'https://lucidwrld.github.io/Chow/',
    },
    {
        iconUrl: app,
        theme: 'btn-back-black',
        name: 'LM Virtual',
        description: 'LM Virtual is product landing page that revolves around a virtual reality product. Aimed at selling its new product and increasing public awareness while acheiving easy acquiring methods.',
        link: 'https://landingpageside.netlify.app',
    },
    
];