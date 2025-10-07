import GlobalApi from '@/app/_services/GlobalApi';
import { Button } from '@/components/ui/button'
import {  NotebookPen } from 'lucide-react'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import BookingSection from './BookingSection';

function SuggestedBusinessList({business}) {
  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (business?.category?.name) {
      setLoading(true);
      getBusinessList();
    }
  }, [business]);

  const getBusinessList = () => {
    GlobalApi.getBusinessByCategory(business?.category?.name)
      .then(resp => {
        setBusinessList(resp?.businessLists || []);
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className='md:pl-10'>
      <BookingSection business={business}>
        <Button className="flex gap-2 w-full rounded-full">
          <NotebookPen className='h-4 w-4'/>
          Book Appointment
        </Button>
      </BookingSection>

      <div className='hidden md:block'>
        <h2 className='font-semibold text-base mt-4 mb-3 tracking-tight'>Similar Businesses</h2>
        <div className='space-y-3'>
          {loading && [1,2,3].map((i) => (
            <div key={i} className='flex gap-3 p-2 border rounded-lg animate-pulse'>
              <div className='h-[72px] w-[90px] bg-muted rounded-lg' />
              <div className='flex-1 space-y-2'>
                <div className='h-4 w-2/3 bg-muted rounded' />
                <div className='h-3 w-1/2 bg-muted rounded' />
                <div className='h-3 w-3/4 bg-muted rounded' />
              </div>
            </div>
          ))}

          {!loading && businessList && businessList.length === 0 && (
            <div className='p-4 border rounded-lg text-sm text-foreground/60'>
              No similar businesses found.
            </div>
          )}

          {!loading && businessList && businessList.map((b, index) => (
            <Link
              key={index}
              href={'/details/' + b.id}
              className='flex gap-3 p-2 border rounded-lg hover:bg-accent/40 transition-colors'
            >
              <Image
                src={b?.images?.[0]?.url}
                alt={b?.name}
                width={90}
                height={72}
                className='rounded-lg object-cover h-[72px] w-[90px]'
              />
              <div className='min-w-0'>
                <h3 className='font-medium text-sm truncate'>{b?.name}</h3>
                <p className='text-primary text-xs'>{b?.contactPerson}</p>
                <p className='text-foreground/60 text-xs line-clamp-1'>{b?.address}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SuggestedBusinessList