import type { aboutType, askType, blogType, galleryType, parteernType, serviceType } from "../types";
import { Hand, Laptop, SearchCheck, Star, Trophy } from 'lucide-react'

const service: serviceType[] = [
    {
        id: 1,
        imageUrl: "https://photowebdesigns.com/wp-content/uploads/2025/03/service1.jpg",
        title: "Personalised Website development",
        description: "We build personalized websites for photographers using beautiful and professional templates",
        content: [
            "Super-fast delivery",
            "Award-winning design",
            "Mobile-friendly and responsive layouts",]
    },
    {
        id: 2,
        imageUrl: "https://photowebdesigns.com/wp-content/uploads/2025/03/service-2.jpg",
        title: "E-commerce Solutions",
        description: "We create stunning online stores that showcase your photography and make it easy for customers to purchase prints and digital downloads.",
        content: [
            "Secure payment gateways",
            "Customizable product pages",
            "Inventory management",]
    },
    {
        id: 3,
        imageUrl: "https://photowebdesigns.com/wp-content/uploads/2025/03/service-3.jpg",
        title: "SEO and Marketing Services",
        description: "We help photographers increase visibility and attract more clients through strategic SEO and marketing campaigns.",
        content: [
            "Search engine optimization (SEO)",
            "Social media marketing",
            "Email marketing campaigns",]
    },
    {
        id: 4,
        imageUrl: "https://photowebdesigns.com/wp-content/uploads/2025/03/service-4.jpg",
        title: "Website Maintenance and Support",
        description: "We provide ongoing maintenance and support to keep your website running smoothly and securely.",
        content: [
            "Regular updates and security patches",
            "Performance optimization",
            "24/7 customer support",]
    },
    {
        id: 5,
        imageUrl: "https://photowebdesigns.com/wp-content/uploads/2025/03/service-5.jpg",
        title: "Custom Features and Integrations",
        description: "We offer custom features and integrations to enhance the functionality of your photography website.",
        content: [
            "Client proofing galleries",
            "Booking and scheduling systems",
            "Third-party integrations (e.g., Lightroom, SmugMug)",]
    }
];

