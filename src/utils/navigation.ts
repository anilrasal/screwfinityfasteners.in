// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'Products', url: '/products' },
  { name: 'Contact', url: '/contact' },
  { name: 'About Us', url: '/about' },
];
// An array of links for footer
const footerLinks = [
  // {
  //   section: 'Ecosystem',
  //   links: [
  //     { name: 'Documentation', url: '/welcome-to-docs/' },
  //     { name: 'Tools & Equipment', url: '/products' },
  //   ],
  // },
  {
    section: 'Company',
    links: [
      { name: 'About us', url: '/about' },
      { name: 'Blog', url: '/#' },
      { name: 'Careers', url: '#' },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: '#',
  twitter: '#',
  github: '#',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
