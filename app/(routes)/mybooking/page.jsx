"use client"
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CheckCircle2 } from 'lucide-react'
import BookingHistoryList from './_component/BookingHistoryList'
import GlobalApi from '@/app/_services/GlobalApi'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'

function MyBooking() {

    const { user } = useUser();
    const [bookingHistory, setBookingHistory] = useState([]);
    useEffect(() => {
        user && GetUserBookingHistory();
    }, [user])

    /**
     * Used to Get User Booking History
     */
    const GetUserBookingHistory = () => {
        GlobalApi.GetUserBookingHistory(user.primaryEmailAddress.emailAddress).then(resp => {
            console.log(resp);
            setBookingHistory(resp.bookings);
        })
    }

    const filterData = (type) => {
        const result = bookingHistory.filter(item =>
            item.bookingStatus?.toLowerCase() === type.toLowerCase()
        );

        return result;
    }

    return (
        <div className='my-10 mx-5 md:mx-36'>
            <h2 className='font-bold text-[20px] my-2'>My Bookings</h2>
            <Tabs defaultValue="booked" className="w-full">
                <TabsList className="w-full justify-start h-12 bg-muted/30 p-1 border-b gap-2">
                    <TabsTrigger value="booked" className="px-6 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                        Booked ({filterData('booked').length})
                    </TabsTrigger>
                    <TabsTrigger value="completed" className="px-6 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                        Completed ({filterData('completed').length})
                    </TabsTrigger>
                    <TabsTrigger value="canceled" className="px-6 data-[state=active]:bg-white data-[state=active]:shadow-sm">
                        Canceled ({filterData('canceled').length})
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="booked" className="mt-6">
                    {filterData('booked').length > 0 ? (
                        <BookingHistoryList
                            bookingHistory={filterData('booked')}
                            type='booked'
                        />
                    ) : (
                        <div className='flex flex-col items-center justify-center p-20 bg-muted/10 rounded-3xl border-2 border-dashed border-muted/50'>
                            <Calendar className="h-10 w-10 text-muted-foreground mb-4 opacity-20" />
                            <h2 className='text-lg font-medium text-muted-foreground'>No Booked Services Found</h2>
                            <p className='text-sm text-muted-foreground/60'>Any services you book will appear here.</p>
                        </div>
                    )}
                </TabsContent>

                <TabsContent value="completed" className="mt-6">
                    {filterData('completed').length > 0 ? (
                        <BookingHistoryList
                            bookingHistory={filterData('completed')}
                            type='completed'
                        />
                    ) : (
                        <div className='flex flex-col items-center justify-center p-20 bg-muted/10 rounded-3xl border-2 border-dashed border-muted/50'>
                            <CheckCircle2 className="h-10 w-10 text-muted-foreground mb-4 opacity-20" />
                            <h2 className='text-lg font-medium text-muted-foreground'>No Completed Services Yet</h2>
                            <p className='text-sm text-muted-foreground/60'>When a service is finished, it will show up here.</p>
                        </div>
                    )}
                </TabsContent>

                <TabsContent value="canceled" className="mt-6">
                    {filterData('canceled').length > 0 ? (
                        <BookingHistoryList
                            bookingHistory={filterData('canceled')}
                            type='canceled'
                        />
                    ) : (
                        <div className='flex flex-col items-center justify-center p-20 bg-muted/10 rounded-3xl border-2 border-dashed border-muted/50'>
                            <Calendar className="h-10 w-10 text-muted-foreground mb-4 opacity-20" />
                            <h2 className='text-lg font-medium text-muted-foreground'>No Canceled Bookings</h2>
                            <p className='text-sm text-muted-foreground/60'>Canceled bookings will appear here for your records.</p>
                        </div>
                    )}
                </TabsContent>
            </Tabs>

        </div>
    )
}

export default MyBooking