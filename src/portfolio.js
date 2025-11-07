
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Seif Eddine Nouara",
  title: "Salut à tous, je suis Seif Eddine",
  subTitle: "Un développeur de logiciels passionné 🚀 avec une bonne maîtrise dans la création d'applications Web et mobiles avec Ruby on Rails / JavaScript / Angular  / Ionic et quelques autres bibliothèques et frameworks sympas.",
  resumeLink: "https://drive.google.com/file/d/1bH4_MHtT-fe8T2YNpIgigtdpzwR-Cl25/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/seifoueddine",
  linkedin: "https://www.linkedin.com/in/seCe que je faisif-eddine-nouara/",
  gmail: "contact@seifeddinenouara.com",
//  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/seifeddine.n/",
  skype: "nouaraseifeddine",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Ce que je fais",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  subTitle: "SEULS LES DÉVELOPPEURS FULL-STACK FOUS QUI VEULENT EXPLORER CHAQUE STACK TECH",
  skills: [
    "⚡ Développe des interfaces FrontEnd hautement interactives pour vos applications web et mobiles",
    "⚡ Applications Web progressives ( PWA )",
    // emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    // {
    //   skillName: "rails",
    //   fontAwesomeClassname: "fab fa-rails"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "85%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "82%"
    }
  ]
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "ESGI",
      logo: require("./assets/images/esgi.jpg"),
      subHeader: "Bachelor's degree, administrateur réseaux et systèmes",
      duration: "Sept 2017 - Avril 2019",
      desc: "",
      descBullets: [
      ]
    },
    {
      schoolName: "Université de Bejaia",
      logo: require("./assets/images/bejaia.jpg"),
      subHeader: "Master en mathematiques appliquées",
      duration: "Sept 2013 - Juin 2016",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Université de Bejaia",
      logo: require("./assets/images/bejaia.jpg"),
      subHeader: "Licence en mathematiques appliquées",
      duration: "Sept 2010 - Juin 2013",
      desc: "",
      descBullets: []
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Développeur FULL STACK",  
      company: "Flambosoft",
      companylogo: require("./assets/images/flmaboSoftLOGO.png"),
      date: "Nov 2016 - Jun 2018",
      // desc: "The big think here is Upgrade the company website (Maghreb pages) from RUBY ON RAILS 2 to RUBY ON RAILS 5 and use FRAMEWORK CSS BOOTSTRAP with Javascript.",
      // descBullets: [
      //   // "Maintenance d'applications internes pour les vendeurs ",
      //   "Creation of an application (Media-Monitor): for the classification of companies specializing in the purchase and sale of cars in ALGERIA, with RUBY ON RAILS 5",
      //   "Maintenance of internal applications for vendors"
      // ]
    },
    {
      role: "Développeur FRONT-END",   
      company: "Tech-instinct",
      companylogo: require("./assets/images/techLogo.png"),
      date: "Déc 2018 - Jan 2020",
      // desc: "Create and develop an application (viaLeads) for the call centers of the company Viadialog using Angular 6 and Framework CSS Material, Guide and help interns"
    }
    // {
    //   role: "Software Engineer Intern",  
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.jpg"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
  ],
  last_experience: [
    {
      role: "Développeur FULL STACK",   
      company: "Norsar technologies",
      companylogo: require("./assets/images/norsar-logo.png"),
      date: "Juin 2021 - Nov 2024 ",
    },
    {
      role: "Développeur FULL STACK",   
      company: "Segula technologies",
      companylogo: require("./assets/images/segula.png"),
      date: "Déc 2024 - Présent",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  //githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubConvertedToken: '598b60755c79da90d55fdcb369e33c1fd23cef5a' ,
  githubUserName: "seifoueddine", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"false" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Quelques grands projets",
  subtitle: "QUELQUES ENTREPRISES QUE J'AI AIDÉES À CRÉER LEUR TECHNOLOGIE",
  projects: [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR92_5foM_71zykwnBx_PEuI5Z3DbbOatS_8CXunLd9og&s",
      link: "https://www.lespagesmaghreb.com/"
    },
    {
      image: "https://ultra-saas.com/sites/default/files/styles/logo_solution_saas/public/viadialog_lgoo.png?itok=5Jz5QiNx",
      link: "https://www.viadialog.com/produits/vialeads/"
    }
   
    ,
    {
      image: "data:image/png;base64,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",
      link: "https://tmf-logistics.com/"
    },
    
    
    // {
    //   image: "https://zidneybac.com/wp-content/uploads/2021/12/cropped-logo_-120x68.png",
    //   link: "https://zidneybac.com/index.php"
    // },

    // {
    //   image: require("./assets/images/evalutalocation.png"),
    //   link: "http://evaluetalocation.com/"
    // },
    // {
    //   image: "https://www.mediasmonitoring.com/logo-mm-black.png",
    //   link: "https://www.mediasmonitoring.com/"
    // },
    {
      image: require("./assets/images/picture.jpeg"),
      link: "https://www.solocal.com/"
    },
    {
      image: "https://offres.itg.fr/wp-content/uploads/2022/07/ovhcloud-logo-1.png",
      link: "https://www.ovhcloud.com/" 
    },
    {
      image: require("./assets/images/afd.png"),
      link: "https://www.afd.fr/fr/le-groupe-afd" 
    },
    {
      image: require("./assets/images/kamatz_logo.jpeg"),
      link: "https://kamatz.com/" 
    }

  ]
};


