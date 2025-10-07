import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoryList({ categoryList }) {
    return (
        <div className='mx-4 md:mx-8 lg:mx-16 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4'>
            {categoryList.length > 0 ? categoryList.map((category, index) => (
                <Link
                    href={'/search/' + category.name}
                    key={index}
                    className={`group flex flex-col items-center justify-center gap-2 bg-card border border-border p-4 md:p-5 rounded-xl cursor-pointer shadow-sm hover:shadow-md hover:bg-accent/40 transition-all ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30`}
                >
                    <Image
                        src={category.icon.url}
                        alt='icon'
                        width={36}
                        height={36}
                        className='transition-transform duration-200 group-hover:scale-105'
                    />
                    <h2 className='text-sm md:text-[15px] font-medium text-foreground/80 group-hover:text-foreground'>{category.name}</h2>
                </Link>
            )) :
                [1, 2, 3, 4, 5, 6].map((item, index) => (
                    <div
                        key={index}
                        className='h-[110px] md:h-[120px] w-full bg-muted animate-pulse rounded-xl border border-border dark:bg-dark-muted dark:border-dark-border'
                    />
                ))
            }
        </div>
    )
}

export default CategoryList