const partern: parteernType[] = [
    {
        id: 1,
        imageUrl() { return (<svg   xmlns="http://www.w3.org/2000/svg" width="40" height="40"  fill="#202020"><path d="M21.501 29.337v6.83q0 .356-.238.594a.8.8 0 0 1-.595.239.8.8 0 0 1-.595-.239.8.8 0 0 1-.238-.594v-6.83L17.95 31.22a.84.84 0 0 1-.569.25q-.335.016-.61-.26-.267-.265-.266-.59 0-.323.265-.589l2.955-2.955q.405-.404.943-.404t.942.404l2.955 2.955q.234.234.255.569t-.255.61q-.265.267-.585.272-.318.005-.594-.262zm-9.836-8.17h-6.83a.8.8 0 0 1-.595-.24.8.8 0 0 1-.239-.594q0-.355.24-.594a.8.8 0 0 1 .594-.239h6.83L9.78 17.615a.84.84 0 0 1-.25-.568q-.015-.336.26-.611.266-.266.59-.266t.59.266l2.954 2.955q.404.405.404.942 0 .539-.404.943L10.97 24.23a.85.85 0 0 1-.569.254q-.334.021-.61-.254-.267-.267-.271-.585-.005-.319.261-.595zm18.006 0 1.885 1.884q.234.234.25.569t-.26.61q-.266.267-.59.267t-.59-.266l-2.954-2.955a1.3 1.3 0 0 1-.404-.943q0-.538.404-.942l2.955-2.955a.85.85 0 0 1 .568-.255q.336-.021.611.255.267.265.271.585.004.318-.261.594L29.67 19.5h6.83q.357 0 .595.239.239.238.239.594 0 .357-.24.595a.8.8 0 0 1-.594.239zm-9.003.8q-.69 0-1.162-.472a1.58 1.58 0 0 1-.473-1.162q0-.69.473-1.161a1.58 1.58 0 0 1 1.162-.473q.69 0 1.162.473.473.472.473 1.161t-.473 1.162a1.58 1.58 0 0 1-1.162.473m-.833-10.637V4.5q0-.355.238-.595a.8.8 0 0 1 .595-.238q.355 0 .595.238.238.24.238.595v6.83l1.885-1.885a.84.84 0 0 1 .569-.25q.335-.015.61.26.267.267.266.59 0 .323-.266.59L21.61 13.59q-.403.404-.942.404t-.943-.404l-2.955-2.955a.85.85 0 0 1-.254-.57q-.021-.333.254-.61.267-.265.585-.27.32-.006.595.26z"></path></svg>)},
        title: "Tailored for Photographers",
        description: "We design websites to showcase your art beautifully, putting your images at the center of the experience"
    },
    {
        id: 2,
        imageUrl() { return (<svg  id="brxe-iemulk" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#202020"><path d="M32.499 35a4.06 4.06 0 0 1-2.644-.937 3.95 3.95 0 0 1-1.424-2.396h-9.266q-2.43 0-4.13-1.702-1.703-1.702-1.703-4.132t1.702-4.13Q16.737 20 19.165 20H22.5q1.718 0 2.942-1.226t1.224-2.947-1.224-2.94-2.942-1.22h-9.266a4 4 0 0 1-1.428 2.396 4.04 4.04 0 0 1-2.64.937q-1.735 0-2.95-1.214T5 10.837t1.215-2.952 2.951-1.218q1.497 0 2.64.937A4 4 0 0 1 13.233 10h9.266q2.43 0 4.131 1.702t1.702 4.131-1.702 4.132q-1.703 1.701-4.131 1.702h-3.334q-1.718 0-2.942 1.226t-1.224 2.947q0 1.72 1.224 2.94T19.165 30h9.266q.285-1.457 1.428-2.396a4.04 4.04 0 0 1 2.64-.937q1.736 0 2.951 1.214t1.215 2.949-1.215 2.952T32.499 35M9.165 13.333q1.029 0 1.765-.735.735-.735.735-1.765 0-1.028-.735-1.764a2.4 2.4 0 0 0-1.765-.736q-1.028 0-1.764.736a2.4 2.4 0 0 0-.736 1.764q0 1.029.736 1.765.736.735 1.764.735"></path></svg>)},
        title: "Custom Designs That Convert",
        description: "Designs are not only visually stunning but also optimized to capture leads and turn visitors into clients"
    },
    {
        id: 3,
        imageUrl() { return (<svg  id="brxe-qmpmuu" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#202020"><path d="M21.501 29.337v6.83q0 .356-.238.594a.8.8 0 0 1-.595.239.8.8 0 0 1-.595-.239.8.8 0 0 1-.238-.594v-6.83L17.95 31.22a.84.84 0 0 1-.569.25q-.335.016-.61-.26-.267-.265-.266-.59 0-.323.265-.589l2.955-2.955q.405-.404.943-.404t.942.404l2.955 2.955q.234.234.255.569t-.255.61q-.265.267-.585.272-.318.005-.594-.262zm-9.836-8.17h-6.83a.8.8 0 0 1-.595-.24.8.8 0 0 1-.239-.594q0-.355.24-.594a.8.8 0 0 1 .594-.239h6.83L9.78 17.615a.84.84 0 0 1-.25-.568q-.015-.336.26-.611.266-.266.59-.266t.59.266l2.954 2.955q.404.405.404.942 0 .539-.404.943L10.97 24.23a.85.85 0 0 1-.569.254q-.334.021-.61-.254-.267-.267-.271-.585-.005-.319.261-.595zm18.006 0 1.885 1.884q.234.234.25.569t-.26.61q-.266.267-.59.267t-.59-.266l-2.954-2.955a1.3 1.3 0 0 1-.404-.943q0-.538.404-.942l2.955-2.955a.85.85 0 0 1 .568-.255q.336-.021.611.255.267.265.271.585.004.318-.261.594L29.67 19.5h6.83q.357 0 .595.239.239.238.239.594 0 .357-.24.595a.8.8 0 0 1-.594.239zm-9.003.8q-.69 0-1.162-.472a1.58 1.58 0 0 1-.473-1.162q0-.69.473-1.161a1.58 1.58 0 0 1 1.162-.473q.69 0 1.162.473.473.472.473 1.161t-.473 1.162a1.58 1.58 0 0 1-1.162.473m-.833-10.637V4.5q0-.355.238-.595a.8.8 0 0 1 .595-.238q.355 0 .595.238.238.24.238.595v6.83l1.885-1.885a.84.84 0 0 1 .569-.25q.335-.015.61.26.267.267.266.59 0 .323-.266.59L21.61 13.59q-.403.404-.942.404t-.943-.404l-2.955-2.955a.85.85 0 0 1-.254-.57q-.021-.333.254-.61.267-.265.585-.27.32-.006.595.26z"></path></svg>)},
        title: "All-in-One Solution",
        description: "From design and hosting to SEO and marketing, we handle everything for you"
    }
];

const galleries: galleryType[] = [
    {
        id: 1,
        imageUrl: "https://photowebdesigns.com/wp-content/uploads/2025/03/gallery1.jpg",
        title: "Sunset Over Mountains",
        description: "A breathtaking view of the sun setting behind a mountain range."
    },
    {
        id: 2,
        imageUrl: "https://photowebdesigns.com/wp-content/uploads/2025/03/gallery2.jpg",
        title: "City Skyline",
        description: "A stunning capture of a city's skyline during twilight."
    },
    {
        id: 3,
        imageUrl: "https://photowebdesigns.com/wp-content/uploads/2025/03/gallery3.jpg",
        title: "Forest Pathway",
        description: "A serene pathway through a dense forest."
    },
    {
        id: 4,
        imageUrl: "https://photowebdesigns.com/wp-content/uploads/2025/03/gallery4.jpg",
        title: "Ocean Waves",
        description: "Powerful waves crashing onto the shore at sunset."
    },
    {
        id: 5,
        imageUrl: "https://photowebdesigns.com/wp-content/uploads/2025/03/gallery5.jpg",
        title: "Desert Dunes",
        description: "Rolling sand dunes under a clear blue sky."
    },
    {
        id: 6,
        imageUrl: "https://photowebdesigns.com/wp-content/uploads/2025/03/gallery6.jpg",
        title: "Snowy Mountains",
        description: "Majestic mountains covered in snow during winter."
    }
]

const about: aboutType[] = [
    {
        id: 1,
        title: "Our Mission",
        description: "To provide photographers with stunning, functional websites that showcase their work and help them grow their business."
    },
    {
        id: 2,
        title: "Our Vision",
        description: "To be the leading provider of website solutions for photographers worldwide."
    },
    {
        id: 3,
        title: "Our Values",
        description: "Creativity, Quality, Customer Satisfaction, Innovation, Integrity."
    },
    {
        id: 4,
        title: "Our Team",
        description: "A diverse group of web designers, developers, and marketing experts passionate about photography and technology."
    },
    {
        id: 5,
        title: "Our History",
        description: "Founded in 2020, we have quickly grown to serve hundreds of photographers globally with our tailored website solutions."
    },
    {
        id: 6,
        title: "Why Choose Us",
        description: "We understand the unique needs of photographers and offer personalized service, cutting-edge design, and ongoing support to help you succeed online."
    }
]

const blog: blogType[] = [
    {
        id: 1,
        imageUrl: "https://photowebdesigns.com/wp-content/uploads/2025/03/blog1.jpg",
        title: "Top 10 Photography Website Trends in 2025",
        description: "Stay ahead of the curve with the latest trends in photography website design and functionality.",
        date: "2025-03-15",
        path: "/blog/1"
    },
    {
        id: 2,
        imageUrl: "https://photowebdesigns.com/wp-content/uploads/2025/03/blog2.jpg",
        title: "How to Optimize Your Photography Website for SEO",
        description: "Learn effective strategies to improve your website's search engine ranking and attract more visitors.",
        date: "2025-03-10",
        path: "/blog/2"

    },
    {
        id: 3,
        imageUrl: "https://photowebdesigns.com/wp-content/uploads/2025/03/blog3.jpg",
        title: "The Art of Storytelling in Photography",
        description: "Discover how to use storytelling techniques to create compelling and emotionally resonant images.",
        date: "2025-03-05",
        path: "/blog/3"
    }
]

const ask: askType[] = [
    {
        id: 1,
        question: "What services do you offer for photographers?",
        answer: "We offer website development, e-commerce solutions, SEO and marketing services, website maintenance and support, and custom features and integrations tailored for photographers."
    },
    {
        id: 2,
        question: "How long does it take to build a photography website?",
        answer: "The timeline for building a photography website varies depending on the complexity and features required. On average, it takes between 4 to 8 weeks from initial consultation to launch."
    },
    {
        id: 3,
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we offer ongoing maintenance and support packages to ensure your website remains up-to-date, secure, and performing optimally."
    },
    {
        id: 4,
        question: "Can you help with SEO and marketing for my photography website?",
        answer: "Absolutely! We provide comprehensive SEO and marketing services designed to increase your online visibility and attract more clients to your photography business."
    },
    {
        id: 5,
        question: "What makes your services unique for photographers?",
        answer: "We specialize in understanding the unique needs of photographers and offer personalized solutions that highlight their work, enhance user experience, and drive business growth."
    },
    {
        id: 6,
        question: "How do I get started with your services?",
        answer: "Getting started is easy! Simply contact us through our website to schedule a consultation, and we'll discuss your needs and how we can help you achieve your goals."
    }
]

const NavLink = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
]

const listhozontale = [
    {
        id: 1,
        icon: Hand,
        title: "We Create For The Pros",
    },
    {
        id: 2,
        icon: Laptop,
        title: "We Create For The Pros",
    }, {
        id: 3,
        icon: Trophy,
        title: "We Create For The Pros",
    }, {
        id: 4,
        icon: Star,
        title: "We Create For The Pros",
    }, {
        id: 5,
        icon: SearchCheck,
        title: "We Create For The Pros",
    }
]

export { service, partern, galleries, about, blog, ask, NavLink, listhozontale };