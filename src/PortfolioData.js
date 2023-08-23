import emoji from "react-easy-emoji";


// Name that will appear on the splash Screen
const splashScreenName = {
    name : "Pavan"
}

//Logo name in the navigation bar
const navBarIcon = {
    name : "Pavan"
}

const introduction = {
    firstName : "Pavan" ,
    
    lastName : "Jangale" ,
    
    introductionText : "A passionate Software Developer. I have built projects that showcase my skills. I have build applications with JavaScript, ReactJS, NodeJS, SpringBoot and some other cool libraries and frameworks. I can design efficient algorithms which can help in improving the performance of the application." ,

    resumeLink : "https://drive.google.com/file/d/1NpaILgvQh2SnBdm95JF0fRva8zhYbU6V/view?usp=drivesdk",

    resumeButtonText : "SEE MY RESUME",

    contactButtonText : "CONTACT ME"
}

const profilesToShow = [
    {
        name : "github",
        link : "https://github.com/Pavanjangle",
        fontAwesomeIcon : "fa fa-github",
    },

    {
        name : "leetcode",
        link : "https://leetcode.com/pavan Jangale/",
        fontAwesomeIcon : "fas fa-code",
    },

    {
        name : "linkedin",
        link : "https://www.linkedin.com/in/pavan-jangale/",
        fontAwesomeIcon : "fab fa-linkedin-in"
    },
    
    {
        name : "mail",
        link : "mailto:pavan.jangale91@gmail.com",
        fontAwesomeIcon : "fas fa-envelope"
    }
]

const skillsToShow = {
    
    skillTitle : "What I do",

    skillSubtitle : "FULL STACK DEVELOPER WHO WANT TO EXPLORE AND BECOME BEST IN EVERY TECH STACK",

    skillList : [
        emoji("⚡ Develop highly interactive FrontEnd / User Interface for you web and mobile applications."),
        emoji("⚡ Design time and space efficient algorithms to improve the application performance for best user Experience."),
        emoji("⚡ Integeration of third party services such as Firebase")
    ],

    softwareSkillsIcons : [
        {
            name : "HTML-5",
            fontAwesomeIcon : "fab fa-html5"
        },

        {
            name : "CSS3",
            fontAwesomeIcon : "fab fa-css3-alt"
        },

        {
            name : "sass",
            fontAwesomeIcon : "fab fa-sass"
        },

        // {
        //     name : "JavaScript",
        //     fontAwesomeIcon : "fab fa-javascript"
        // },

        {
            name : "DSA",
            fontAwesomeIcon : "fas fa-code"
        },

        {
            name : "JavaScript",
            fontAwesomeIcon : "fab fa-js"
        },

        {
            name : "ReactJS",
            fontAwesomeIcon : "fab fa-react"
        },

        {
            name : "NodeJS",
            fontAwesomeIcon : "fab fa-node"
        },

        {
            name : "SpringBoot",
            fontAwesomeIcon : "fab fa-java"
        },

        {
            name : "Database",
            fontAwesomeIcon : "fas fa-database"
        },

        {
            name : "AWS (Basic)",
            fontAwesomeIcon : "fab fa-aws"
        },

        {
            name : "Unit Testing",
            fontAwesomeIcon : "fas fa-bug"
        }
    ]
}


/* 
    Enter the Tech Stack in which you are proficient in 
    and also enter how much percent you're proficient in it
*/
const proficiencyData = {
    heading : "Proficiency" ,
    skillsData : [
        {
            name : "Frontend",
            percent : "80%"
        },

        {
            name : "Backend",
            percent : "55%"
        },

        {
            name : "JavaScript and ReactJs",
            percent : "80%"
        },

        {
            name : "Programming and DSA",
            percent : "65%"
        }
    ]
}


/*
    Enter your github username. For example if your profile link is 
        • https://github.com/rhythm-design, then enter only "rhythm-design" as username
    
    Enter the repositories you want to show in the portfolio. For example if repo link is 
        • https://github.com/rhythm-design/NavigateTheBot, then enter only "NavigateTheBot" in repoNames array.
    Keep in mind that each repository name should be in `""` inverted commas and need to be seperated by `,`

    Enter github repositories tab link as "githubRepositoriesLink"

    You can also change button text by changing "projectsButtonText" 
*/
const projectsGithubRepos = {
    heading : "What I have made",
    username : "Pavanjangle",
    repoNames : [
        "Crypto_Web_App_Project",
        "Live_Streaming_Recording_App",
        "rhythm-portfolio",
        "Google_OAuth_Project",
        "Quiz-App-Project",
        "Shopping_lane_Project"
    ],
    githubRepositoriesLink : "https://github.com/Pavanjangle?tab=repositories",
    projectsButtonText : "More Projects"
}


/*
    Customize your achievement and certificate area heading through this object.

    You can add your achievement or Certificate details in the "achievementsOrCertificateDetails" array.
    Play with care with variables in this array else things might not look as you want
*/
const achievementsAndCertifications = {
    heading: emoji("Achievements and Certifications🏆"),
    subHeading : "ACHIEVEMENTS AND CERTIFICATES OF SOME WORK DONE BY ME",
    
    achievementsOrCertificateDetails : [
        {
            title: "Web Dev Fundamentals Certification",
            description: "Earned a certification in Web Development Fundamentals, showcasing proficiency in essential web technologies including HTML, CSS, and JavaScript.",
            imageAlt: "",
            imageSrc: "https://assets.stickpng.com/images/5847f5bdcef1014c0b5e489c.png",
            hasLink: true,
            proofLink: "",
            achievementButtonText: "Certificate"
        },

        {
            title: "ReactJS Certification",
            description: "Attained certification in React.js, validating advanced skills in building dynamic and efficient user interfaces. Demonstrated mastery in leveraging React.js libraries and concepts to create interactive and performant web applications.",
            imageAlt: "Reactjs png",
            imageSrc: "https://edyodalms.s3.amazonaws.com/media/thumbnails/ReactJS1_jTHHel5.png",
            hasLink: true,
            proofLink: "",
            achievementButtonText: "Certificate"
        },

        {
            title: "Professional Communication Certification",
            description: "Achieved certification in job-focused professional communication, indicating proficiency in effective workplace communication strategies. Demonstrated skills in conveying ideas, collaborating with teams, and presenting information clearly and professionally.",
            imageAlt: " png",
            imageSrc: "https://edyodalms.s3.amazonaws.com/media/thumbnails/Classroom_Communication_LOGO-1.png",
            hasLink: true,
            proofLink: "",
            achievementButtonText: "Certificate"
        },

        {
            title: "Global ranking for DSA",
            description: "282 global rank in July Challenge 2021 and 554 global rank in April challenge 2021 on CodeChef.",
            imageAlt: "Leetcode png",
            imageSrc: "https://avatars.githubusercontent.com/u/11960354?v=4",
            hasLink: false,
            proofLink: "",
            achievementButtonText: "Certificate"
        }
    ]
}

/*
    You can change your contact me area details here.
*/

const contactMe = {
    heading : "Reach Out to me!",
    subHeading : "DISCUSS INNOVATIVE IDEAS TO BUILD OR HIRE ME FOR BUILDING IMPACTFUL TECH SOLUTION",
    bioText : "Searching for SDE jobs | Proactive Software Engineer | Full Stack Developer| Delivering High-Quality Code",
    location : "India",
    openForOpportunities : "YES",
    profilePicture : require("./assets/images/ProfilePicture.jpg")   //You can change your picture by adding your photo in assets/images folder
}


export {
    splashScreenName,
    navBarIcon,
    introduction,
    profilesToShow,
    skillsToShow,
    proficiencyData,
    projectsGithubRepos,
    achievementsAndCertifications,
    contactMe
}