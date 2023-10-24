export const workExperience = [
    {
        resumeHeadingProps: {
            heading: 'QBurst',
            subHeading: 'Lead Frontend Engineer',
            fromDate: '2020',
            toDate: '2023'
        },
        singleDescText: `
            In my latest project, I worked as Lead Frontend Engineer for a product called MessageBox (https://getmymessage.co).
            MessageBox is a web application running across multiple domains which helps users to manage large
            hotels. The app allows hotels to manage all Guest Requests and Hotel Internal Tasks to ensure the highest level of Guest
            Satisfaction. Everything in MessageBox is chat based. In addition to normal communication, every request or job is in
            form of an easy to understand chat message. A Supervisor or a Runner can manage all the jobs with simple dashboards
            which provides complete status of every job. A variety of reports based on all types of guest requests are readily
            available for download. Conduct analysis of efficiency with ease with our Productivity reports.
        `,
        multiDescTexts: [{
            descText: `* Created a datascience project called OMICON. OMICON is a portal for the collaborative study of biological systems using omics data. It was created by The Oldham Lab, which is part of the Department of Neurological Surgery at UCSF.`,
        }, {
            descText: `* Developed new module for a running IOT project with Dashboard feature to manage events, and analyse the time and record of an intrusion in road construction lane.`,
        }, {
            descText: `* Integrated the web app with backend services to view the updates on the frontend layer on the dashboard screen.`,
        }, {
            descText: `* Developed UI with HTML and SCSS as per the provided design and design specifications.`,
        }]
    },
    {
        resumeHeadingProps: {
            heading: 'ThinkPalm Technologies Pvt Ltd',
            subHeading: 'Software Engineer',
            fromDate: '2018',
            toDate: '2020'
        },
        singleDescText: `
            As a React and Angular developer, I worked with Java Engineers, Project lead and DB analyst to formulate design structure
            and implemented a well-organized structural code pattern to perform operations at the client-side.
            Performed unit tests and worked with QA team for bug fixes.
            Partook in deploying the app in production environment in Windows server on NGINX version 1.15.8.
            Client-side computation and frameworks were handled with ReactJS version 16.7.0 and Angular version 5.2.
        `,
        multiDescTexts: [{
            descText: `* Developed a CCTV module with latest updates for ship and shore which runs on an IIOT platform
            capable of serving up to 1000's of ships that can connect to all equipment on-board, allows remote monitoring, diagnostics and control`,
        }, {
            descText: `* Handled major modules for CATOS (Cargo Allocation and Tanker Optimization System) which is envisioned
            and developed to allocate Cargo and Tanker optimization in the Shipping industry.
            The objective of the system is to develop independent cargo allocation and tanker optimization system for ships on voyages through ports `,
        }]
    },
    {
        resumeHeadingProps: {
            heading: 'Thinking Code Technologies Pvt Ltd',
            subHeading: 'Software Developer',
            fromDate: '2015',
            toDate: '2018'
        },
        singleDescText: `
            As a developer, worked with architects, team leads and business analysts to understand designs and business requirements,
            and implement server-side backend REST APIs to support front end development. Performed unit tests and worked with QA team for bug fixes.
            Produced technical documentation and developer guides. Java Frameworks, especially Play-Framework,
            was used to manage Object Relational Mapping for Server data store. Angular-JS/Angular4 was used for presentation layer.
        `,
        multiDescTexts: [{
            descText: `* Handled Major modules in developing an Enterprise Risk Management Software Platform that helps clients with technology solutions
            and solutions-related consulting across Enterprise and Operational Risk Management. The platform is suitable for a range of industry verticals across
            banks, asset-managers, insurers, hedge-funds and fintech/start-ups.`
        }, {
            descText: `* Got involved in full stack development of an internal employee portal website which is a web application developed for company administration
            to track the time spent by the employees based on the tasks that the employee gets in a week that are assigned by the project leads or project managers.
            The entries are made on a weekly basis and is managed by the project managers of our department.
            A report generation procedure is as well implemented in it so that reports can be fetched based on Projects, Resources and Task Categories.`
        }, {
            descText: `* Developed an online mobile application for Jayalakshmi Silks which has its branches in four major cities of Kerala.
            The app serves online purchases for customers to choose from a wide range of clothing, especially Sarees and ethnic wears.
            The application is deployed on both iOS and Android platforms.`
        }, {
            descText: `* Was involved in developing an online Medical Device Market place that brokers doctors, hospitals, and device manufactures, and distributors.
            The ecosystem enables end to end management of medical equipment including inventory, orders, invoice, payments, logistics, and search capabilities.`
        }, {
            descText: `* Was involved in developing An innovative project to manage the activities of Kerala Devaswom Board.
            Started initially as a smaller project for local events and activities, but has grown to a full-fledged application to manage the complexities of a government led board.
            The project followed agile methodologies.`
        }]
    }
];

