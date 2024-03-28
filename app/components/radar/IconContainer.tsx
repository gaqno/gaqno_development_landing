'use client'
import React, { ReactNode } from 'react'

import { twMerge } from 'tailwind-merge'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react/dist/iconify.js'

export const IconContainer = ({
  icon,
  text,
  delay,
}: {
  icon: ReactNode
  text: string
  delay: number
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.2,
        delay: delay || 0,
      }}
      className={twMerge(
        'relative z-30 flex flex-col items-center justify-center space-y-2',
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 shadow-inner">
        {icon || (
          <Icon icon="mdi:ab-testing" className="  h-8 w-8 text-slate-600" />
        )}
      </div>
      <div className="hidden rounded-md px-2 py-1 md:block">
        <div className="text-center text-xs font-bold text-slate-400">
          {text || `Web Development`}
        </div>
      </div>
    </motion.div>
  )
}
