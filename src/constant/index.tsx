import All from "@/assets/All.jpeg";
import Are from "@/assets/Are.jpeg";
import clavier from "@/assets/clavier.jpg";
import clavier1 from "@/assets/clavier1.jpeg";
import Data from "@/assets/Data.jpeg";
import Gens from "@/assets/Gens.jpeg";
import If from "@/assets/If.jpeg";
import Design from "@/assets/image.jpg";
import Keep from "@/assets/Keep.jpeg";
import security from "@/assets/security.jpeg";
import women from "@/assets/Women.jpeg";
import { Hand, Laptop, SearchCheck, Star, Trophy } from "lucide-react";
import type {
  aboutType,
  askType,
  blogType,
  galleryType,
  parteernType,
  serviceType,
} from "../types";

const service: serviceType[] = [
  {
    id: 1,
    imageUrl: If,
    title: "Conception de logiciels de gestion",
    description:
      "Nous concevons des logiciels sur mesure pour automatiser, structurer et optimiser la gestion de votre activité, quel que soit votre secteur.",
    content: [
      "Livraison rapide & agile",
      "Interfaces modernes et intuitives",
      "Solutions 100% adaptées à vos besoins",
    ],
  },
  {
    id: 2,
    imageUrl: Data,
    title: "Cyber sécurité",
    description:
      "Nous protégeons vos systèmes, vos données et votre activité contre les cybermenaces modernes. La sécurité au cœur de votre transformation digitale.",
    content: [
      "Protection des données sensibles",
      "Prévention des attaques et intrusions",
      "Conformité et bonnes pratiques de sécurité",
    ],
  },
  {
    id: 3,
    imageUrl: Design,
    title: "Réseau et sécurité informatique",
    description:
      "Nous concevons et sécurisons des infrastructures réseau performantes, stables et évolutives. Un réseau fiable est la base d’un système informatique efficace.",
    content: [
      "Réseaux performants et sécurisés",
      "Contrôle des accès et du trafic",
      "Haute disponibilité et stabilité",
    ],
  },
  {
    id: 4,
    imageUrl: Keep,
    title: "Développement informatique",
    description:
      "Nous développons des applications web, mobiles et métiers adaptées à vos objectifs. Du concept à la mise en production, nous donnons vie à vos idées.",
    content: [
      "Technologies modernes et robustes",
      "Solutions évolutives et maintenables",
      "Applications web & mobiles",
    ],
  },
  {
    id: 5,
    imageUrl: Are,
    title: "Maintenance informatique",
    description:
      "Nous assurons le bon fonctionnement, la mise à jour et le support de votre système informatique. Moins de pannes, plus de sérénité.",
    content: [
      "Support technique réactif",
      "Mises à jour et optimisation continues",
      "Réduction des interruptions et incidents",
    ],
  },
];

