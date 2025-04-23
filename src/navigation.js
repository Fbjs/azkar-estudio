import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Nosotros',
      href: '/about',
    },
    {
      text: 'Testimonios',
      href: '/about',
    },
    {
      text: 'Cursos',
      href: '/about',
    },
    {
      text: 'Productos',
      href: '/about',
    },
   
    {
      text: 'Contacto',
      href: getPermalink('/about'),
    },
  ],
};

export const footerData = {
  links: [
  
  ],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/neighbour-spa/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/neighbour_spa' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=100066527478611&mibextid=ZbWKwL' },
  ],
  footNote: `
    2025 Azkar Estudio. Todos los derechos reservados.
  `,
};
