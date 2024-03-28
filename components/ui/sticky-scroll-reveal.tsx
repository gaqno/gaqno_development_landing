'use client'
import React, { useRef } from 'react'
import { useMotionValueEvent, useScroll, motion } from 'framer-motion'
import { cn } from '@/utils/cn'
import { Badge } from './badge'
import { Icon } from '@iconify/react/dist/iconify.js'

export const StickyScroll = ({
  id,
  content,
  contentClassName,
}: {
  id: string
  content: {
    title: string
    description: string
    href?: string
    content?: React.ReactNode
    techs?: {
      icon: string
      name: string
    }[]
  }[]
  contentClassName?: string
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ['start start', 'end start'],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0,
    )
    setActiveCard(closestBreakpointIndex)
  })

  const backgroundColors = [
    'var(--slate-900)',
    'var(--black)',
    'var(--slate-900)',
  ]
  const linearGradients = [
    'linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))',
    'linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))',
    'linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))',
  ]
  return (
    <motion.div
      id={id}
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="pl-[2em]  no-scrollbar h-[50rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div
              id={`projetos/${item.href}`}
              key={item.title + index}
              className="my-20"
            >
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-kg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
              {item.techs && (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                  className="text-kg text-slate-300 pt-10 w-fit flex flex-row flex-wrap gap-2"
                >
                  {item.techs.map((tech, index) => (
                    <Badge key={index} className="flex flex-row gap-2">
                      <Icon icon={tech.icon} className="w-6 h-6" />
                      <span>{tech.name}</span>
                    </Badge>
                  ))}
                </motion.span>
              )}
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <motion.div
        animate={{
          background: linearGradients[activeCard % linearGradients.length],
        }}
        className={cn(
          'hidden lg:block h-60 w-80 rounded-md bg-white sticky top-10 overflow-hidden',
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </motion.div>
    </motion.div>
  )
}
