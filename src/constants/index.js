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
        name: "Next Js",
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
        title: "Lead Frontend Developer",
        company_name: "Skillseed Limited",
        icon: skillseed,
        iconBg: "#ffffff",
        date: "Nov 2024 - Present",
        points: [
            "Built a seamless testimonial creation & sharing platform – Users can generate testimonial links and embed them on their websites.",
            "Developed the embed feature – Allowed users to copy testimonials as iframe codes instead of raw HTML.",
            "Implemented infinite scrolling & dynamic UI – Ensured smooth navigation when displaying testimonials.",
            "Optimized for a seamless UX – Ensured fast page loads, a clean UI with Tailwind CSS, and responsive layouts.",
            "Integrated real-time calling functionality – Used ZEGOCLOUD for instant one-to-one and webinar-style calls.",
            "Developed an automated webinar feature – Users receive automatic call notifications at scheduled times.",
            "Built a user-friendly consultant dashboard – Consultants can manage appointments, webinars, and user interactions.",
            "Implemented secure authentication & token-based access – Ensured secure login and token-based session handling.",
            "Optimized performance & responsiveness – Ensured that all pages load quickly and function well on all devices.",
            "Successfully led frontend development for multiple high-impact projects.",
        ],
    },
    {
        title: "Frontend Developer",
        company_name: "Skillseed Limited",
        icon: skillseed,
        iconBg: "#ffffff",
        date: "Feb 2024 - Nov 2024",
        points: [
            "Handled SEO & analytics integration – Integrated Google Analytics & Firebase Analytics to track user engagement.",
            "Developed a modern, interactive UI – Built a visually appealing and functional property listing experience.",
            "Implemented a smooth property search & filtering system – Users can search properties based on categories, locations, and preferences.",
            "Created a scalable component architecture – Ensured modular and reusable components for efficiency.",
            "Improved performance & UI/UX across all applications using Next.js, Tailwind CSS, and optimized API calls.",
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
        date: "Jul 2023 - Aug 2024",
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
        date: "Jan 2023 - Jun 2023",
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
        date: "Mar 2023 - Apr 2023",
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
        date: "Sep 2022 - Aug 2024",
        points: [
            "Organized and prioritized work to complete assignments in a timely, eﬃcient manner.",
            "Mentored new junior front-end developers on team in expanding react and angular.",
            "Collaborated with the team to develop the landing page of the GDSC website.",
            "Assisted in the building of 100% reusable code.",
            "Tested, debugged and optimized the GDSC website.",
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
        name: 'Confidant',
        description: 'An online platform connecting users with expert consultants for personalized advice, mentorship, and webinars.',
        link: 'https://theconfidant.help/',
    },
    {
        iconUrl: app,
        theme: 'btn-back-yellow',
        name: 'Avowal',
        description: 'A platform that allows users to create, share, and collect testimonials to build trust and credibility.',
        link: 'https://avowal.io/',
    },
    {
        iconUrl: app,
        theme: 'btn-back-yellow',
        name: 'Tixrush',
        description: 'An event ticketing platform that simplifies ticket purchasing and management for concerts, sports, and live events.',
        link: 'https://www.tixrush.com/',
    },
    {
        iconUrl: app,
        theme: 'btn-back-yellow',
        name: 'Mecasa',
        description: 'A home services marketplace that connects users with trusted professionals for various household needs.',
        link: 'https://mecasa.io/',
    }, 
    {
        iconUrl: app,
        theme: 'btn-back-yellow',
        name: 'Oakchain',
        description: 'A blockchain-based platform providing secure and transparent digital identity and verification solutions.',
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