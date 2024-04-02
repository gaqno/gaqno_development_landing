'use client'
import React, { useState } from 'react'
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from '@/components/ui/navbar-menu'
import LeninGPTImage from '@/public/img/lenin-gpt.png'
import TovariXImage from '@/public/img/tovarix.png'
import PescaFuriosaImg from '@/public/img/pesca-furiosa.png'
import { cn } from '@/utils/cn'
import { DarkModeToggle } from './DarkModeToggle'

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)
  return (
    <div
      className={cn(
        'fixed top-10 inset-x-0 max-w-md md:max-w-2xl mx-auto z-50',
        className,
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Inicio">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#sobre">Quem sou?</HoveredLink>
            <HoveredLink href="#techs">Técnologias</HoveredLink>
            <HoveredLink href="#projetos">Projetos</HoveredLink>
            <HoveredLink href="#caminho">Meu caminho</HoveredLink>
            <HoveredLink href="#contact">Contato</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projetos">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="LeninGPT"
              href="#projetos/lenin-gpt"
              src={LeninGPTImage}
              description="Chatbot utilizando Inteligência Artificial da OpenIA para responder perguntas"
            />
            <ProductItem
              title="TovariX"
              href="#projetos/tovarix"
              src={TovariXImage}
              description="Um portal onde você tem assistencia financeira, sobre ações e investimentos"
            />
            <ProductItem
              title="Pesca Furiosa"
              href="#projetos/pesca-furiosa"
              src={PescaFuriosaImg}
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Marvel Dashboard"
              href="#projetos/marvel-dashboard"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
          </div>
        </MenuItem>
        <DarkModeToggle />
      </Menu>
    </div>
  )
}
