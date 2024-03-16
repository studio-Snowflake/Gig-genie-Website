import {

  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  
  {
    id: "0",
    title: "Home",
    url: "#features",
  },
  {
    id: "1",
    title: "About",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Services",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Features",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Contact us",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Get A Quote",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Full stack websites",
  "landing page websites",
  "Portfolio Websites",
  "App Development",
  "Wix and Wordpress ",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Web Development",
      text: `
      Full stack websites:
      - Combines front-end (HTML, CSS, JavaScript) and back-end (Python, Ruby, PHP, Node.js) tech for dynamic web apps.
      
      Landing page websites:
      - Single pages focused on conversions, designed to capture info or prompt actions like sign-ups or purchases.
      
      Portfolio websites:
      - Online showcases for individuals' work, skills, and experiences, highlighting projects and contact info.
      
      App Development:
      - Creating software for devices using native (iOS, Android), hybrid (React Native, Flutter), or web-based (HTML, CSS, JS) approaches.
      
      Wix and Wordpress:
      - Popular platforms for website creation and management, offering user-friendly interfaces and customization options.
    `,
    date: "ONE",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },

  {
    id: "1",
    title: "Social Media Management",
    text: "High-end social media management is all about precision. Utilizing advanced analytics and strategic planning, every detail is optimized for maximum impact. From curated content to strategic scheduling, skilled professionals ensure each post resonates with the audience. With a focus on innovation, these agencies leverage cutting-edge technology to create immersive brand experiences. In essence, elite social media management engineers moments of engagement that elevate brands to new heights.",
    date: "TWO",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Brand Identity",
    text: "Crafting brand identity is a meticulous endeavor. Through strategic planning and creative insight, every element is tailored to resonate with the target audience. From logo design to tone of voice, skilled professionals ensure consistency and authenticity across all touchpoints. Leveraging market research and consumer insights, brand identity is honed to perfection, reflecting the essence of the brand and fostering meaningful connections with consumers. In essence, crafting brand identity is about engineering a cohesive narrative that leaves a lasting impression.",
    date: "THREE",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "AI automation ",
    text: "AI automation revolutionizes business operations with unparalleled efficiency. Harnessing artificial intelligence, tasks are executed with precision, speed, and accuracy. From data analysis to customer service, AI algorithms streamline processes, saving time and resources. Through machine learning, systems continuously improve, adapting to dynamic environments and optimizing performance. In essence, AI automation empowers businesses to achieve unprecedented levels of productivity and innovation, paving the way for a future of limitless possibilities",
    date: "FOUR",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const IdeaAnalysis =
  "We initiate every project by delving deep into your vision, goals, and target audience. Market research, user personas, and industry trends guide our strategy to lay a solid foundation for success.";

  export const Designing =
  "Creativity meets functionality in the designing stage. From sleek interfaces to intuitive navigation, we ensure your website not only looks stunning but also delivers an exceptional user experience.";

  export const Development =
  "Our expert team seamlessly transitions into the development phase, employing cutting-edge technologies and industry best practices to craft robust, scalable solutions tailored to your needs.";

  export const TestingLunching =
  "Quality is our priority. Through rigorous testing across devices, browsers, and user scenarios, we ensure flawless performance before launching your website. Meticulous attention to detail ensures your website is ready to make a lasting impact.";

export const collabContent = [
  {
    id: "0",
    title: "Idea & Analysis",
    text: IdeaAnalysis,
  },
  {
    id: "1",
    title: "Designing",
    text: Designing,
  },
  {
    id: "2",
    title: "Development",
    text: Development,
  },

  {
    id: "3",
    title: "Testing & Lunching",
    text: TestingLunching,
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Cafe Delicia Legacy",
    text: "The web development agency crafted a captivating project for Café Delicia Legacy, designing a beautiful animated website featuring seamless social media integration and an enticing menu. This dynamic online platform enhances the café's visibility and invites patrons to experience its unique blend of tradition and innovation effortlessly.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    buttonLink: "https://cssgradient.io/",
  },
  {
    id: "1",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
   
    light: true,
    buttonLink: "https://example.com/2",
  },
  {
    id: "2",
    title: "Connect everywhere",
    text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
    buttonLink: "https://example.com/3",
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
    buttonLink: "https://example.com/4",
  },
  {
    id: "4",
    title: "Ask anything",

    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    buttonLink: "https://example.com/5",
  },
  {
    id: "5",
    title: "Improve everyday",
    text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    buttonLink: "https://example.com/6",
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
