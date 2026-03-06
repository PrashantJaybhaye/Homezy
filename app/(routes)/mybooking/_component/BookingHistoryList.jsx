import { Button } from '@/components/ui/button'
import { Calendar as CalendarIcon, Clock, MapPin, User, CheckCircle2, History, XCircle, CalendarCheck2 } from 'lucide-react'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import { Calendar } from "@/components/ui/calendar"
import moment from "moment"
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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import GlobalApi from '@/app/_services/GlobalApi'
import { toast } from 'sonner'


function BookingHistoryList({ bookingHistory, type }) {
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Reschedule state
  const [rescheduleBookingTarget, setRescheduleBookingTarget] = useState(null);
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState("");
  const [bookedSlot, setBookedSlot] = useState([]);
  const [loadingReschedule, setLoadingReschedule] = useState(false);

  useEffect(() => {
    getTime();
  }, []);

  useEffect(() => {
    if (rescheduleBookingTarget && date) {
      getBusinessBookedSlot();
    }
  }, [date, rescheduleBookingTarget]);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({ time: i + (i === 12 ? ":00 PM" : ":00 AM") });
      timeList.push({ time: i + (i === 12 ? ":30 PM" : ":30 AM") });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({ time: i + ":00 PM" });
      timeList.push({ time: i + ":30 PM" });
    }
    setTimeSlot(timeList);
  };

  const getBusinessBookedSlot = () => {
    setLoadingReschedule(true);
    GlobalApi.BusinessBookedSlot(
      rescheduleBookingTarget.businessList.id,
      moment(date).format("DD-MMM-yyyy")
    ).then((resp) => {
      setBookedSlot(resp.bookings);
      setLoadingReschedule(false);
    }).catch(() => setLoadingReschedule(false));
  };

  const isSlotBooked = (time) => {
    return bookedSlot.find((item) => item.time == time);
  };

  const isMoreThan3HoursAway = (bookingDate, bookingTime) => {
    if (!bookingDate || !bookingTime) return false;
    const bookingDateTime = moment(`${bookingDate} ${bookingTime}`, "DD-MMM-yyyy h:mm A");
    const diffHours = bookingDateTime.diff(moment(), 'hours');
    return diffHours >= 3;
  };

  const submitReschedule = async () => {
    setIsSubmitting(true);
    try {
      await GlobalApi.rescheduleBooking(
        rescheduleBookingTarget.id,
        moment(date).format("DD-MMM-yyyy"),
        selectedTime
      );
      toast("Booking rescheduled successfully!");
      // Reset state
      setRescheduleBookingTarget(null);
      setDate(new Date());
      setSelectedTime("");
    } catch (e) {
      console.log(e);
      toast("Error rescheduling the booking.");
    }
    setIsSubmitting(false);
  };

  const submitReview = async () => {
    setIsSubmitting(true);
    try {
      await GlobalApi.addReviewToBooking(selectedBooking.id, rating, reviewText);
      toast("Review submitted successfully!");
    } catch (e) {
      console.log(e);
      toast("Review functionality requires 'rating' and 'review' fields in your Hygraph dashboard!");
    }
    setIsSubmitting(false);
    setSelectedBooking(null);
    setRating(0);
    setReviewText("");
  };

  return (
    <>
      <div className='flex flex-wrap gap-4'>
        {bookingHistory.map((booking, index) => (
          <div key={index} className='border rounded-xl p-4 mb-2 hover:shadow-lg transition-all bg-white flex flex-col w-full sm:w-[500px] shrink-0'>
            <div className='flex flex-col sm:flex-row gap-4 relative flex-1'>
              {booking?.businessList?.name && booking?.businessList?.images?.[0]?.url && (
                <div className="relative w-full sm:w-[120px] h-[120px] flex-shrink-0">
                  <Image
                    src={booking?.businessList?.images[0]?.url}
                    alt='image'
                    fill
                    className='rounded-xl object-cover'
                  />
                </div>
              )}
              <div className='flex flex-col gap-2 flex-1'>
                <div className='flex justify-between items-start'>
                  <div>
                    <h2 className='font-bold text-lg mb-0.5'>{booking?.businessList?.name}</h2>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 gap-x-2 text-gray-500 text-xs">
                  <h2 className='flex items-center gap-1.5 col-span-1 sm:col-span-2'>
                    <MapPin className='text-primary h-3.5 w-3.5 shrink-0' />
                    <span className="line-clamp-1">{booking?.businessList?.address}</span>
                  </h2>
                  <h2 className='flex items-center gap-1.5'>
                    <CalendarIcon className='text-primary h-3.5 w-3.5 shrink-0' />
                    <span className='text-black font-medium'>{booking?.date}</span>
                  </h2>
                  <h2 className='flex items-center gap-1.5'>
                    <Clock className='text-primary h-3.5 w-3.5 shrink-0' />
                    <span className='text-black font-medium'>{booking?.time}</span>
                  </h2>
                  {booking?.userPhone && (
                    <h2 className='flex items-center gap-1.5'>
                      <User className='text-primary h-3.5 w-3.5 shrink-0' />
                      <span className='text-black font-medium'>{booking.userPhone}</span>
                    </h2>
                  )}
                  {booking?.userAddress && (
                    <h2 className='flex items-center gap-1.5 col-span-1 sm:col-span-2'>
                      <MapPin className='text-primary h-3.5 w-3.5 shrink-0' />
                      <span className="line-clamp-1 text-black font-medium">{booking.userAddress}</span>
                    </h2>
                  )}
                </div>

              </div>
            </div>

            {/* Actions section isolated at the bottom */}
            <div className="mt-4 pt-3 border-t flex justify-end gap-2 w-full">
              {!(booking.bookingStatus === 'Completed' || booking.bookingStatus === 'completed' || booking.bookingStatus === 'Canceled' || booking.bookingStatus === 'canceled') && isMoreThan3HoursAway(booking.date, booking.time) && (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-white h-8 px-3 text-xs"
                  onClick={() => setRescheduleBookingTarget(booking)}
                >
                  <CalendarCheck2 className="h-3.5 w-3.5 mr-1" />
                  Reschedule
                </Button>
              )}

              {(booking.bookingStatus === 'Completed' || booking.bookingStatus === 'completed') && (
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-white h-8 px-3 text-xs"
                  onClick={() => setSelectedBooking(booking)}
                >
                  <Star className="h-3.5 w-3.5 mr-1" />
                  Leave a Review
                </Button>
              )}
            </div>

          </div>
        ))}
      </div>

      {/* Review Dialog manually controlled */}
      <AlertDialog open={!!selectedBooking} onOpenChange={() => setSelectedBooking(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Leave a Review</AlertDialogTitle>
            <AlertDialogDescription>
              How was your experience with {selectedBooking?.businessList?.name}?
            </AlertDialogDescription>
          </AlertDialogHeader>

          <div className="py-4">
            <h2 className="mb-2 text-sm font-medium">Rating</h2>
            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-8 w-8 cursor-pointer transition-all ${rating >= star ? 'text-primary fill-primary' : 'text-gray-300'}`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>

            <h2 className="mb-2 text-sm font-medium">Review</h2>
            <textarea
              className="w-full border rounded-md p-3 focus:outline-primary focus:ring-1 focus:ring-primary min-h-[100px]"
              placeholder="Tell us what you liked (or didn't like)..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
          </div>

          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => {
              setRating(0);
              setReviewText("");
              setSelectedBooking(null);
            }}>Cancel</AlertDialogCancel>
            <Button
              disabled={isSubmitting || rating === 0}
              onClick={submitReview}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Reschedule Sheet manually controlled */}
      <Sheet open={!!rescheduleBookingTarget} onOpenChange={(open) => {
        if (!open) {
          setRescheduleBookingTarget(null);
          setSelectedTime("");
        }
      }}>
        <SheetContent className="overflow-auto sm:max-w-[425px]">
          <SheetHeader>
            <SheetTitle>Reschedule Booking</SheetTitle>
            <SheetDescription>
              Select a new date and time for {rescheduleBookingTarget?.businessList?.name}.
            </SheetDescription>
          </SheetHeader>

          <div className="py-4">
            <div className="flex flex-col gap-5 items-start mb-6">
              <h2 className="font-bold">Select Date</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-sm"
                fromDate={new Date()}
              />
            </div>

            <h2 className="mb-4 font-bold">Select Time Slot</h2>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {loadingReschedule ? (
                <div className="col-span-2 text-center text-sm text-gray-500 py-4">Loading slots...</div>
              ) : (
                timeSlot.map((item, index) => (
                  <Button
                    key={index}
                    disabled={
                      isSlotBooked(item.time) ||
                      moment(`${moment(date).format('YYYY-MM-DD')} ${item.time}`, 'YYYY-MM-DD h:mm A').isBefore(moment())
                    }
                    variant="outline"
                    className={`border rounded-full p-2 px-3 text-sm hover:bg-primary hover:text-white ${selectedTime == item.time && "bg-primary text-white"}`}
                    onClick={() => setSelectedTime(item.time)}
                  >
                    {item.time}
                  </Button>
                ))
              )}
            </div>
          </div>

          <SheetFooter className="mt-5">
            <div className="flex gap-5">
              <SheetClose asChild>
                <Button variant="destructive" onClick={() => {
                  setRescheduleBookingTarget(null);
                  setSelectedTime("");
                }}>
                  Cancel
                </Button>
              </SheetClose>
              <Button
                disabled={isSubmitting || !selectedTime || !date}
                onClick={submitReschedule}
              >
                {isSubmitting ? 'Rescheduling...' : 'Confirm'}
              </Button>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default BookingHistoryList