import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BusinessList({ businessList, title }) {
    return (
        <div className='mt-5'>
            <h2 className='font-bold text-[22px]'>{title}</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5'>
                {businessList.length > 0 ? businessList.map((business, index) => (
                    <Link
                        href={'/details/' + business.id}
                        key={index}
                        className='group border rounded-xl bg-card hover:bg-accent/30 transition-all shadow-sm hover:shadow-md overflow-hidden'
                    >
                        <div className='relative'>
                            <Image
                                src={business?.images[0].url}
                                alt={business.name}
                                width={500}
                                height={220}
                                className='h-[150px] md:h-[200px] w-full object-cover'
                            />
                            <span className='absolute top-3 left-3 text-[12px] bg-white/90 dark:bg-background/90 border px-2 py-0.5 rounded-full'>
                                {business.category.name}
                            </span>
                        </div>
                        <div className='flex flex-col items-start p-4 gap-1'>
                            <h2 className='font-semibold text-base md:text-lg tracking-tight'>{business.name}</h2>
                            <h3 className='text-primary text-sm'>{business.contactPerson}</h3>
                            <p className='text-foreground/60 text-sm line-clamp-1'>{business.address}</p>
                            <Button size='sm' className='rounded-full mt-3'>Book Now</Button>
                        </div>
                    </Link>
                ))
                    :
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <div key={index} className='w-full h-[260px] bg-muted rounded-xl animate-pulse' />
                    ))
                }
            </div>
        </div>
    )
}

export default BusinessList