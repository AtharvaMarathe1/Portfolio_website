import { useEffect } from 'react';

/* ═══════════════════════════════════════════════════════════
   SHARED DATA
═══════════════════════════════════════════════════════════ */
export const DATA = {
  name: 'Atharva Marathe',
  initials: 'AM',
  title: 'Full Stack Developer',
  subtitle: 'General Engineer Trainee @ TCS | Spring Boot · React · AWS',
  email: 'apmarathe10@gmail.com',
  phone: '+91 8329632714',
  github: 'https://github.com/AtharvaMarathe1',
  dob: '12 Sep 2003',
  location: 'Mumbai, India',

  experience: [
    {
      role: 'General Engineer Trainee',
      company: 'Tata Consultancy Services (TCS) · Mumbai, India',
      date: 'Nov 2025 – Present',
      icon: '🏢',
      bullets: ['Working on Spring Boot and Linux-based enterprise solutions'],
    },
    {
      role: 'Full Stack Development & AI Integration Intern',
      company: 'Daira Edtech · Pune, India (Remote)',
      date: 'Jun 2025 – Oct 2025',
      icon: '🤖',
      bullets: [
        'Built TensorFlow CNN for handwriting-based learning difficulty and psychology analysis',
        'Applied contrast enhancement and alphabet bounding boxes for feature extraction',
        'Deployed via TFLite and TF.js (React) for cross-platform use',
      ],
    },
  ],

  projects: [
    {
      icon: '📚',
      title: 'Library Management System',
      desc: 'Enterprise-grade library platform built with Spring Boot microservices. Utilises Eureka Server for service registration, Feign Client for inter-service communication, and Angular for a rich, responsive UI.',
      tags: ['Spring Boot', 'Microservices', 'Eureka', 'Feign Client', 'Angular', 'Spring MVC'],
      github: null,
      live: null,
    },
    {
      icon: '🎮',
      title: 'AWS Cloud-Based Tic Tac Toe',
      desc: 'React application with full game logic, component-based architecture, and state management. Deployed via AWS S3 static hosting. Backend expansion underway with AWS Lambda & DynamoDB for multiplayer state sync.',
      tags: ['React', 'AWS S3', 'AWS Lambda', 'DynamoDB', 'Serverless'],
      github: 'https://github.com/AtharvaMarathe1/tictac',
      live: null,
    },
    {
      icon: '🌤️',
      title: 'Weather App',
      desc: 'Real-time weather application built in JavaScript that fetches live weather data from external APIs, displaying temperature, humidity, and conditions for any location worldwide.',
      tags: ['JavaScript', 'REST API', 'HTML/CSS'],
      github: 'https://github.com/AtharvaMarathe1/Weather',
      live: null,
    },
    {
      icon: '🔗',
      title: 'URL Shortener',
      desc: 'A lightweight URL shortening service built with JavaScript. Converts long URLs into short, shareable links while tracking usage statistics.',
      tags: ['JavaScript', 'Node.js', 'REST API'],
      github: 'https://github.com/AtharvaMarathe1/URL-shortner',
      live: null,
    },
  ],

  skills: [
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      tags: ['AWS S3', 'AWS Lambda', 'DynamoDB', 'EC2', 'Google Cloud'],
    },
    {
      icon: '⚙️',
      title: 'Backend',
      tags: ['Spring Boot', 'Spring MVC', 'Microservices', 'REST API', 'Feign Client', 'Eureka', 'Linux'],
    },
    {
      icon: '🎨',
      title: 'Frontend',
      tags: ['React', 'Angular', 'HTML5', 'CSS3', 'TF.js'],
    },
    {
      icon: '🤖',
      title: 'AI / ML',
      tags: ['TensorFlow', 'TFLite', 'PyTorch', 'CUDA', 'CNN'],
    },
    {
      icon: '🛠️',
      title: 'Tools & Others',
      tags: ['Git', 'Video Editing', 'Adobe Premiere Pro', 'Adobe After Effects'],
    },
    {
      icon: '🌐',
      title: 'Languages',
      tags: ['English', 'German', 'Hindi', 'Marathi'],
    },
  ],

  certifications: [
    { icon: '🏆', name: 'AWS Certified Solutions Architect – Associate', issuer: 'Amazon Web Services', link: 'AWS Certified Solutions Architect - Associate certificate.pdf' },
    { icon: '☁️', name: 'Google Cloud Computing Foundation', issuer: 'Google Cloud', link: '#' },
    { icon: '🌐', name: 'Web-Verse: Web Development and Design', issuer: 'Android Club, VIT Chennai', link: null },
    { icon: '🔐', name: 'Ethical Hacking', issuer: 'NPTEL', link: "C:/Users/athar/Downloads/AtharvaSSCCertificate.jpg" },
  ],

  education: [
    {
      degree: 'BTech in Computer Science Engineering',
      school: 'Vellore Institute of Technology',
      score: 'CGPA: 8.15',
      year: '2021 – 2025 · Chennai',
    },
    {
      degree: 'Higher Secondary Education (12th)',
      school: 'Maharashtra State Board',
      score: '88.00%',
      year: '2021 · Pune',
    },
    {
      degree: 'Secondary Education (10th)',
      school: 'Maharashtra State Board',
      score: '84.40%',
      year: '2019 · Pune',
    },
  ],
};

/* ═══════════════════════════════════════════════════════════
   HOOK: Scroll Reveal
═══════════════════════════════════════════════════════════ */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          // If the element is visible, or it's very close (like on a short page)
          if (e.isIntersecting || e.intersectionRatio > 0) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Give React a tick to mount elements
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        // Also manually check if it's already in viewport to be safe
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });
    }, 100);

    // Scroll to top on mount for new pages
    window.scrollTo(0, 0);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);
}