const partern: parteernType[] = [
  {
    id: 1,
    imageUrl() {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="#202020"
        >
          <path d="M21.501 29.337v6.83q0 .356-.238.594a.8.8 0 0 1-.595.239.8.8 0 0 1-.595-.239.8.8 0 0 1-.238-.594v-6.83L17.95 31.22a.84.84 0 0 1-.569.25q-.335.016-.61-.26-.267-.265-.266-.59 0-.323.265-.589l2.955-2.955q.405-.404.943-.404t.942.404l2.955 2.955q.234.234.255.569t-.255.61q-.265.267-.585.272-.318.005-.594-.262zm-9.836-8.17h-6.83a.8.8 0 0 1-.595-.24.8.8 0 0 1-.239-.594q0-.355.24-.594a.8.8 0 0 1 .594-.239h6.83L9.78 17.615a.84.84 0 0 1-.25-.568q-.015-.336.26-.611.266-.266.59-.266t.59.266l2.954 2.955q.404.405.404.942 0 .539-.404.943L10.97 24.23a.85.85 0 0 1-.569.254q-.334.021-.61-.254-.267-.267-.271-.585-.005-.319.261-.595zm18.006 0 1.885 1.884q.234.234.25.569t-.26.61q-.266.267-.59.267t-.59-.266l-2.954-2.955a1.3 1.3 0 0 1-.404-.943q0-.538.404-.942l2.955-2.955a.85.85 0 0 1 .568-.255q.336-.021.611.255.267.265.271.585.004.318-.261.594L29.67 19.5h6.83q.357 0 .595.239.239.238.239.594 0 .357-.24.595a.8.8 0 0 1-.594.239zm-9.003.8q-.69 0-1.162-.472a1.58 1.58 0 0 1-.473-1.162q0-.69.473-1.161a1.58 1.58 0 0 1 1.162-.473q.69 0 1.162.473.473.472.473 1.161t-.473 1.162a1.58 1.58 0 0 1-1.162.473m-.833-10.637V4.5q0-.355.238-.595a.8.8 0 0 1 .595-.238q.355 0 .595.238.238.24.238.595v6.83l1.885-1.885a.84.84 0 0 1 .569-.25q.335-.015.61.26.267.267.266.59 0 .323-.266.59L21.61 13.59q-.403.404-.942.404t-.943-.404l-2.955-2.955a.85.85 0 0 1-.254-.57q-.021-.333.254-.61.267-.265.585-.27.32-.006.595.26z"></path>
        </svg>
      );
    },
    title: "Expertise technique certifiée",
    description:
      "Une équipe d’ingénieurs et de spécialistes IT qualifiés, maîtrisant les technologies modernes et les meilleures pratiques du secteur.",
  },
  {
    id: 2,
    imageUrl() {
      return (
        <svg
          id="brxe-iemulk"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="#202020"
        >
          <path d="M32.499 35a4.06 4.06 0 0 1-2.644-.937 3.95 3.95 0 0 1-1.424-2.396h-9.266q-2.43 0-4.13-1.702-1.703-1.702-1.703-4.132t1.702-4.13Q16.737 20 19.165 20H22.5q1.718 0 2.942-1.226t1.224-2.947-1.224-2.94-2.942-1.22h-9.266a4 4 0 0 1-1.428 2.396 4.04 4.04 0 0 1-2.64.937q-1.735 0-2.95-1.214T5 10.837t1.215-2.952 2.951-1.218q1.497 0 2.64.937A4 4 0 0 1 13.233 10h9.266q2.43 0 4.131 1.702t1.702 4.131-1.702 4.132q-1.703 1.701-4.131 1.702h-3.334q-1.718 0-2.942 1.226t-1.224 2.947q0 1.72 1.224 2.94T19.165 30h9.266q.285-1.457 1.428-2.396a4.04 4.04 0 0 1 2.64-.937q1.736 0 2.951 1.214t1.215 2.949-1.215 2.952T32.499 35M9.165 13.333q1.029 0 1.765-.735.735-.735.735-1.765 0-1.028-.735-1.764a2.4 2.4 0 0 0-1.765-.736q-1.028 0-1.764.736a2.4 2.4 0 0 0-.736 1.764q0 1.029.736 1.765.736.735 1.764.735"></path>
        </svg>
      );
    },
    title: "Solutions sur-mesure adaptées à vos besoins",
    description:
      "Chaque projet est étudié et conçu en fonction de la réalité et des objectifs spécifiques de votre entreprise.",
  },
  {
    id: 3,
    imageUrl() {
      return (
        <svg
          id="brxe-qmpmuu"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="#202020"
        >
          <path d="M21.501 29.337v6.83q0 .356-.238.594a.8.8 0 0 1-.595.239.8.8 0 0 1-.595-.239.8.8 0 0 1-.238-.594v-6.83L17.95 31.22a.84.84 0 0 1-.569.25q-.335.016-.61-.26-.267-.265-.266-.59 0-.323.265-.589l2.955-2.955q.405-.404.943-.404t.942.404l2.955 2.955q.234.234.255.569t-.255.61q-.265.267-.585.272-.318.005-.594-.262zm-9.836-8.17h-6.83a.8.8 0 0 1-.595-.24.8.8 0 0 1-.239-.594q0-.355.24-.594a.8.8 0 0 1 .594-.239h6.83L9.78 17.615a.84.84 0 0 1-.25-.568q-.015-.336.26-.611.266-.266.59-.266t.59.266l2.954 2.955q.404.405.404.942 0 .539-.404.943L10.97 24.23a.85.85 0 0 1-.569.254q-.334.021-.61-.254-.267-.267-.271-.585-.005-.319.261-.595zm18.006 0 1.885 1.884q.234.234.25.569t-.26.61q-.266.267-.59.267t-.59-.266l-2.954-2.955a1.3 1.3 0 0 1-.404-.943q0-.538.404-.942l2.955-2.955a.85.85 0 0 1 .568-.255q.336-.021.611.255.267.265.271.585.004.318-.261.594L29.67 19.5h6.83q.357 0 .595.239.239.238.239.594 0 .357-.24.595a.8.8 0 0 1-.594.239zm-9.003.8q-.69 0-1.162-.472a1.58 1.58 0 0 1-.473-1.162q0-.69.473-1.161a1.58 1.58 0 0 1 1.162-.473q.69 0 1.162.473.473.472.473 1.161t-.473 1.162a1.58 1.58 0 0 1-1.162.473m-.833-10.637V4.5q0-.355.238-.595a.8.8 0 0 1 .595-.238q.355 0 .595.238.238.24.238.595v6.83l1.885-1.885a.84.84 0 0 1 .569-.25q.335-.015.61.26.267.267.266.59 0 .323-.266.59L21.61 13.59q-.403.404-.942.404t-.943-.404l-2.955-2.955a.85.85 0 0 1-.254-.57q-.021-.333.254-.61.267-.265.585-.27.32-.006.595.26z"></path>
        </svg>
      );
    },
    title: "Engagement qualité, fiabilité et performance",
    description:
      "Nos services sont conçus pour garantir stabilité, sécurité, efficacité et continuité d’activité.",
  },
];

