"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Skeleton from "@/app/_components/Skeleton";
import GlobalApi from "@/app/_services/GlobalApi";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import moment from "moment";

function BookingSection({ children, business }) {
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const [bookedSlot, setBookedSlot] = useState([]);
  const [userAddress, setUserAddress] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  useEffect(() => {
    getTime();
  }, []);

  useEffect(() => {
    date && BusinessBookedSlot();
  }, [date]);

  /**
   * Get Selected Date Business Booked Slot
   */
  const BusinessBookedSlot = () => {
    setLoading(true);
    GlobalApi.BusinessBookedSlot(
      business.id,
      moment(date).format("DD-MMM-yyyy")
    ).then((resp) => {
      console.log(resp);
      setBookedSlot(resp.bookings);
      setLoading(false);
    }).catch(() => setLoading(false));
  };

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + (i === 12 ? ":00 PM" : ":00 AM"),
      });
      timeList.push({
        time: i + (i === 12 ? ":30 PM" : ":30 AM"),
      });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({
        time: i + ":00 PM",
      });
      timeList.push({
        time: i + ":30 PM",
      });
    }

    setTimeSlot(timeList);
  };

  const saveBooking = () => {
    GlobalApi.createNewBooking(
      business.id,
      moment(date).format("DD-MMM-yyyy"),
      selectedTime,
      user.primaryEmailAddress.emailAddress,
      user.fullName || user.firstName || user.emailAddresses[0].emailAddress,
      userAddress,
      userPhone
    ).then(
      (resp) => {
        console.log(resp);
        if (resp) {
          setDate();
          setSelectedTime("");
          setUserAddress("");
          setUserPhone("");
          setPhoneError("");
          setAddressError("");
          toast("Service Booked successfully!");
          // Toast Msg
        }
      },
      (e) => {
        toast("Error while creating booking");
        //Error Toast Msg
        console.log(JSON.stringify(e))
      }
    );
  };

  const isSlotBooked = (time) => {
    return bookedSlot.find((item) => item.time == time);
  };
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Book a Service</SheetTitle>
            <SheetDescription>
              Select Date and Time slot to book a service
            </SheetDescription>
          </SheetHeader>

          {/* Date Picker  */}
          <div className="flex flex-col gap-5 items-start">
            <h2 className="mt-5 font-bold">Select Date</h2>

            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border "
              fromDate={new Date()}
            />
          </div>
          {/* Time Slot Picker  */}
          <h2 className="my-5 font-bold">Select Time Slot</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {loading ? (
              [1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton key={i} className="h-10 w-full rounded-full" />
              ))
            ) : (
              timeSlot.map((item, index) => (
                <Button
                  key={index}
                  disabled={
                    isSlotBooked(item.time) ||
                    moment(`${moment(date).format('YYYY-MM-DD')} ${item.time}`, 'YYYY-MM-DD h:mm A').isBefore(moment())
                  }
                  variant="outline"
                  className={`border rounded-full 
                  p-2 px-1 sm:px-3 text-[12px] sm:text-base hover:bg-primary
                   hover:text-white
                   ${selectedTime == item.time && "bg-primary text-white"}`}
                  onClick={() => setSelectedTime(item.time)}
                >
                  {item.time}
                </Button>
              ))
            )}
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <h2 className="font-bold">Contact Details</h2>
            <div>
              <Input
                placeholder="Your Phone Number (10 Digits)"
                value={userPhone}
                type="tel"
                className={`rounded-xl ${phoneError ? 'border-red-500 focus-visible:ring-red-500' : 'border-primary/20 focus-visible:ring-primary'}`}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^0-9]/g, '');
                  setUserPhone(val);
                  if (val.length > 0 && val.length !== 10) {
                    setPhoneError("Phone number must be exactly 10 digits");
                  } else {
                    setPhoneError("");
                  }
                }}
                maxLength={10}
              />
              {phoneError && <p className="text-red-500 text-xs mt-1 ml-1">{phoneError}</p>}
            </div>

            <div>
              <Input
                placeholder="Your Home Address"
                value={userAddress}
                className={`rounded-xl ${addressError ? 'border-red-500 focus-visible:ring-red-500' : 'border-primary/20 focus-visible:ring-primary'}`}
                onChange={(e) => {
                  setUserAddress(e.target.value);
                  if (e.target.value.length > 0 && e.target.value.length < 10) {
                    setAddressError("Address must be at least 10 characters");
                  } else {
                    setAddressError("");
                  }
                }}
              />
              {addressError && <p className="text-red-500 text-xs mt-1 ml-1">{addressError}</p>}
            </div>
          </div>
          <SheetFooter className="mt-5">
            <SheetClose asChild>
              <div className="flex gap-5">
                <Button variant="destructive" className="">
                  Cancel
                </Button>

                <Button
                  disabled={!(selectedTime && date && userAddress.length >= 10 && userPhone.length === 10)}
                  onClick={() => saveBooking()}
                >
                  Book
                </Button>
              </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default BookingSection;
