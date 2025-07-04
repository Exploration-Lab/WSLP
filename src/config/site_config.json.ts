interface SiteConfig {
    website_url: string,
    banner_path: string,
    x_handle: string,
    keywords: string,
    authors: string,
    logo_path: string;
    name: string;
    description: string;
    main_conf: string;
    main_conf_link: string;
    location: string;
    date: string;
    nav_title: string;
    nav_items: Array<{ name: string; href: string }>;
    buttons: Array<{ name: string; href: string }>;
    anthology_link: string;
    email_link: string;
    youtube_link: string;
    x_link: string;
    github_link: string;
    bluesky_link: string;
    program_events: Array<{
        start_time: string;
        end_time: string;
        description: string;
        papers: Array<{ title: string; authors: string }> | undefined;
    }>;
    invited_speakers: Array<{
        image_path: string;
        name: string;
        affiliation: string;
        description: string;
        link: string;
    }>;
    panelists: Array<{
        image_path: string;
        name: string;
        affiliation: string;
        link: string;
    }>;
    sponsors: Array<{
        image_path: string;
        link: string;
    }>;
    organizers: Array<{
        image_path: string;
        name: string;
        affiliation: string;
        description: string;
        link: string;
    }>;
    faq_items: Array<{
        question: string;
        answer: string;
    }>;
}
const site_config: SiteConfig = {
    website_url: "https://exploration-lab.github.io/",
    banner_path: "2025/banner.png",
    x_handle: "@WSLP",
    keywords: "WSLP, IJCNLP - AACL, NLP, Workshop, XAI,  Language Models, Sign Language Translation, Low-Resource Languages, Shared Task, Sign Language Processing, Multimodal Machine Learning, Indian Sign Language",
    authors: "WSLP 2025 Organizers",
    logo_path: "/WSLP/logo1.png",
    name: "WSLP 2025",
    description: "Workshop on Sign Language Processing (WSLP)",
    main_conf: "IJCNLP - AACL 2025",
    main_conf_link: "https://www.afnlp.org/conferences/ijcnlp2025/",
    location: "IIT Bombay, Mumbai, India",
    date: "December 20th, 2025",
    nav_title: "WSLP",
    nav_items: [
        { name: "Call for Papers", href: "/WSLP/call" },
        { name: "Shared Task", href: "/WSLP/task" },
        // { name: "News", href: "/WSLP/#news" },
        { name: "Program", href: "/WSLP/#program" },
        { name: "Organizers", href: "/WSLP/#organizers" },
        { name: "Important Dates", href: "/WSLP/#news" },
    ],
    buttons: [
        { name: "Call for Papers", href: "/WSLP/call" },
        { name: "Shared Task", href: "/WSLP/task" },
    ],
    // anthology_link: "https://aclanthology.org/venues/WSLP/",
    email_link: "isign.benchmark@gmail.com",
    // youtube_link: "https://www.youtube.com/@WSLP",
    // x_link: "https://twitter.com/WSLP",
    github_link: "https://github.com/WSLP",
    // bluesky_link: "https://bsky.app/profile/WSLP.bsky.social",
    program_events: [],
    invited_speakers: [],
    panelists: [],
    sponsors: [],
        organizers: [

    {
        image_path: "/WSLP/Mohammed-Hasanuzzaman.jpeg",
        name: "Mohammed Hasanuzzaman",
        affiliation: "Queen’s University Belfast, UK & ADAPT Centre, MTU, Ireland",
        description: '',
        // "Lecturer (Assistant Professor) in AI at Queen’s University Belfast and Funded Investigator at the ADAPT Centre, MTU. His research focuses on NLP and causal machine learning. He serves as an Associate Editor for several IEEE and ACM journals. Mohammed has organized multiple workshops at top-tier conferences and served as Area Chair for ACL and affiliated conferences. He leads EU projects like WARIFA and ITFLOWS and has received the Erasmus+ Staff Mobility Award and DCU INVENT Award for Industry Engagement.",
        link: "https://mohammedhasanuzzaman.github.io/"
    },
    {
        image_path: "/WSLP/Facundo-Quiroga.png",
        name: "Facundo Manuel Quiroga",
        affiliation: "Universidad Nacional de La Plata (UNLP), Argentina",
        description: '',
        // "Professor and full-time researcher at Instituto de Investigación en Informática LIDI, Facultad de Informática, UNLP. Over the last decade, he has focused on innovative approaches to Sign Language Translation, particularly Argentinian Sign Language (LSA), covering dataset collection, model development, data augmentation, and interpretability analysis.",
        link: "https://facundoq.github.io/"
    },
    {
        image_path: "/WSLP/Ashutosh-New.jpg",
        name: "Ashutosh Modi",
        affiliation: "Indian Institute of Technology Kanpur (IIT Kanpur), India",
        description: '',
        // "Associate Professor at IIT Kanpur. Specializes in Indian Sign Language Processing, emotion recognition in multimodal environments, NLP applications in legal contexts, and commonsense reasoning in LLMs.",
        link: "https://ashutosh-modi.github.io/"
    },
    {
        image_path: "/WSLP/Sabyasachi-Kamila.jpg",
        name: "Sabyasachi Kamila",
        affiliation: "Vellore Institute of Technology Vellore, India",
        description:'',
        // "Assistant Professor at VIT Vellore, specializing in AI and NLP, with a focus on affective computing, conversational reasoning, and sign language translation.",
        link: "mailto:sabyasachi.kamila@gmail.com"
    },
    {
        image_path: "/WSLP/Keren-Artiaga.jpg",
        name: "Keren Artiaga",
        affiliation: "ADAPT Centre, MTU, Cork, Ireland",
        description:'',
        // "Ph.D. student in Computer Science at ADAPT Centre, MTU. Specializes in sign language-to-speech translation.",
        link: "http://www.linkedin.com/in/keren-artiaga-249132228"
    },
    {
        image_path: "/WSLP/Abhinav-Joshi.png",
        name: "Abhinav Joshi",
        affiliation: "Ph.D. Student, Indian Institute of Technology Kanpur (IIT Kanpur), India",
        description:'',
        // "Ph.D. student in Computer Science at IIT Kanpur. Research focuses on Natural Language Understanding (NLU), including Indian Sign Language Processing, Multimodal Fusion, Commonsense and Causal Reasoning.",
        link: "https://www.cse.iitk.ac.in/users/ajoshi/"
    },
    {
        image_path: "/WSLP/Sanjeet-Singh.jpg",
        name: "Sanjeet Singh",
        affiliation: "Ph.D. Student, Indian Institute of Technology Kanpur (IIT Kanpur), India",
        description:'',
        // "Ph.D. student in Computer Science at IIT Kanpur. Research focuses on Indian Sign Language Processing.",
        link: "https://sites.google.com/view/sanjeet-singh"
    }
    ],

    faq_items: [
        {
            question: "Are dual submissions allowed?",
            answer: "Yes, dual submissions are allowed if the other venue also allows dual submissions. If your submission is accepted to the archival track of WSLP, you will have to withdraw your submission to the other venue. Dual submissions to WSLP and IJCNLP - AACL (including ARR) are not allowed."
        },
    ]
};

export default site_config;