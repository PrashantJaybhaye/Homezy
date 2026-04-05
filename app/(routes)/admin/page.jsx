"use client"
import React, { useEffect, useState } from 'react'
import { Calendar, Users, TrendingUp, CheckCircle2, MapPin } from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import GlobalApi from '@/app/_services/GlobalApi'
import { toast } from 'sonner'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { checkIsAdmin } from "@/lib/constants"

function AdminDashboard() {
    const { user } = useUser();
    const [loading, setLoading] = useState(true);
    const [bookings, setBookings] = useState([]);

    // Manage Modal state
    const [selectedBooking, setSelectedBooking] = useState(null);
    const [isUpdating, setIsUpdating] = useState(false);

    const isAdmin = checkIsAdmin(user);

    useEffect(() => {
        if (isAdmin) {
            fetchAllBookings();
        }
    }, [isAdmin]);

    const fetchAllBookings = () => {
        setLoading(true);
        GlobalApi.getAllBookings().then(resp => {
            if (resp?.bookings) {
                setBookings(resp.bookings);
            }
            setLoading(false);
        }).catch(e => {
            console.log(e);
            setLoading(false);
        });
    }

    const updateStatus = async (status) => {
        setIsUpdating(true);
        try {
            await GlobalApi.updateBookingStatus(selectedBooking.id, status);
            toast(`Booking marked as ${status}!`);
            setSelectedBooking(null);
            fetchAllBookings(); // Refetch
        } catch (e) {
            console.log(e);
            toast("Error updating status. Make sure the 'bookingStatus' field accepts this value.");
        }
        setIsUpdating(false);
    }

    // Stats calculations
    const totalBookings = bookings.length;
    const completedBookings = bookings.filter(b => b.bookingStatus?.toLowerCase() === 'completed').length;

    // For visual purposes in the UI, we can invent a revenue or leave it static
    const estimatedRevenue = completedBookings * 150;

    if (!user) {
        return (
            <div className='flex items-center justify-center min-h-[60vh]'>
                <p className='text-gray-500 font-medium text-lg'>Checking authorization...</p>
            </div>
        )
    }

    if (!isAdmin) {
        return (
            <div className='flex flex-col items-center justify-center min-h-[60vh] text-center px-4'>
                <div className='bg-red-50 p-6 rounded-full mb-6'>
                    <Users className="h-12 w-12 text-red-500" />
                </div>
                <h1 className='text-3xl font-bold mb-3'>Access Denied</h1>
                <p className='text-gray-500 max-w-md'>
                    You do not have the required permissions to view the Admin Dashboard. Only authorized administrators can access this page.
                </p>
                <Button
                    variant="outline"
                    className="mt-8 border-primary text-primary hover:bg-primary/10"
                    onClick={() => window.location.href = '/'}
                >
                    Return to Home
                </Button>
            </div>
        )
    }

    return (
        <div className='my-8 sm:my-12 mx-4 sm:mx-10 md:mx-20 lg:mx-36'>
            <div className='flex justify-between items-center mb-8'>
                <h2 className='font-extrabold text-3xl md:text-4xl tracking-tight'>Admin Dashboard</h2>
                <div className='bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm'>
                    Admin Mode Active
                </div>
            </div>

            {/* Quick Stats */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
                <div className='border rounded-2xl p-6 bg-white shadow-sm flex items-center gap-4 border-l-4 border-l-primary'>
                    <div className='p-3 bg-primary/10 rounded-full text-primary'>
                        <Calendar className='w-8 h-8' />
                    </div>
                    <div>
                        <h3 className='text-gray-500 font-medium'>Total Bookings</h3>
                        <p className='text-3xl font-bold'>{loading ? '...' : totalBookings}</p>
                    </div>
                </div>

                <div className='border rounded-2xl p-6 bg-white shadow-sm flex items-center gap-4 border-l-4 border-l-green-500'>
                    <div className='p-3 bg-green-500/10 rounded-full text-green-500'>
                        <CheckCircle2 className='w-8 h-8' />
                    </div>
                    <div>
                        <h3 className='text-gray-500 font-medium'>Completed Jobs</h3>
                        <p className='text-3xl font-bold'>{loading ? '...' : completedBookings}</p>
                    </div>
                </div>

                <div className='border rounded-2xl p-6 bg-white shadow-sm flex items-center gap-4 border-l-4 border-l-blue-500'>
                    <div className='p-3 bg-blue-500/10 rounded-full text-blue-500'>
                        <TrendingUp className='w-8 h-8' />
                    </div>
                    <div>
                        <h3 className='text-gray-500 font-medium'>Estimated Revenue</h3>
                        <p className='text-3xl font-bold'>${loading ? '...' : estimatedRevenue}</p>
                    </div>
                </div>
            </div>

            {/* Recent Activity Table */}
            <div className='border rounded-2xl bg-white shadow-sm overflow-hidden'>
                <div className='p-6 border-b'>
                    <h2 className='font-bold text-xl'>Recent Booking Activity</h2>
                </div>

                <div className='overflow-x-auto'>
                    <table className='w-full'>
                        <thead className='bg-gray-50 text-left text-sm text-gray-500'>
                            <tr>
                                <th className='p-4 font-medium'>Customer</th>
                                <th className='p-4 font-medium'>Service</th>
                                <th className='p-4 font-medium'>Date & Time</th>
                                <th className='p-4 font-medium'>Status</th>
                                <th className='p-4 font-medium'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <tr>
                                    <td colSpan="5" className="p-4 text-center text-gray-500">Loading bookings...</td>
                                </tr>
                            ) : bookings.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="p-4 text-center text-gray-500">No bookings found.</td>
                                </tr>
                            ) : bookings.map((booking, index) => (
                                <tr key={index} className='border-b hover:bg-gray-50 transition-colors'>
                                    <td className='p-4'>
                                        <div className='flex items-center gap-3'>
                                            <div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold'>
                                                {booking.userName ? booking.userName.charAt(0).toUpperCase() : 'U'}
                                            </div>
                                            <div>
                                                <p className='font-medium'>{booking.userName || 'Unknown User'}</p>
                                                <p className='text-xs text-gray-500'>{booking.userPhone || 'No Phone'}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='p-4 font-medium'>{booking.businessList?.name || 'Unknown Service'}</td>
                                    <td className='p-4 text-sm'>
                                        <p>{booking.date}</p>
                                        <p className='text-gray-500'>{booking.time}</p>
                                    </td>
                                    <td className='p-4'>
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${booking.bookingStatus?.toLowerCase() === 'completed' ? 'bg-green-100 text-green-700' :
                                            booking.bookingStatus?.toLowerCase() === 'canceled' ? 'bg-red-100 text-red-700' :
                                                'bg-blue-100 text-blue-700'
                                            }`}>
                                            {booking.bookingStatus || 'Unknown'}
                                        </span>
                                    </td>
                                    <td className='p-4'>
                                        <button
                                            className='text-primary hover:underline text-sm font-medium'
                                            onClick={() => setSelectedBooking(booking)}
                                        >
                                            Manage
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Manage Action Dialog */}
            <AlertDialog open={!!selectedBooking} onOpenChange={() => setSelectedBooking(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Manage Booking</AlertDialogTitle>
                        <AlertDialogDescription>
                            Update the status of this booking for {selectedBooking?.userName}.
                        </AlertDialogDescription>
                    </AlertDialogHeader>

                    <div className="py-4 flex gap-4 justify-center">
                        <Button
                            variant="outline"
                            className="bg-green-50 text-green-700 border-green-200 hover:bg-green-100"
                            onClick={() => updateStatus('completed')}
                            disabled={isUpdating}
                        >
                            Mark as Completed
                        </Button>
                        <Button
                            variant="outline"
                            className="bg-red-50 text-red-700 border-red-200 hover:bg-red-100"
                            onClick={() => updateStatus('canceled')}
                            disabled={isUpdating}
                        >
                            Mark as Canceled
                        </Button>
                    </div>

                    <AlertDialogFooter>
                        <AlertDialogCancel disabled={isUpdating}>Close</AlertDialogCancel>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default AdminDashboard