const bigProjects2 = {
  // projects: [
  //   {
  //     image: require("./assets/images/egbc.png"),
  //     link: "https://evergreenbusinesscouncil.com/"
  //   },
  //   {
  //     image: require("./assets/images/rm2r.png"),
  //     link: "https://residenceseniorham.com/"
  //   }
  // ]
};





// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image:
        "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "AVEC UNE PASSION 💖 POUR CRÉER DES CHOSES INTÉRESSANTES 🛠️, JE PRENDS PLAISIR À RÉDIGER ET À PARTAGER MES CONNAISSANCES 📚 AVEC AUTRUI.",

  blogs: [
    {
      url: "https://medium.com/@Seif_Eddine.N/setting-up-single-sign-on-sso-with-a-cas-server-in-a-ruby-on-rails-api-using-devise-as-well-as-779976399803",
      title: "Mise en œuvre de l'authentification unique (SSO) à l'aide d'un serveur CAS dans une API Ruby on Rails avec Devise et une application Angular",
      description: "Cet article propose un guide étape par étape sur comment mettre en place un système d'authentification unique (Single Sign-On, SSO) pour sécuriser les accès à une application web. Il se concentre sur l'intégration d'un serveur CAS (Central Authentication Service) avec une API développée en Ruby on Rails"
    },
    {
      url: "https://medium.com/@Seif_Eddine.N/rainbow-sdk-and-angular-seamless-video-audio-calls-and-chat-integration-adf0a7509c1b",
      title: "SDK Rainbow et Angular : Intégration des appels vidéo, audio et du chat",
      description: "Cet article présente une méthode détaillée pour intégrer des fonctionnalités de communication avancées telles que les appels vidéo, les appels audio et le chat dans vos applications web en utilisant le SDK Rainbow avec Angular."
    },
    {
      url: "https://medium.com/@Seif_Eddine.N/introduction-to-dry-rb-bd7755348094",
      title: "Introduction à dry-rb",
      description: "Dry-rb est une collection de bibliothèques Ruby de nouvelle génération destinée à vous aider à écrire des programmes clairs, flexibles et modulables."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  // subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  subtitle: emoji("J'AIME PARLER DE MOI ET DE LA TECHNOLOGIE 😅"),
  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: "Contactez moi 📱 ",
  subtitle: "DISCUTER D'UN PROJET OU SIMPLEMENT DIRE BONJOUR ? MA BOÎTE DE RÉCEPTION EST OUVERTE À TOUS.",
  number: "+33 749 045 986",
  email_address: "contact@seifeddinenouara.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};

const illustration = {
  animated: true // Set to false to use static SVG
};
export { illustration, educationInfo, greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, bigProjects2, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
