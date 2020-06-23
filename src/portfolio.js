
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Seif Eddine Nouara",
  title: "Hi all, I'm Seif Eddine",
  subTitle: emoji("Un développeur de logiciels passionné 🚀 ayant une expérience de la création d'applications Web et mobiles avec  JavaScript / Angular / NodeJs / Ruby on Rails / Ionic et quelques autres bibliothèques et frameworks sympas."),
  resumeLink: "#"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/seifoueddine",
  linkedin: "https://www.linkedin.com/in/seif-eddine-nouara%F0%9F%94%B1-b2b8b5a7/",
  gmail: "nouaraseifeddine@gmail.com",
 // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/seifeddine.n/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Ce que je fais",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  subTitle: "QUE LES DÉVELOPPEURS FULL-STACK FOUS QUI VEUT EXPLORER CHAQUE STACK TECH",
  skills: [
    emoji("⚡ Développez des interfaces FrontEnd / User hautement interactives pour vos applications Web et mobiles"),
    emoji("⚡ Progressive Web Applications ( PWA )"),
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
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "82%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Développeur FullStack",  
      company: "Flambosoft",
      companylogo: require("./assets/images/flmaboSoftLOGO.png"),
      date: "Nov 2016 – Jui 2018",
      desc: "Upgrade le site Web de la société (les pages maghreb) de RUBY ON RAILS 2 à RUBY ON RAILS 5 et utilisez FRAMEWORK CSS BOOTSTRAP avec Javascript.",
      descBullets: [
        "Maintenance d'applications internes pour les vendeurs ",
        "Création d'une application (Media-Monitor): pour le classement des entreprises spécialisées dans l'achat et la vente de voitures en ALGÉRIE."
      ]
    },
    {
      role: "Développeur FrontEnd",   
      company: "Tech-instinct",
      companylogo: require("./assets/images/techLogo.png"),
      date: "Déc 2018 – Jan 2020",
      desc: "Créer et développer une application (via des pistes) pour la société Viadialog en utilisant Angular 6 et Framework CSS Material et meme guider et aider des stagiaires."
    },
    // {
    //   role: "Software Engineer Intern",  
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.jpg"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  //githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubConvertedToken: 'eb04bd95ec7835e2114b00c794d9af9c870d510b' ,
  githubUserName: "seifoueddine", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Grands projets",
  subtitle: "QUELQUES ENTREPRISES QUE J'AI AIDÉ À CRÉER LEUR TECHNOLOGIE",
  projects: [
    {
      image: "https://media-exp1.licdn.com/dms/image/C4E0BAQH4OWrSrp69jA/company-logo_200_200/0?e=2159024400&v=beta&t=JuHx2HlAv10obtH8WqIWvyjLAm77OfQdXz9TgvlhJX8",
      link: "https://www.lespagesmaghreb.com/"
    },
    {
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADhCAMAAADmr0l2AAAA0lBMVEXpUR3////nPQD++/voRwDoSwv64t7vkX/pTxn75uT2xr7pThX2yMHpTBHpThbte2PzsaX0t630vLPug27yq57rYz3+9/bqWzL98vDsbUvypZf87uzscVRUVFb52dT86+n40cr529bqXzn09PTr6+vpVijug2qVlZZ1dXdmZmjW1tampqddXV9MTE7xno3pVCPvjnrCwsK4uLne3t7mJQDxoI/nNQDrb1DteV3tfmfraESLi4yAgIGenp/Y2NhFRUh9c3LLt7W9vb3dxMK0oZ+NhIMFznFaAAAP80lEQVR4nO2dC3eiuhbHiYBGEXyggOIDrK+2Vq29c6TWztwz597v/5VugqBIEgQfU+nlv85anSMP82ND9s7eCXKA/97i+H/lvrU4Psd9b2WAaVcGmHZlgGlXBph2ZYBpVwaYdmWAaVcGmHZlgGlXBph2ZYBpVwaYdmWAaVcGmHZlgGlXBph2ZYBpVwaYdmWAaVcGmHZlgGlXBph2ZYBpVwaYdmWAaVcGmHZRAKGYSIp/nByxLUqUcybbey8pFiAcFQjNyY/2WnsUikrZRvvKkCTKOZmEUIxoSaFD+ToSUGkCQkXyo72qgndpbXJbWTjJJ6qUc7KeG4VraBFNqVO+Lh6gFXHWhg9YMohtGu2aHkugXBcWoDRqRF7r2tmApViA5MXlaV95JLlDOycdUNKrPLD5GwCa9ViAwCQ2Fpsn+pkc9dpRAREfuoR2/gaAVjxAvk9s1NrRJpTW5EVhAO74gB1xN50N2Ih3iwKDbK01gFGAQpV6x1EAlZHLB+z2DQDVmIAmefuYyyinBgf0G47inBeN3aWwWzcAlMvxAPk+2c+UFhEmFOb0Xp90zmLD22TrbEdxLmBfiAkI8jaxuTiWmXwQMvxPuFFQ8PmAzfWuDliODVikdOIN9j0qFqhdDAEIlT0fsEV2j3cuYE2MC8hb5DNld1gmhJDV1uNGKaNG4HS5+dUBl3GfQdRp9ggT8nPWQyiPWWHJUaNc/x4ArFwdcBAf0KiTvrDMdPYNVlQSbJTn/w6AHWa0diZgUZdiA4Ia2QVoKt2E0prZXQQaFeJDgBtmZHwmoDVS4gNaNbIXr4+ohHKBGVYeGqWE+BCgzuxlzgSsLhIA8ktKvEa9R2GTfdZ9o+AoPD6yc9KPKwOOZRgfEFQp17dNs6DssD223yjkH8JWtnPiknXgeYC8Ew1YPQbMO+SNZ4okIRzV2Of0GyU3iE12Tq6wepl4A16o16pBtQeQAsjX/e3v8hEgqFBMSMlBKBtyfEwACuQmOweb8ypVNZXicWlJJ+FYkKMBOjlvs39SH7DuUFpFXlolYlQQDYgCU4EuWkQRJ21ItWAlfDYfUIOUEYIT3hsuyM6IAIR0wESKlRdNBAiWS7JZ5fDXUHNNYUCGBa8OmMyCwBIonmIT8hQ5+44AE1oQcOTjFc4+yZQH9esAE1oQFFons0/0XFMY8E6fQZCnDNm0H0ETKs0IHwHu3oJ8c0w6+14wIBWY44jTgH8xfMQFbiKpBUFVJw8wA84eclE+IhrQqNWZWsZz9CRfUsB8rkC2rHQ4QGhHVRhA5DMYpXihGo0wIaAxbpFDveLYNyFcRNU6AoA0C0YpXrBN4UsKyNeFKvn1Vc57Cpm5ptQAgvzonYz4e16pCXJRlYB0ABpLSDo6P/skVyLqJ0eASZ/BcwETP4Pocc8VSE9X3riElEEeA/B+LQjsNaRknyq4m4nINX0V4BkWNAo5iiuo6ciEwjLayX8B4BkWBHV5QDpzoyVxcBOV/zgGvONnENhOjlL6a3BQHp9w8gHAe7YgPxfWZDdT1KWoXNNXAZ5jQVDXc5R7sSBQhlJfDniOBUHeESiD2nyOmbWlAN7zM4iMpeQoDr1z0skHAO/agqA0EChjivxpH5EWQGMtjk4M+3ai9Kpp6GTQPQql00EZsinlpk2FBYE1klsxfF6BUmm49wGvp6Y8OjkwAholixplwXxFZWpNKdPd0IKgKouUUlNIjYSAdk5milaGvKUFi4ISUeTcSVsnBozR4ISA51oQNCU4P2HC+igC8F4Tv3tVhVODP15V0mzBvggXlOxTQNYm1YCgI4nMyT6ufkCYasB3GVKyT4HWOjKX5mcQAUYnQasLGAWYBgtyUGd3M31V5O4B8CILcsIPZrzmTpa9A8CLLMgpG9YQ0Cjg2PEOnsHLADmhxnD2PXfCeuotyEmU7BOWtpsEdgeAlz2DHEfLPiEVW8qdAF5oQU5+p/Hx9V298A6ewUstCGkL04DmzeW+UwsCEpCykzdRT6Rkn4DlDb+TDnhvYsFavxhS3gkvnJPJnYreTsiExKai6lW0RYvc5jdKNMNb+jGWJCYH5ATyF5vIhYERO0HKNjniuP05yU0J+f4vFyl/L2WAaVcGmHZlgGlXBugKEml/6BYDpNCKFiiFP1VkeLx1v1E61BT2AY8cPN/uZErgeNpXnlK8WHSkto4JZd0Zj9WxMwp+DCW9gz5VO4PD3NfWu74nQsegQ3QvPkX/o6p4d1V1Rrs9muPNofnSaI02vrcW/lfAQQV94OjJCGMBSutQbVHc1AzA88Cobg6DCshVan3AA2CWxgvvI71u+IuUpU0VJxCNWhO6OweSbXnv8rX3C6HQJRw03JSx3fag4bqOs1dmNVk0Gg+wdQwoVizQa8zn1TywWvuoGy6LwK7+aDcsregtk0CAfQ8QjqrAbqCNRW/icaHdbldNrYr+zL23CQQA5VadL9bb7VIf7F6mAJslYKHj82ayXuMcQDjogdJGEEXR6R3WtCitPl9f47nhzXnVv+oHQKlj9yt449LbhhcgbfLmAP3xF6cdAKFeA70x2kVRS3P3hpcrRq+D9nXYL5u5GqDQ5vu622zB4YH/RhUBXeHdp4qiH25RH1BWTQvbNdiRKOu8GVxPcQAUx4a5xHtCabAzr6yCOu5wJPay/KsB5iww94fjlr9AUmkC09nPyvb/BgDfi8V16OIzAeGisV8YC71ptGO+10pmPFdnAMJmHgy8ZokFP/UgzvdJiIOCz6COLLwRjrpANuDGMkK3otJCj8NASOgkzgKUOkXTX+Uhv/tYQs3tDaD76ir/NgwAcu7CzfoiuBiUCYhoiFdEoHscmHNFvoUfjA8ov/f6SFaT6GSQjQd1A4DaIsYzKDuaTbwtSdiUNGDMF7Fe9bXXlQElp14ul42+P8E+CMjB3BohWpt9y5mAkmPmiTWVqH9RLQOU6YvWWToP0PC/RFz6b94Squ4+EvYTZTog2ppTi6B2GlBp2X3Kglwoyktzv+w7ns7pZAb5oG/w2oRQ7R02XFgsQNz/A3sfj0V1Mvyc5g+gUAC9WwPiWkNtd5ism6DjRyoa78UcdMBddy9tzPz+6WIDon96r8BAEXbweMglTP2eAygWNM3BHbas1w8LrMUGKKq4/4QK7RaFg4Gg4CgP9PSTFkRez9DmEB0pwqV3Al0X3Dn7FG90DcDqX4esK+QsUFwKuVyrBLR9Ch8OLGA2OnJOnJskIFy07XYzl6v0+OrewbEBceRqVCs5YVzS3M/goN6bj3K59z6fLFaLC6j1TSTv4il6FWhmMW+AvHNoH0S8wEB78ShmI9yE/APwhtnXgHVAQoDGhgrIKaO2hr7D1EDeLXDgFyfwZh8dX+eu34vCpuvd+mbJ+35FUXumZuQbzWBPALn3Uh7tVX/3fR0ctXsVf0mWUyoafWsZaB8clIOvJUPDkfneOlB6LxX7eH//VGq5aJg9Jxlf3BG9ECoMQNn9RDh2uv6nh2gDisLeKbgbhaPXWkDhKPYSc8G7L7T/7uTCTSKZNCsDTLsywLQrA0y7MsC0KwNMuzLAtCsDTLu+P+C/ko8hUyVg21VHFkQJwu+JCfCcfx5B6iNOkr4hJPAXNRhWu9JqLuTvdr+C4KqNfrm9dJqS+J0gwd+vbw8BRr5YbhcqA/HbQIJ/Vs/Pq7ejed9avlydV0YC9Vdw0iZ0iw6fVp+T38Pjye1G3qoVOqh7TVZuvD/telHEuP14ejhm5I1ir1bYCALlFcTpkd/JPAxfJ9PJU3iVAq+Zdm0JUxwM8IflHPxw9Tj7HIYZMSXykwKGTCEl/5cadBTDSfdxRWHcBQOjBacoKaPkc6K8tINrNF+3s+3r8IEGqVltZzNYJJ7S+JXi8WuruXkvuMRvuNpOJ8fu8SAUDIw7TZgaP+kOl6CwmPeCVuSfniMYcTCAIh45FZDeeBAK+g/raDHx8PV5uv18fWMsT0XBQKNQ0fEw5IsJTmg/4IVic24d07whz4EYqX0OFg4G5o5038FAYESvSJtC6NWtD2+/J4/TCEbejXhadxwMHKUsFNhcht9O+/C2ms6mzz9ZiBiy36stR3caDIRyMgrUVWLZ+8PPyaw7fX6j0fmQGgoG3sU7hCSSTlBSSETAv25fXh5X9F71sBcKBqAs3VX6g/4jp0vKL2AN0a36a/o6PPGKH77X6Az0hXQvvSs1bQhFWLApb6B4+5zOuhNGmBOQabXH6yZ3F36SkRclXL+nB+Q5uo+frBAgoOKdpD+YiV8ojEKu3zcj8hy/ps9Pp+5VdLfmS42Co39t+iMis+26fhriw9Nq0u1un9nu8SADpz8c7uvSH5Gpe0VGrp9qqOHTavoyQ4wnb1XgpT/W4tcEAydqEwrcEK7fu/+GT5+zl8ftJ5EFoO7tpj8Gwp/3kyeLLwocqDaj1cOn7S/E+BzjVsW7a4ZdU+U/HAzEqC5BZaEy3x328Dz71e1OT4UAB2m9hiO4tZA/QMfFnS8qCpToxtfb52P35dc21uPo2dJudHAt5E+kP2LWB1mu3zPj6weKcl5ihAAHubWQP5D+iF0AZbl+T8PVB7LjI3KP8Rlx+kN1mspN/WSCCi92/RGI4On54/HlBYcA8RFRMIAjnhvWQhKVsKEwoEc3noavz9vur9lHrBDgIBwMFG5VC0lYo0euP5zYONIDTuUg1/HxHC4EnIS8US0k8SQERSESGyHGt9eP7ksXMyZC9NIf166FnDHLQoFNNfq1qDjN8QsxTulJ8khIs3fdWshZ00gUOIrwizvGn5Pur+5stv2d7FbFkLwbDFypFnLmPBkoy6cQAf807Xa7Ly/b11ivfw8fjYKBBYqiLg0Gzp4IBEW5cPLF9cPVFHnHl+7k6eEcSFwLaeqXBQMXzHTCNQ12dOPr5+cWMz4+/0wSAhzk10LOhbxoKhdy/VHRjaeH188tNmPCEOCgXS1kcF4t5MK5amRNg6q31WSKGGfb1ZmMQMPpj3NqIRdPxqPUNGjCaY7ZC4pWJ0lDgIN26Y+EtZArzDak1DSoctMcqF99/FhFFAKilbwWcpXplOzERqh5w5/YjN3ZdLuKKgScgkxSC7nSfFEF6k4cRBysbl8w42OSETIJqRkxayFXmxALJRgPEXvHxy7W7CJGsCsTSKIcGQtcccYvlIVKjB7V1dvkcYbDnNmZIcAR5HrgTgW9OSCHV6XilzHEa9jvj6nLiEOAyxiBWW5X1k2OGvFce862KC7jIiLv+IGj1e7LdBWjEHBCrFrI1Sel4xi1HBfxwU1z4Fv14+wQ4CA+X2oTtZAbzLqHol4oxUVE3vF565rxcbL6eVmfg+WmP4K1kJssK4DyYFmK2d24KYBPbMZud/oRNRcgAaRV3ddCbrRuAiGq0b/nHWbEaQ703/TjghDgoF0tpCmIeN3EjfSX3Crl48v+5z//3um/k78THBdxxp5VW3KAv6WSXnf3mOTHRZzxf88gloi9N9DUAAAAAElFTkSuQmCC",
      link: "https://tmf-logistics.com/"
    },
    {
      image: "https://www.voicetechparis.com/2019/wp-content/uploads/sites/2/2019/06/Viadialog-2.png",
      link: "https://www.viadialog.com/produits/vialeads/"
    }
    ,
    // {
    //   image: require("./assets/images/creaciba.png"),
    //   link: "https://www.creaciba.com/"
    // },
    {
      image: "data:image/jpeg;base64,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",
      link: "https://www.sarlbylab.com/"
    }
  ]
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
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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
  title: emoji("Contactez moi ☎️"),
  subtitle: "DISCUTER D'UN PROJET OU VOULEZ JUSTE DIRE SALUT ? MA BOÎTE DE RÉCEPTION EST OUVERTE À TOUS.",
  number: "+213 664 475 820 / +33 666 666 666",
  email_address: "nouaraseifeddine@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
