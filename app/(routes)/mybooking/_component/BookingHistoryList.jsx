import { Button } from '@/components/ui/button'
import { Calendar, Clock, MapPin, User } from 'lucide-react'
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


  const cancelAppointment = (booking) => {
    GlobalApi.deleteBooking(booking.id).then(resp => {
      if (resp) {
        toast('Booking Delete Successfully!')
      }
    }, (e) => {
      toast('Error while canceling booking!')
    })
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
      {bookingHistory.map((booking, index) => (
        <div key={index} className='border rounded-xl p-5 mb-5 hover:shadow-lg transition-all bg-white'>
          <div className='flex flex-col md:flex-row gap-6'>
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
              <div>
                <h2 className='font-bold text-xl mb-1'>{booking?.businessList?.name}</h2>
                <h2 className='flex items-center gap-2 text-primary font-medium text-sm'>
                  <User className="h-4 w-4" /> {booking?.businessList?.contactPerson}
                </h2>
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
              </div>
            </div>
          </div>

          {/* <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                className="mt-5 w-full border-red-200 text-red-500 hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-colors">
                Cancel Appointment
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently cancel your booking
                  and remove it from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="bg-red-500 hover:bg-red-600 text-white"
                  onClick={() => cancelAppointment(booking)}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog> */}
        </div>
      ))}
    </div>
  )
}

export default BookingHistoryList