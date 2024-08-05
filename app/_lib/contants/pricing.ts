const consulting = {
  title: 'Consulting',
  items: [
    'Initial Consultation',
    'Strategy Development',
    'Implementation Support',
    'Review and Optimization',
    'Ongoing Advisory',
  ],
};

const digitalStrategy = {
  title: 'Digital Strategy',
  items: [
    'Market Research and Competitor Analysis',
    'Social Media Marketing & Advertising',
    'Email Campaigns',
    'Content Strategy',
  ],
};

const marketingWebsites = {
  title: 'Marketing Websites',
  items: [
    'Custom Website Design',
    'Website Development',
    'SEO Strategy Implementation',
  ],
};

const webApplications = {
  title: 'Web Applications',
  items: [
    'Requirement Analysis',
    'UI/UX Design and Prototyping',
    'Full-Scale Development and Deployment',
  ],
};

const brandPackages = {
  title: 'Brand Packages',
  items: [
    'Logo Design',
    'Color Schemes',
    'Typography',
    'Comprehensive Brand Guidelines',
  ],
};

const uxDesign = {
  title: 'UX Design',
  items: ['User Research', 'Wireframing', 'UI Design', 'Usability Testing'],
};

export const pricing = [
  {
    title: 'Premium',
    price: '$1,999',
    description: 'Perfect for passion projects & simple websites.',
    services: [marketingWebsites, brandPackages],
    benefits: [
      '24/5 Customer Support',
      'Responsive Design for All Devices',
      'SEO-Optimized Content',
      'Consistent Brand Identity',
      'Detailed Market Analysis',
      'Onboarding Support',
      'Share & Review Links',
      'Unlimited Revisions',
    ],
  },
  {
    title: 'Pro',
    price: '$2,599',
    description: 'For businesses looking to grow and expand their reach.',
    cta: 'Get started with:',
    services: [marketingWebsites, brandPackages, digitalStrategy, consulting],
    benefits: [
      '24/5 Customer Support',
      'Responsive Design for All Devices',
      'SEO-Optimized Content',
      'Scalable Web Solutions',
      'Enhanced Security and Data Protection',
      'Comprehensive Market Analysis',
      'Detailed Performance Reports',
      'Onboarding Support',
      'Slack Collaboration',
      'Share & Review Links',
      'Unlimited Revisions',
    ],
  },
  {
    title: 'Max',
    price: 'Custom',
    description: 'For large-scale enterprises and complex applications.',
    services: [
      marketingWebsites,
      brandPackages,
      uxDesign,
      webApplications,
      digitalStrategy,
      consulting,
    ],
    benefits: [
      '24/5 Customer Support',
      'Responsive Design for All Devices',
      'SEO-Optimized Content',
      'Custom and Scalable Web Solutions',
      'Enhanced Security and Data Protection',
      'Consistent Brand Identity',
      'Comprehensive Market Analysis',
      'Data-Driven Campaigns',
      'Detailed Performance Reports',
      'User-Centered Design Approach',
      'Expert Consulting and Advisory',
      'Onboarding Support',
      'Slack Collaboration',
      'Share & Review Links',
      'Unlimited Revisions',
      'High Volume Support',
      'Book a Call',
    ],
  },
];
