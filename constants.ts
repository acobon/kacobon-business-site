
import type { Service, Testimonial, OwnerProfile } from './types';
import { WebDesignIcon, WebHostingIcon, OnlineServicesIcon, DigitalMarketingIcon } from './components/Icons';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services',
    submenu: [
      { name: 'Website Design', path: '/services/website-design' },
      { name: 'Website Hosting', path: '/services/website-hosting' },
      { name: 'Online Services', path: '/services/online-services' },
      { name: 'Digital Marketing', path: '/services/digital-marketing' },
    ]
  },
  { name: 'Contact', path: '/contact' }
];

export const SERVICES: Service[] = [
  {
    path: '/services/website-design',
    title: 'Website Design',
    tagline: 'Stunning, Responsive Website Design in Indianapolis',
    icon: WebDesignIcon,
    description: 'We create beautiful, modern, and fully responsive websites that captivate your audience and convert visitors into customers. Our designs are not only visually appealing but also built on a foundation of user experience (UX) and search engine optimization (SEO) best practices, ensuring your business stands out in Indianapolis and beyond.',
    benefits: [
      'Mobile-first, responsive designs for all devices.',
      'User-centric approach focusing on intuitive navigation.',
      'SEO-optimized structure to improve search rankings.',
      'Custom graphics and branding to reflect your unique identity.',
      'Accessible (WCAG 2.1 AA) designs for all users.'
    ],
    metaTitle: 'Website Design Indianapolis | KA Cobon Digital Marketing',
    metaDescription: 'Expert website design services in Indianapolis. We build responsive, SEO-friendly, and accessible websites that drive growth for local and global businesses.'
  },
  {
    path: '/services/website-hosting',
    title: 'Website Hosting',
    tagline: 'Reliable & Secure Website Hosting for Indianapolis Businesses',
    icon: WebHostingIcon,
    description: 'A great website needs a great home. We provide fast, secure, and reliable website hosting solutions tailored for businesses of all sizes. With 99.9% uptime, regular backups, and dedicated support, you can have peace of mind knowing your digital presence is in safe hands.',
    benefits: [
      'High-speed servers for faster load times.',
      'Robust security features, including SSL certificates.',
      'Daily backups to protect your valuable data.',
      'Scalable solutions that grow with your business.',
      'Personalized support from our Indianapolis-based team.'
    ],
    metaTitle: 'Website Hosting Indianapolis | Secure & Fast | KA Cobon Digital',
    metaDescription: 'Secure, fast, and reliable website hosting services in Indianapolis. Our hosting solutions offer 99.9% uptime and dedicated support to keep your site running smoothly.'
  },
  {
    path: '/services/online-services',
    title: 'Online Services',
    tagline: 'Integrated Online Services to Streamline Your Business',
    icon: OnlineServicesIcon,
    description: 'Beyond a website, we offer a suite of online services to enhance your operations. From Customer Relationship Management (CRM) integration to e-commerce solutions and business consultancy, we help you leverage technology to improve efficiency and customer engagement.',
    benefits: [
      'CRM integration to manage customer relationships effectively.',
      'E-commerce setup and management.',
      'Email marketing campaign setup and automation.',
      'Business process consultancy to optimize workflows.',
      'Analytics and reporting to track performance.'
    ],
    metaTitle: 'CRM & Online Services Indianapolis | KA Cobon Digital',
    metaDescription: 'Streamline your business with our online services, including CRM integration, e-commerce solutions, and business consultancy in Indianapolis.'
  },
  {
    path: '/services/digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Results-Driven Digital Marketing in Indianapolis',
    icon: DigitalMarketingIcon,
    description: 'Reach your target audience and grow your business with our comprehensive digital marketing strategies. We specialize in creating data-driven campaigns that increase brand visibility, generate leads, and maximize your return on investment. We serve both local Indianapolis clients and global brands.',
    benefits: [
      'Search Engine Optimization (SEO) to rank higher on Google.',
      'Pay-Per-Click (PPC) advertising campaigns.',
      'Social media management and content creation.',
      'Content marketing that establishes you as an industry leader.',
      'In-depth analytics and performance reporting.'
    ],
    metaTitle: 'Digital Marketing Indianapolis | SEO & PPC Experts | KA Cobon',
    metaDescription: 'Comprehensive digital marketing services in Indianapolis. We specialize in SEO, PPC, social media, and content marketing to help your business grow.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "KA Cobon Digital transformed our online presence. Their expertise in digital marketing and web design is unmatched in Indianapolis. As a fellow local business, we couldn't be happier.",
    author: 'Jamie P.',
    company: 'Indy Cafe & Market'
  },
  {
    quote: "Working with Adrian and Kory was a dream. They understood our global brand's needs and delivered a comprehensive strategy that exceeded all expectations. Their progressive and inclusive approach is a breath of fresh air.",
    author: 'Carlos G.',
    company: 'Global Tech Solutions'
  },
  {
    quote: "The CRM integration Kory's team implemented streamlined our entire sales process. Their business consultancy is top-notch. Highly recommend!",
    author: 'Samantha R.',
    company: 'Midwest Realty Group'
  }
];

export const OWNER_PROFILES: OwnerProfile[] = [
  {
    name: "Adrian Cobon",
    title: "Co-Founder & Marketing Strategist",
    imageUrl: "https://picsum.photos/seed/adriancobon/400/400",
    bio: [
      "With a passion for creative storytelling and data-driven results, Adrian has led global marketing campaigns for some of the world's most recognized brands. His expertise lies in crafting compelling narratives that resonate across diverse cultures and markets.",
      "Adrian believes in marketing with a purpose, focusing on strategies that not only drive growth but also foster positive community engagement. He is dedicated to helping businesses, both large and small, find their authentic voice."
    ],
    expertise: ["Global Marketing Campaigns", "Brand Strategy", "Content Marketing", "PPC Advertising"]
  },
  {
    name: "Kory Cobon",
    title: "Co-Founder & Business Operations Expert",
    imageUrl: "https://picsum.photos/seed/korycobon/400/400",
    bio: [
      "Kory has been immersed in the world of business management since his teens. A natural leader and problem-solver, he excels at optimizing operations and building lasting customer relationships. His deep knowledge of CRM systems helps clients streamline their processes and enhance customer satisfaction.",
      "Kory is committed to building a business that reflects his values of integrity, efficiency, and inclusivity. He provides the structural and operational backbone that allows KA Cobon Digital's creative strategies to flourish."
    ],
    expertise: ["Business Management", "CRM Integration", "Client Relationship Management", "Operational Efficiency"]
  }
]
