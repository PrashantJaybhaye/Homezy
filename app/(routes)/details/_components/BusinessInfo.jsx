import { Button } from '@/components/ui/button'
import { Clock, Mail, MapPin, Share, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function BusinessInfo({ business }) {
  return business?.name && (
    <div className='flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start p-4 md:p-6 bg-white rounded-3xl border shadow-sm'>
      <div className='relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] shadow-xl rounded-full overflow-hidden border-4 border-primary/10'>
        <Image
          src={business?.images[0]?.url}
          alt={business.name}
          fill
          className='object-cover hover:scale-105 transition-transform duration-500'
        />
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center md:items-start w-full gap-6'>
        <div className='flex flex-col items-center md:items-start gap-4 text-center md:text-left'>
          <h2 className='px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm border border-black/5'
            style={{
              backgroundColor: business?.category?.bgcolor?.hex || '#7c3aed',
              color: (business?.category?.bgcolor?.hex?.toLowerCase()?.startsWith('#f') ||
                business?.category?.bgcolor?.hex?.toLowerCase()?.startsWith('#e') ||
                business?.category?.bgcolor?.hex?.toLowerCase() === '#ffffff' ||
                business?.category?.bgcolor?.name === '#fff') ? '#000' : '#fff'
            }}>
            {business?.category?.name}
          </h2>
          <h1 className='text-3xl md:text-5xl font-extrabold tracking-tight text-foreground'>{business.name}</h1>

          <div className='flex flex-col gap-2.5 mt-2'>
            <p className='flex items-center justify-center md:justify-start gap-2.5 text-muted-foreground text-sm md:text-lg'>
              <MapPin className='h-5 w-5 text-primary' />
              {business.address}
            </p>
            <p className='flex items-center justify-center md:justify-start gap-2.5 text-muted-foreground text-sm md:text-lg'>
              <Mail className='h-5 w-5 text-primary' />
              {business?.email}
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-6 items-center md:items-end w-full md:w-auto pt-4 md:pt-0'>
          <Button variant="outline" size="icon" className='rounded-full h-12 w-12 border-primary/20 hover:bg-primary/5'>
            <Share className='h-5 w-5' />
          </Button>

          <div className='space-y-3 text-center md:text-right'>
            <h2 className='flex items-center justify-center md:justify-end gap-2.5 text-lg md:text-xl font-bold text-primary'>
              <User className='h-5 w-5' />
              {business.contactPerson}
            </h2>
            <h2 className='flex items-center justify-center md:justify-end gap-2.5 text-sm md:text-lg text-muted-foreground font-medium'>
              <Clock className='h-5 w-5 text-primary' />
              Mon - Sat: 8:00 AM - 10:00 PM
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessInfo