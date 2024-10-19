import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon } from '@/components/icons'

export const NAVBAR_ITEMS = [
  { label: 'Works', href: '/works' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
] as const

export const RECENT_POSTS = [
  {
    id: 1,
    title: 'Making a design system from scratch',
    date: '12 Feb 2020',
    tags: ['Design', 'Pattern'],
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit fugiat cupiditate omnis corrupti reprehenderit saepe itaque quasi. Consectetur architecto provident odit aspernatur expedita molestias. Fugit sit excepturi officiis dolore adipisci.',
  },
  {
    id: 2,
    title: 'Creating pixel perfect icons in Figma',
    date: '14 Mar 2020',
    tags: ['Design', 'Figma'],
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
] as const

export const FEATURED_WORKS = [
  {
    id: 1,
    title: 'Designing Dashboards',
    date: '2020',
    type: 'Dashboard',
    description:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    image: '/images/work-1.png',
  },
  {
    id: 2,
    title: 'Vibrant Portraits of 2020',
    date: '2018',
    type: 'Illustration',
    description:
      'lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit fugiat cupiditate omnis corrupti reprehenderit saepe itaque quasi. Consectetur architecto provident odit aspernatur expedita molestias.',
    image: '/images/work-2.png',
  },
  {
    id: 3,
    title: '36 Days of Malayalam type',
    date: '2018',
    type: 'Typography',
    description:
      'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.',
    image: '/images/work-3.jpg',
  },
] as const

export const SOCIAL_LINKS = [
  {
    id: 1,
    accessiblitityLabel: 'Facebook of someone',
    href: 'https://facebook.com',
    icon: FacebookIcon,
  },
  {
    id: 2,
    accessiblitityLabel: 'Instagram of someone',
    href: 'https://instagram.com',
    icon: InstagramIcon,
  },
  {
    id: 3,
    accessiblitityLabel: 'X of someone',
    href: 'https://instagram.com',
    icon: XIcon,
  },
  {
    id: 4,
    accessiblitityLabel: 'LinkedIn of someone',
    href: 'https://linkedin.com',
    icon: LinkedInIcon,
  },
] as const
