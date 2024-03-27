'use client'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { HeroParallax } from '@/components/ui/hero-parallax'
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal'
import Image from 'next/image'
import RadarComponent from './radar/RadarComponent'
import PescaFuriosaImg from '@/public/img/pesca-furiosa.png'
import LeninGptImg from '@/public/img/lenin-gpt.png'
import TovariXImg from '@/public/img/tovarix.png'
import Profile from './Profile'
import BrandBanner from './BrandBanner'
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card'
import Link from 'next/link'
import { Globe } from './Globe'

export default function Landing() {
  const projects = [
    {
      icon: 'mdi:react',
      title: 'React.js',
      description:
        'Proficiente em desenvolvimento de aplicações web utiliando React.js e Next.js.',
      link: 'https://stripe.com',
    },
    {
      icon: 'mdi:vuejs',
      title: 'Vue.js',
      description:
        'Proviciente em desenvolvimento de aplicações web utiliando Vue.js e Nuxt.js.',
      link: 'https://stripe.com',
    },
    {
      icon: 'mdi:nodejs',
      title: 'Node.js',
      description:
        'Proviciente em desenvolvimento de aplicações web utiliando Node.js e Express.js.',
      link: 'https://stripe.com',
    },
    {
      icon: 'mdi:database',
      title: 'Banco de dados',
      description:
        'Proviciente em desenvolvimento de aplicações web utiliando bancos de dados SQL e NoSQL.',
      link: 'https://stripe.com',
    },
    {
      icon: 'mdi:cloud',
      title: 'Cloud Computing',
      description:
        'Proviciente em desenvolvimento de aplicações web utiliando serviços de cloud computing.',
      link: 'https://stripe.com',
    },
    {
      icon: 'mdi:git',
      title: 'Controle de versão',
      description:
        'Proviciente em desenvolvimento de aplicações web utiliando controle de versão com Git.',
      link: 'https://stripe.com',
    },
  ]

  const products = [
    {
      title: 'Lenin GPT',
      link: '#projetos/lenin-gpt',
      thumbnail: LeninGptImg,
    },
    {
      title: 'TovariX - Assistente Geral',
      link: 'https://tovarix.vercel.app',
      thumbnail: TovariXImg,
    },
    {
      title: 'Pesca Furiosa',
      link: 'https://pesca-furiosa.vercel.app',
      thumbnail: PescaFuriosaImg,
    },
    {
      title: 'Marvel Dashboard',
      link: 'https://marvel-dashboard.vercel.app',
      thumbnail:
        'https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png',
    },
  ]

  const companies = [
    {
      title: 'Lenin GPT',
      link: '#projetos/lenin-gpt',
      thumbnail: LeninGptImg,
    },
    {
      title: 'TovariX - Assistente Geral',
      link: 'https://tovarix.vercel.app',
      thumbnail: TovariXImg,
    },
    {
      title: 'Pesca Furiosa',
      link: 'https://pesca-furiosa.vercel.app',
      thumbnail: PescaFuriosaImg,
    },
    {
      title: 'Marvel Dashboard',
      link: 'https://marvel-dashboard.vercel.app',
      thumbnail:
        'https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png',
    },
  ]

  const content = [
    {
      title: 'Lenin GPT',
      href: 'lenin-gpt',
      techs: [
        { icon: 'mdi:vuejs', name: 'Vue 3' },
        { icon: 'mdi:nuxt', name: 'Nuxt 3' },
        { icon: 'mdi:head-snowflake-outline', name: 'OpenAI' },
        { icon: 'mdi:tailwind', name: 'TailwindCSS' },
      ],
      description:
        'LeninGPT é um chatbot usando o ChatGPT da OpenAI. Ele é capaz de responder perguntas, fazer traduções, gerar textos e muito mais. LeninGPT é a solução perfeita para quem quer ter um assistente pessoal inteligente e eficiente. LeninGPT é o exemplo de solução perfeita para quem quer ter um assistente pessoal inteligente e eficiente.',
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image
            src={LeninGptImg}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: 'TovariX',
      href: 'tovarix',
      techs: [
        { icon: 'mdi:react', name: 'React.js' },
        { icon: 'mdi:head-snowflake-outline', name: 'OpenAI' },
        { icon: 'mdi:tailwind', name: 'TailwindCSS' },
        { icon: 'mdi:nodejs', name: 'NodeJS' },
        { icon: 'mdi:api', name: 'NestJS' },
        { icon: 'mdi:api', name: 'Prisma ORM' },
      ],
      description:
        'TovariX é uma plataforma feita para ajudar você a gerenciar suas finanças de forma simples e eficiente. Com TovariX, você pode controlar suas despesas, fazer orçamentos, planejar investimentos e muito mais. TovariX é a solução perfeita para quem quer ter controle total sobre suas finanças. TovariX é a solução perfeita para quem quer ter controle total sobre suas finanças.',
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={TovariXImg}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: 'Pesca Furiosa',
      href: 'pesca-furiosa',
      techs: [
        { icon: 'mdi:vuejs', name: 'Vue 3' },
        { icon: 'mdi:nuxt', name: 'Nuxt 3' },
        { icon: 'mdi:tailwind', name: 'TailwindCSS' },
        { icon: 'mdi:graphql', name: 'GraphQL' },
        { icon: 'logos:datocms', name: 'DatoCMS' },
      ],
      description:
        'Pesca Furiosa é um e-commerce conectado com um CMS, sendo possível conectar no Mercado Livre e Mercado Pago. Construido usando Nuxt 3 e GraphQL, em conjunto do DatoCMS. Utiliza TailwindCSS para estilização de compontes.',
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={PescaFuriosaImg}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: 'Novidades em breve...',
      description: '',
    },
  ]

  return (
    <div>
      <BackgroundBeams />
      <BrandBanner />
      <Profile />
      <HoverEffect items={projects} />
      <HeroParallax
        title="Projetos"
        description="Conheça alguns projetos que já desenvolvi."
        products={products}
      />
      <StickyScroll id="projetos" content={content} />
      <Globe />
      <HeroParallax
        title="Empresas que já trabalhei"
        description="Conheça algumas empresas que já tive a oportunidade de trabalhar."
        products={companies}
      />
      <RadarComponent />
    </div>
  )
}
