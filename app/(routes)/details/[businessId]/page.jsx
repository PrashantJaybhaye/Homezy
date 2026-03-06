"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import { useUser, SignInButton } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'
import BusinessInfo from '../_components/BusinessInfo';
import SuggestedBusinessList from '../_components/SuggestedBusinessList';
import BusinessDescription from '../_components/BusinessDescription';
import { useRouter } from 'next/navigation';

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