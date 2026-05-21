'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Language } from '@/lib/translations'

interface Props { language: Language }

export default function Logo({ language }: Props) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const badge = language === 'wo' ? 'Ñëwoon nañu' : 'Bientôt disponible'

  return (
    <div className={`flex flex-col items-center gap-5 transition-opacity duration-700 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-24 h-24 md:w-32 md:h-32 relative">
        <Image
          src="/assets/logo.png"
          alt="SaxalWér"
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className="badge badge-soon">{badge}</span>
    </div>
  )
}
