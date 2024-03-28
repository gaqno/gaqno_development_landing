import { Icon } from '@iconify/react'

export default function BrandBanner() {
  return (
    <div className="h-[40rem] p-8 mt-40 w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-6xl text-5xl lg:text-8xl font-bold text-center text-white relative z-20">
        gaqno development
      </h1>
      <span className="pt-4 text-center">
        <p className="text-white text-md md:text-lg">
          Desenvolvimento de aplicações web e mobile com as melhores tecnologias
          do mercado.
        </p>
      </span>

      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      </div>

      <Icon
        icon="akar-icons:arrow-down"
        className="animate-bounce text-white text-4xl mt-4"
      />
    </div>
  )
}
