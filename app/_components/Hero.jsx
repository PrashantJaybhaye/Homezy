import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className='relative overflow-hidden rounded-2xl border bg-gradient-to-b from-purple-50/80 to-transparent dark:from-purple-900/10 my-6'>
      <div className='flex items-center gap-3 flex-col justify-center pt-14 pb-10 px-4'>
        <h2 className='font-bold text-[36px] md:text-[46px] text-center leading-tight'>
          Find Home
          <span className='text-primary'> Service/Repair</span>
          <br /> Near You
        </h2>
        <h2 className='text-base md:text-lg text-foreground/60'>Explore the best home services & repairs near you</h2>
        <div className='mt-5 flex gap-2 items-center w-full justify-center'>
          <div className='flex items-center gap-2 bg-white dark:bg-background border rounded-full pl-4 pr-2 py-2 shadow-sm w-full max-w-xl'>
            <Search className='h-4 w-4 text-foreground/50' />
            <Input placeholder='Search for services, e.g. electrician, plumber' className='border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-full' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero