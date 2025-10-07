import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='relative overflow-hidden rounded-2xl border bg-gradient-to-b from-purple-50/80 to-transparent dark:from-purple-900/10 my-6'>
      {/* Decorative background orbs */}
      <div className='pointer-events-none absolute -top-12 -left-12 h-56 w-56 rounded-full bg-purple-300/30 blur-3xl dark:bg-purple-700/20' />
      <div className='pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl dark:bg-primary/20' />

      <div className='relative flex items-center gap-4 flex-col justify-center pt-16 pb-12 px-4'>
        <h2 className='font-extrabold text-[34px] md:text-[46px] text-center leading-tight tracking-tight'>
          Find Home
          <span className='text-primary'> Service/Repair</span>
          <br /> Near You
        </h2>
        <h2 className='text-sm md:text-base text-foreground/60 text-center max-w-2xl'>Explore trusted professionals for home services & repairs near you</h2>
        <div className='mt-6 flex gap-2 items-center w-full justify-center'>
          <div className='flex items-center gap-2 bg-white dark:bg-background border rounded-full pl-4 pr-2 py-2 shadow-sm w-full max-w-xl focus-within:ring-2 focus-within:ring-primary/30 focus-within:ring-offset-0'>
            <Search className='h-4 w-4 text-foreground/50 shrink-0' />
            <Input
              placeholder='Search for services, e.g. electrician, plumber'
              className='border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full placeholder:text-foreground/40'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero