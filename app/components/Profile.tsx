import { BackgroundGradient } from '@/components/ui/background-gradient'
import { Icon } from '@iconify/react'
import ProfileImg from '@/public/img/profile.jpeg'
import Image from 'next/image'

export default function Profile() {
  return (
    <div id="sobre" className="max-w-auto px-4">
      <BackgroundGradient className="flex flex-col md:flex-row items-center gap-8 rounded-[22px] w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={ProfileImg}
          alt="Gariel Aquino"
          height="300"
          width="300"
          className="object-contain rounded-lg"
        />

        <div className="flex flex-col gap-7">
          <p className="text-base sm:text-3xl text-black mt-4 mb-2 dark:text-neutral-200">
            Gabriel Aquino - Desenvolvedor Fullstack
          </p>

          <p className="text-md text-neutral-600 dark:text-neutral-400">
            Olá, meu nome é Gabriel Aquino, sou desenvolvedor fullstack. Tenho
            experiência em desenvolvimento de aplicações web e mobile,
            utilizando as melhores tecnologias do mercado. Sou apaixonado por
            tecnologia e estou sempre em busca de novos desafios. Estou sempre
            em busca de novos desafios!
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-auto">
            {[
              {
                label: 'Entrar em contato',
                ico: 'mdi:whatsapp',
                link: 'https://wa.me/5511991610328',
              },
              {
                label: 'Projetos',
                ico: 'mdi:github',
                link: 'https://github.com/gaqno?tab=repositories',
              },
              {
                label: 'LinkedIn',
                ico: 'mdi:linkedin',
                link: 'https://linkedin.com/gaqno',
              },
            ].map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                key={`contact_${index}`}
                className="rounded p-3 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
                rel="noreferrer"
              >
                <span>{item.label}</span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-2 text-white">
                  <Icon icon={item.ico} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </BackgroundGradient>
    </div>
  )
}
