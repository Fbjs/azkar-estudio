import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Empresa',
      links: [
        {
          text: '¿Quiénes somos?',
          href: getPermalink('/about#quienes-somos'),
        },
        {
          text: 'Visión y Misión',
          href: getPermalink('/about#vision-mision'),
        },
        {
          text: '¿Dónde trabajamos?',
          href: getPermalink('/about#ubicacion'),
        },
      ],
    },
    {
      text: 'Servicios',
      links: [
        {
          text: 'Mantención preventiva',
          href: getPermalink('/services/mantencion-preventiva'),
        },
        {
          text: 'Servicio spot en terreno',
          href: getPermalink('/services/servicio-spot'),
        },
        {
          text: 'Automatización de equipos',
          href: getPermalink('/services/automatizacion'),
        },
        {
          text: 'Scanner y programación de motores',
          href: getPermalink('/services/scanner-programacion'),
        },
        {
          text: 'Frenos y revisión técnica',
          href: getPermalink('/services/frenos-revision'),
        },
        {
          text: 'Calibración de blowers',
          href: getPermalink('/services/calibracion-blowers'),
        },
        {
          text: 'Ajuste hidráulico y eléctrico',
          href: getPermalink('/services/ajuste-hidraulico-electrico'),
        },
        {
          text: 'Remontaje de equipos',
          href: getPermalink('/services/remontaje'),
        },
      ],
    },
    {
      text: 'Especialidades',
      links: [
        {
          text: 'Equipos',
          href: getPermalink('/specialties/equipos'),
        },
        {
          text: 'Técnicas',
          href: getPermalink('/specialties/tecnicas'),
        },
      ],
    },
    {
      text: 'Repuestos',
      href: getPermalink('/repuestos'),
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Servicios',
      links: [
        {
          text: 'Mantención preventiva',
          href: getPermalink('/services/mantencion-preventiva'),
        },
        {
          text: 'Servicio spot en terreno',
          href: getPermalink('/services/servicio-spot'),
        },
        {
          text: 'Automatización de equipos',
          href: getPermalink('/services/automatizacion'),
        },
        {
          text: 'Scanner y programación de motores',
          href: getPermalink('/services/scanner-programacion'),
        },
        {
          text: 'Frenos y revisión técnica',
          href: getPermalink('/services/frenos-revision'),
        },
        {
          text: 'Calibración de blowers',
          href: getPermalink('/services/calibracion-blowers'),
        },
      ],
    },
    {
      title: 'Especialidades',
      links: [
        {
          text: 'Equipos',
          href: getPermalink('/specialties/equipos'),
        },
        {
          text: 'Técnicas',
          href: getPermalink('/specialties/tecnicas'),
        },
      ],
    },
    {
      title: 'Repuestos',
      links: [
        {
          text: 'Filtros manga y canastillos',
          href: getPermalink('/repuestos/filtros'),
        },
        {
          text: 'Wika, Hirschmann, Creer, Kruger',
          href: getPermalink('/repuestos/marcas'),
        },
        {
          text: 'Kits mineros y pedidos especiales',
          href: getPermalink('/repuestos/kits-mineros'),
        },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/neighbour-spa/' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/neighbour_spa' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/profile.php?id=100066527478611&mibextid=ZbWKwL' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://neighbour.cl/">Neighbour</a> · All rights reserved.
  `,
};