export const projectDetails = [
    {
        title: "MessageBox",
        duration: null,
        description: `MessageBox is a web application running across multiple domains which helps users to manage large
        hotels. The app allows hotels to manage all Guest Requests and Hotel Internal Tasks to ensure the highest level of Guest
        Satisfaction. Everything in MessageBox is chat based. In addition to normal communication, every request or job is in
        form of an easy to understand chat message. A Supervisor or a Runner can manage all the jobs with simple dashboards
        which provides complete status of every job. A variety of reports based on all types of guest requests are readily
        available for download. Conduct analysis of efficiency with ease with our Productivity reports.`,
        feSubHeading: "Frontend : ReactJS, React Hooks, React Redux, Redux Rematch, HTML5/SCSS",
        beSubHeading: "Backend : PHP-Laravel, PostgreSQL, Lambda, AWS-EC2, Jenkins"
    },
    {
        title: "OMICON",
        duration: null,
        description: `OMICON is a portal for the collaborative study of biological systems using omics data. It
        was created by The Oldham Lab, which is part of the Department of Neurological Surgery at UCSF.
        The purpose of this project is to ensure that the solution built will create the foundation for storing
        large amounts of files, produced as a result of laboratory research work. The application will easily
        enable search, retrieval, sharing and repackaging of digital assets of biological systems and allow for
        collaboration between researchers with partial read or write access to various folders and files within
        a project.`,
        feSubHeading: "Frontend : ReactJS, React Hooks, React Persist, React Redux, Redux Toolkit, HTML5/SCSS",
        beSubHeading: "Backend : Python, Elastic Search, AWS, PostgreSQL"
    },
    {
        title: "CATOS - Cargo Allocation and Tanker Optimization System",
        duration: null, // { fromDate: "2020", toDate: "2021" },
        description: `CATOS system is envisioned and
        developed to allocate Cargo and Tanker optimization in the shipping sector industry. The objective of
        the system is to develop independent cargo allocation and tanker optimization systems for ships on
        voyages through different ports.`,
        feSubHeading: "Frontend : ReactJS (Class and Functional Components), React-Redux, React-Hooks, HTML5, SCSS.",
        beSubHeading: "Backend : Spring Boot, MySQL, Microsoft Login Services"
    },
    /* {
        title: "AWARE Web App",
        duration: null, // { fromDate: "2020", toDate: "2021" },
        description: `The AWARE system involves a suite of devices each having its own internet
        connection in order to track its location as well as upload data and download software upgrades on
        platforms such as iOS and Android. The AWARE web app is used as a visualization tool to assess the
        performance of the AWARE system and for report viewing. CRH takes the development of sensors to
        help detect and prevent accidents caused by intrusions into mobile work zones nationwide in the
        USA`,
        feSubHeading: "Frontend : Angular 4, HTML5, SCSS.",
        beSubHeading: "Backend : Django (Python), PostgreSQL."
    }, */
    {
        title: "SMARTShip",
        duration: null, // { fromDate: "2020", toDate: "2021" },
        description: `This product is an IIOT SW platform capable of serving up to 1000's of ships that can
        connect to all equipment on-board, allows remote monitoring, diagnostics and control, provides
        descriptive, predictive and prescriptive maintenance, creates operational efficiency for ship staff as
        well as shore staff, reduces cost and increases ship’s life. The SMARTShip platform will offer a
        central console for ship operators to locally/remotely monitor and control (as available) ship’s
        equipment.`,
        feSubHeading: "Frontend : Angular 5, Redux, RxJS, HTML5, SCSS, Socket.IO",
        beSubHeading: "Backend : PostgreSQL, Cassandra, NodeJS, Sockets"
    },
    {
        title: "RiskCounts",
        duration: null, // { fromDate: "2020", toDate: "2021" },
        description: `The RiskCounts Enterprise Risk Management Software Platform helps clients with
        technology solutions and solutions-related consulting across Enterprise and Operational Risk
        Management. The platform is suitable for a range of industry verticals across banks, asset-managers,
        insurers, hedge-funds and fintech/start-ups.`,
        feSubHeading: "Frontend : Angular 4, HTML5, SCSS",
        beSubHeading: "Backend : RESTEasy(Java)."
    },
    {
        title: "Doctors Bazaar",
        duration: null, // { fromDate: "2020", toDate: "2021" },
        description: `This is an online Medical Device Market place that brokers doctors, hospitals, and
        device manufactures, and distributors. The ecosystem enables end to end management of medical
        equipment including inventory, orders, invoice, payments, logistics and search capabilities.`,
        feSubHeading: "Frontend : AngularJS, HTML5, CSS.",
        beSubHeading: "Backend : Spring Boot, PostgreSQL"
    },
    {
        title: "Jayalakshmi Silks Mobile App",
        duration: null, // { fromDate: "2020", toDate: "2021" },
        description: `An online mobile application for Jayalakshmi Silks which has its
        branches in four major cities of Kerala, India. The app serves online purchases for customers to
        choose from a wide range of clothing, especially Sarees and Ethnic wears.`,
        feSubHeading: "Frontend : Ionic-2 Mobile App Framework",
        beSubHeading: "Backend : Magento 2"
    }
];