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
import { Globe } from './Globe'
import FFIDImg from '@/public/img/ffidLogo.png'
import NewcoreImg from '@/public/img/newcore.png'
import RedeAncoraImg from '@/public/img/rede-ancora.jpg'
import MarvelDashboardImg from '@/public/img/MarvelDashboard.png'

export default function Landing() {
  const techs = [
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

  const projects = [
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
      thumbnail: RedeAncoraImg,
    },
  ]

  const companies = [
    {
      title: 'Newcore',
      link: 'https://www.newcore.com.br',
      thumbnail: NewcoreImg,
    },
    {
      title: 'FFID',
      link: 'https://www.ffid.com.br',
      thumbnail: FFIDImg,
    },
    {
      title: 'Rede Ancora',
      link: 'https://www.redeancora.com.br',
      thumbnail: RedeAncoraImg,
    },
  ]

  const projectsDetails = [
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
      title: 'Marvel Dashboard',
      href: 'marvel-dashboard',
      techs: [
        { icon: 'mdi:vuejs', name: 'Vue 3' },
        { icon: 'mdi:nuxt', name: 'Nuxt 3' },
        { icon: 'mdi:tailwind', name: 'TailwindCSS' },
      ],
      description:
        'Desenvolva um dashboard dinâmico e interativo utilizando a MarvelAPI como fonte de dados. Explore um vasto universo de personagens, quadrinhos e séries da Marvel, tudo em uma única plataforma. Navegue facilmente pelos heróis e vilões favoritos, descubra as últimas edições de quadrinhos e acompanhe as séries mais emocionantes. Com uma interface intuitiva e visualmente cativante, mergulhe fundo no universo Marvel e mantenha-se atualizado com as últimas novidades e lançamentos.',
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={MarvelDashboardImg}
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

  const companiesDetails = [
    {
      title: 'NEWCORE',
      href: 'https://newcore.com.br/',
      techs: [
        { icon: 'mdi:react', name: 'React.js' },
        { icon: 'mdi:angular', name: 'Angular' },
        { icon: 'mdi:nodejs', name: 'Node.js' },
        { icon: 'file-icons:nestjs', name: 'Nest.js' },
        { icon: 'mdi:database-export-outline', name: 'TypeORM' },
        { icon: 'material-symbols:view-kanban-outline', name: 'Kanban' },
      ],
      description:
        'Na Newcore, uma startup que desenvolve um aplicativo para auxiliar corretores a fechar vendas e captar leads, eu era desenvolvedor responsável por novas ferramentas e correções no CRM e backoffice.',
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          <Image
            src={NewcoreImg}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: 'FFID',
      href: 'https://ffid.com.br/',
      techs: [
        { icon: 'mdi:vuejs', name: 'Vue 2' },
        { icon: 'mdi:nuxt', name: 'Nuxt 3' },
        { icon: 'mdi:tailwind', name: 'TailwindCSS' },
        { icon: 'material-symbols:view-kanban-outline', name: 'Kanban' },
      ],
      description:
        'A FFID é uma plataforma que oferece serviços de disparo de mensagens e outras ferramentas para ajudar empresas a se comunicar com seus clientes. Como desenvolvedor na empresa, minha principal responsabilidade é desenvolver correções e features em todas as plataformas da empresa.',
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={FFIDImg}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: 'Rede Ancora',
      href: 'https://www.redeancora.com.br/',
      techs: [
        { icon: 'mdi:react', name: 'React.js' },
        { icon: 'mdi:language-javascript', name: 'JavaScript Vanilla' },
        { icon: 'mdi:tailwind', name: 'TailwindCSS' },
        { icon: 'mdi:git', name: 'Git' },
        { icon: 'teenyicons:docker-outline', name: 'Docker' },
        { icon: 'material-symbols:view-kanban-outline', name: 'Kanban' },
      ],
      description:
        'A Rede ANCORA possui mais de 20 anos de atuação no mercado de autopeças e, atualmente é conhecida como uma das únicas redes de distribuição para franqueados no Brasil, sendo também uma das maiores distribuidoras do país, com parcerias entre os maiores fabricantes de reposição de autopeças do mundo.',
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src={RedeAncoraImg}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: '',
      description: '',
    },
  ]

  return (
    <div>
      <BackgroundBeams />
      <BrandBanner />
      <Profile />
      <HoverEffect items={techs} />
      <HeroParallax
        id="projetos"
        title="Projetos"
        description="Conheça alguns projetos que já desenvolvi."
        products={projects}
      />
      <StickyScroll id="projetos" content={projectsDetails} />
      <Globe />
      <iframe
        src="https://cert.efset.org/Nf7zLt"
        title="EFSET Certificate"
        width="100%"
        height="728px"
        className="p-10 md:px-40 rounded"
        style={{ border: 'none' }}
      />
      <HeroParallax
        id="caminho"
        title="Meu caminho"
        description="Conheça algumas empresas e startups "
        products={companies}
      />
      <StickyScroll id="projetos" content={companiesDetails} />
      <RadarComponent />
    </div>
  )
}
