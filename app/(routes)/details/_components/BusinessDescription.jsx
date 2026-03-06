import Image from 'next/image'
import React from 'react'

function BusinessDescription({ business }) {
  return business?.name && (
    <div className='mt-8 bg-muted/5 p-4 md:p-6 rounded-3xl border'>
      <h2 className='font-extrabold text-2xl md:text-3xl tracking-tight'>Description</h2>
      <p className='mt-4 text-base md:text-lg text-muted-foreground leading-relaxed'>{business.about}</p>

      <h2 className='font-extrabold text-2xl md:text-3xl tracking-tight mt-8 mb-4'>Gallery</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {business?.images?.map((item, index) => (
          <Image src={item?.url} key={index}
            alt='image'
            width={700}
            height={200}
            className='rounded-lg' />
        ))}
      </div>
    </div>
  )
}

export default BusinessDescription