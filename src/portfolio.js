// Website related settings
const settings = {
  isSplash: true,
};

//SEO Related settings
const seo = {
  title: "Midecoder Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Midecoder Portfolio",
    type: "website",
    url: "https://github.com/Ay-Coder1",
  },
};

//Home Page
const greeting = {
  title: "Babarinde Ayomide",
  logo_name: "Midecoder",
  nickname: "Midecoder",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1u-eY-Bo1Kah2CvKdKBueo6RYgvG9drMU/view?usp=sharing",
  portfolio_repository: "https://github.com/Ay-Coder1/masterPortfolio",
  githubProfile: "https://github.com/Ay-Coder1",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Ay-Coder1",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717", //
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ayomide-emmanuel-1aa96b251/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCGIki4CsbA3MRd98qR8WWgg",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
  {
    name: "Gmail",
    link: "mailto:ayomidebabarinde07@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Ayomide78268640",
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#1DA1F2",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/Haywhy.coder",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mide.coder/",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Front-End Developer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Reactjs and javascript projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "HTML",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "fa-css3",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Javascript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Bootsrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        // "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating website backend in Nodejs, Express & Mongodb",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dotjs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },

    {
      title: "Back-End Developer",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive api and logic for web applications",
        "⚡ Creating the flow of website functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Node-Js",
          fontAwesomeClassname: "simple-icons:node-js",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "MongoDb",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Talent Mode College",
      subtitle: "Senior Secondary School(SSCE)",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2015 - 2021",
      descriptions: [],
      website_link: "#",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as front-end and Back-end Developer and Designer. I have also worked with some well established companies mostly as Full Stack Developer  Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Full-Stack Web Developer",
          company: "Boldlinks Technology Solution",
          company_url: "#",
          logo_path: "legato_logo.png",
          duration: "June 2022- Aug 2023",
          location: "Lagos, NG",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make website which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactMail.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with website development React, nodejs, javascript and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link:
      "https://drive.google.com/file/d/1u-eY-Bo1Kah2CvKdKBueo6RYgvG9drMU/view?usp=sharing",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "48, Unity Avenue Agbado Ijiaye, Ogun State- 285520",
    locality: "Nigeria",
    country: "NG",
    region: "Ogun",
    postalCode: "285520",
    streetAddress: "48, Unity Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/rPDkhpYPtrQ3AhuG8",
  },
  phoneSection: {
    title: "Phone :",
    subtitle: "09066435738",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
