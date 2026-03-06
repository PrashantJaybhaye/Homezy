"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import { useUser, SignInButton } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import BusinessInfo from '../_components/BusinessInfo';
import SuggestedBusinessList from '../_components/SuggestedBusinessList';
import BusinessDescription from '../_components/BusinessDescription';
import { useRouter } from 'next/navigation';
import Skeleton from '@/app/_components/Skeleton';

function BusinessDetail({ params }) {
  const unwrappedParams = React.use(params);
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    unwrappedParams && getbusinessById();
  }, [unwrappedParams]);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn]);

  const getbusinessById = () => {
    GlobalApi.getBusinessById(unwrappedParams.businessId).then(resp => {
      setBusiness(resp.businessList);
    })
  }



  if (!business || Object.keys(business).length === 0) {
    return (
      <div className='py-6 md:py-10 px-5 sm:px-10 md:px-20 lg:px-36 max-w-7xl mx-auto'>
        {/* Header Skeleton */}
        <div className='flex flex-col md:flex-row gap-6 md:gap-10 p-4 md:p-6 bg-white rounded-3xl border'>
          <Skeleton className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full shrink-0" />
          <div className='flex-1 space-y-4 py-2'>
            <Skeleton className="h-6 w-32 rounded-full" />
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-6 w-2/3" />
          </div>
        </div>

        {/* Content Skeleton */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-10'>
          <div className='lg:col-span-2 space-y-8'>
            <div className='bg-muted/5 p-4 md:p-6 rounded-3xl border space-y-4'>
              <Skeleton className="h-10 w-48" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-10 w-48 mt-8" />
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {[1, 2, 3, 4].map(i => <Skeleton key={i} className="h-48 w-full rounded-xl" />)}
              </div>
            </div>
          </div>
          <div className='lg:col-span-1 space-y-4'>
            <Skeleton className="h-12 w-full rounded-full" />
            <div className='space-y-3 mt-6'>
              {[1, 2, 3].map(i => <Skeleton key={i} className="h-20 w-full rounded-xl" />)}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return isSignedIn && business && (
    <div className='py-6 md:py-10 px-5 sm:px-10 md:px-20 lg:px-36 max-w-7xl mx-auto'>
      <BusinessInfo business={business} />

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-10'>
        <div className='lg:col-span-2 order-last lg:order-first'>
          <BusinessDescription business={business} />
        </div>
        <div className='lg:col-span-1'>
          <SuggestedBusinessList business={business} />
        </div>
      </div>

    </div>
  )
}

export default BusinessDetail