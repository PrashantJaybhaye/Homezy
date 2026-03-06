import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function CategoryList({ categoryList }) {
    return (
        <div className='mx-4 sm:mx-8 md:mx-16 lg:mx-32 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6'>
            {categoryList.length > 0 ? categoryList.map((category, index) => (
                <Link
                    href={'/search/' + category.name}
                    key={index}
                    className={`group flex flex-col items-center justify-center gap-2 p-5 rounded-xl cursor-pointer shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200 border border-transparent`}
                    style={{
                        backgroundColor: category.bgcolor?.hex || '#f3f4f6'
                    }}
                >
                    <Image
                        src={category.icon.url}
                        alt='icon'
                        width={35}
                        height={35}
                        className='transition-transform duration-200 group-hover:rotate-6'
                    />
                    <h2 className='text-sm font-bold mt-1 text-primary'>
                        {category.name}
                    </h2>
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