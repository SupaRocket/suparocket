export const routes = [
  {
    name: 'Pricing',
    path: '/pricing',
    order: 1,
    isMenu: false,
  },
  {
    name: 'Services',
    path: '/services',
    order: 2,
    isMenu: true,
    menuItems: [
      {
        name: 'Marketing Websites',
        path: '/services/marketing-websites',
        order: 1,
      },
      {
        name: 'Web Applications',
        path: '/services/web-applications',
        order: 2,
      },
      {
        name: 'Brand Packages',
        path: '/services/brand-packages',
        order: 3,
      },
      {
        name: 'UX Design',
        path: '/services/ux-design',
        order: 4,
      },
      {
        name: 'Consulting',
        path: '/services/consulting',
        order: 5,
      },
    ],
  },
];