const galleries: galleryType[] = [
  {
    id: 1,
    imageUrl: clavier,
    title: "Solutions Digitales & Développement",
    description:
      "A breathtaking view of the sun setting behind a mountain range.",
  },
  {
    id: 2,
    imageUrl: clavier1,
    title: "Infrastructure & Systèmes Informatiques",
    description: "A stunning capture of a city's skyline during twilight.",
  },
  {
    id: 3,
    imageUrl: security,
    title: "Cybersécurité & Protection des Données",
    description: "A serene pathway through a dense forest.",
  },
  {
    id: 4,
    imageUrl: women,
    title: "Cloud Computing & Hébergement",
    description: "Powerful waves crashing onto the shore at sunset.",
  },
  {
    id: 5,
    imageUrl: Gens,
    title: "Transformation Digitale & Conseil IT",
    description: "Rolling sand dunes under a clear blue sky.",
  },
  {
    id: 6,
    imageUrl: All,
    title: "Solutions Spécialisées",
    description: "Majestic mountains covered in snow during winter.",
  },
];

const about: aboutType[] = [
  {
    id: 1,
    title: "Notre Mission",
    description:
      "To provide photographers with stunning, functional websites that showcase their work and help them grow their business.",
  },
  {
    id: 2,
    title: "Notre Vision",
    description:
      "To be the leading provider of website solutions for photographers worldwide.",
  },
  {
    id: 3,
    title: "Nos Valeurs",
    description:
      "Creativity, Quality, Customer Satisfaction, Innovation, Integrity.",
  },
  {
    id: 4,
    title: "Notre Équipe",
    description:
      "A diverse group of web designers, developers, and marketing experts passionate about photography and technology.",
  },
  {
    id: 5,
    title: "Notre Histoire",
    description:
      "Founded in 2020, we have quickly grown to serve hundreds of photographers globally with our tailored website solutions.",
  },
  {
    id: 6,
    title: "Pourquoi Nous Choisir ?",
    description:
      "We understand the unique needs of photographers and offer personalized service, cutting-edge design, and ongoing support to help you succeed online.",
  },
];

const blog: blogType[] = [
  {
    id: 1,
    imageUrl:
      "https://photowebdesigns.com/wp-content/uploads/2025/03/blog1.jpg",
    title: "Top 10 Photography Website Trends in 2025",
    description:
      "Stay ahead of the curve with the latest trends in photography website design and functionality.",
    date: "2025-03-15",
    path: "/blog/1",
  },
  {
    id: 2,
    imageUrl:
      "https://photowebdesigns.com/wp-content/uploads/2025/03/blog2.jpg",
    title: "How to Optimize Your Photography Website for SEO",
    description:
      "Learn effective strategies to improve your website's search engine ranking and attract more visitors.",
    date: "2025-03-10",
    path: "/blog/2",
  },
  {
    id: 3,
    imageUrl:
      "https://photowebdesigns.com/wp-content/uploads/2025/03/blog3.jpg",
    title: "The Art of Storytelling in Photography",
    description:
      "Discover how to use storytelling techniques to create compelling and emotionally resonant images.",
    date: "2025-03-05",
    path: "/blog/3",
  },
];

const ask: askType[] = [
  {
    id: 1,
    question: "Quels types de services informatiques proposez-vous ?",
    answer:
      "Nous proposons des services complets en informatique : développement de logiciels, cybersécurité, réseaux, maintenance et solutions digitales sur mesure, adaptés aux besoins des entreprises.",
  },
  {
    id: 2,
    question:
      "Travaillez-vous avec les PME ou uniquement les grandes entreprises ?",
    answer:
      "Nous travaillons aussi bien avec les PME, startups que les grandes entreprises, en proposant des solutions flexibles et évolutives selon la taille et les objectifs du client.",
  },
  {
    id: 3,
    question: "Proposez-vous des solutions sur mesure ?",
    answer:
      "Oui. Chaque projet est étudié spécifiquement afin de concevoir une solution personnalisée, parfaitement adaptée à vos contraintes techniques et métier.",
  },
  {
    id: 4,
    question: "Comment garantissez-vous la sécurité des données ?",
    answer:
      "Nous appliquons les meilleures pratiques en cybersécurité : protection des accès, sécurisation des réseaux, sauvegardes régulières et respect des normes de sécurité en vigueur.",
  },
  {
    id: 5,
    question:
      "Assurez-vous la maintenance et le support après livraison ?",
    answer:
      "Absolument. Nous assurons la maintenance, les mises à jour et un support technique réactif afin de garantir la continuité et la performance de vos systèmes.",
  },
  {
    id: 6,
    question: "Comment démarrer un projet avec votre équipe ?",
    answer:
      "Il vous suffit de nous contacter via le formulaire du site ou par téléphone. Nous analysons vos besoins et vous proposons rapidement une solution adaptée.",
  },
];

const NavLink = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

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
  },
  {
    id: 3,
    icon: Trophy,
    title: "We Create For The Pros",
  },
  {
    id: 4,
    icon: Star,
    title: "We Create For The Pros",
  },
  {
    id: 5,
    icon: SearchCheck,
    title: "We Create For The Pros",
  },
];

export {
  about,
  ask,
  blog,
  galleries,
  listhozontale,
  NavLink,
  partern,
  service,
};
