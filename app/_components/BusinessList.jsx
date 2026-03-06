import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Skeleton from './Skeleton'

function BusinessList({ businessList, title }) {
    return (
        <div className='mt-5'>
            <h2 className='font-bold text-[22px]'>{title}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-5'>
                {businessList.length > 0 ? businessList.map((business, index) => (
                    <Link
                        href={'/details/' + business.id}
                        key={index}
                        className='group border border-border rounded-xl bg-card hover:bg-accent/40 transition-all shadow-sm hover:shadow-md overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30'
                    >
                        <div className='relative'>
                            <Image
                                src={business?.images[0].url}
                                alt={business.name}
                                width={500}
                                height={220}
                                className='h-[150px] md:h-[200px] w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]'
                            />
                            <span
                                className='absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md text-primary border-2 border-white'
                                style={{
                                    backgroundColor: business.category.bgcolor?.hex || '#fff'
                                }}
                            >
                                {business.category.name}
                            </span>
                        </div>
                        <div className='flex flex-col items-start p-4 gap-1'>
                            <h2 className='font-bold text-base md:text-lg tracking-tight group-hover:text-primary transition-colors'>{business.name}</h2>
                            <h3 className='text-primary font-medium text-sm'>{business.contactPerson}</h3>
                            <p className='text-muted-foreground text-sm line-clamp-1'>{business.address}</p>
                            <Button size='sm' className='rounded-full mt-3 w-full shadow-md hover:scale-[1.02] active:scale-95 transition-all text-xs font-bold uppercase'>Book Now</Button>
                        </div>
                    </Link>
                ))
                    :
                    [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                        <div key={index} className='border rounded-xl overflow-hidden'>
                            <Skeleton className="h-[150px] md:h-[200px] w-full rounded-none" />
                            <div className='p-4 space-y-3'>
                                <Skeleton className="h-6 w-3/4" />
                                <Skeleton className="h-4 w-1/2" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-9 w-full rounded-full mt-2" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BusinessList