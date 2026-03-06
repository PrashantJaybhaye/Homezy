import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, User, CheckCircle2, History, XCircle } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import GlobalApi from '@/app/_services/GlobalApi'
import { toast } from 'sonner'


function BookingHistoryList({ bookingHistory, type }) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
      {bookingHistory.map((booking, index) => (
        <div key={index} className='border rounded-xl p-5 mb-5 hover:shadow-lg transition-all bg-white'>
          <div className='flex flex-col md:flex-row gap-6 relative'>
            {booking?.businessList?.name && booking?.businessList?.images?.[0]?.url && (
              <div className="relative w-full md:w-[150px] h-[150px] flex-shrink-0">
                <Image
                  src={booking?.businessList?.images[0]?.url}
                  alt='image'
                  fill
                  className='rounded-xl object-cover'
                />
              </div>
            )}
            <div className='flex flex-col gap-3 flex-1'>
              <div className='flex justify-between items-start'>
                <div>
                  <h2 className='font-bold text-xl mb-1'>{booking?.businessList?.name}</h2>
                  <h2 className='flex items-center gap-2 text-primary font-medium text-sm'>
                    <User className="h-4 w-4" /> {booking?.businessList?.contactPerson}
                  </h2>
                </div>
                {booking?.bookingStatus && (
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md border-2 ${booking.bookingStatus === 'Completed' || booking.bookingStatus === 'completed'
                    ? 'bg-green-600 text-white border-green-700'
                    : booking.bookingStatus === 'Canceled' || booking.bookingStatus === 'canceled'
                      ? 'bg-red-600 text-white border-red-700'
                      : 'bg-blue-600 text-white border-blue-700'
                    }`}>
                    {(booking.bookingStatus === 'Completed' || booking.bookingStatus === 'completed') && <CheckCircle2 className="h-3.5 w-3.5" />}
                    {(booking.bookingStatus === 'Canceled' || booking.bookingStatus === 'canceled') && <XCircle className="h-3.5 w-3.5" />}
                    {!(booking.bookingStatus === 'Completed' || booking.bookingStatus === 'completed' || booking.bookingStatus === 'Canceled' || booking.bookingStatus === 'canceled') && <History className="h-3.5 w-3.5" />}
                    {booking.bookingStatus}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2 text-gray-500 text-sm">
                <h2 className='flex items-center gap-2'>
                  <MapPin className='text-primary h-4 w-4' />
                  <span className="line-clamp-1">{booking?.businessList?.address}</span>
                </h2>
                <h2 className='flex items-center gap-2'>
                  <Calendar className='text-primary h-4 w-4' />
                  Service on: <span className='text-black font-medium'>{booking?.date}</span>
                </h2>
                <h2 className='flex items-center gap-2'>
                  <Clock className='text-primary h-4 w-4' />
                  Time: <span className='text-black font-medium'>{booking?.time}</span>
                </h2>
                {booking?.userPhone && (
                  <h2 className='flex items-center gap-2'>
                    <User className='text-primary h-4 w-4' />
                    Contact: <span className='text-black font-medium'>{booking.userPhone}</span>
                  </h2>
                )}
                {booking?.userAddress && (
                  <h2 className='flex items-center gap-2'>
                    <MapPin className='text-primary h-4 w-4' />
                    Address: <span className='text-black font-medium'>{booking.userAddress}</span>
                  </h2>
                )}
              </div>
            </div>
          </div>

        </div>
      ))}
    </div>
  )
}

export default BookingHistoryList