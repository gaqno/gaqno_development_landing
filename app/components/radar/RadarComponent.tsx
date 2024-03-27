import { Icon } from '@iconify/react/dist/iconify.js'
import { IconContainer } from './IconContainer'
import { Radar } from './Radar'

export default function RadarComponent() {
  return (
    <>
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
          Projetos em andamento
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          Estamos sempre trabalhando em novos projetos e melhorias para nossos
          clientes.
        </p>
      </div>
      <div className="relative flex h-96 w-full flex-col items-center justify-center space-y-4 overflow-hidden px-4">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full  items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              text="Web Development"
              delay={0.2}
              icon={
                <Icon
                  icon="mdi:google-my-business"
                  className=" h-8 w-8 text-slate-600"
                />
              }
            />
            <IconContainer
              delay={0.4}
              text="ORM"
              icon={
                <Icon icon="mdi:database" className=" h-8 w-8 text-slate-600" />
              }
            />
            <IconContainer
              text="Back-office"
              delay={0.3}
              icon={
                <Icon
                  icon="mdi:office-building"
                  className=" h-8 w-8 text-slate-600"
                />
              }
            />
          </div>
        </div>

        <div className="mx-auto w-full max-w-md">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              text="Jogos Mobile"
              delay={0.5}
              icon={
                <Icon
                  icon="mdi:gamepad-square-outline"
                  className=" h-8 w-8 text-slate-600"
                />
              }
            />
            <IconContainer
              text="PDV"
              icon={
                <Icon icon="mdi:cash" className=" h-8 w-8 text-slate-600" />
              }
              delay={0.8}
            />
          </div>
        </div>

        <div className="mx-auto w-full max-w-3xl">
          <div className="flex w-full items-center justify-center space-x-10 md:justify-between md:space-x-0 ">
            <IconContainer
              delay={0.6}
              text="Design System"
              icon={
                <Icon
                  icon="mdi:video-input-component"
                  className=" h-8 w-8 text-slate-600"
                />
              }
            />
            <IconContainer
              delay={0.7}
              text="Integrações CMS"
              icon={
                <Icon icon="mdi:pencil" className=" h-8 w-8 text-slate-600" />
              }
            />
          </div>
        </div>

        <Radar className="absolute -bottom-12" />
        <div className="absolute bottom-0 z-[41] h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </div>
    </>
  )
}
