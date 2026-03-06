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
    GlobalApi.BusinessBookedSlot(
      business.id,
      moment(date).format("DD-MMM-yyyy")
    ).then((resp) => {
      console.log(resp);
      setBookedSlot(resp.bookings);
    });
  };

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({
        time: i + ":00 AM",
      });
      timeList.push({
        time: i + ":30 AM",
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
          <div className="grid grid-cols-3 gap-3">
            {timeSlot.map((item, index) => (
              <Button
                key={index}
                disabled={isSlotBooked(item.time) || moment(date).isBefore(moment(), 'day') || (moment(date).isSame(moment(), 'day') && moment().isAfter(moment(item.time, "h:mm A")))}
                variant="outline"
                className={`border rounded-full 
                p-2 px-3 hover:bg-primary
                 hover:text-white
                 ${selectedTime == item.time && "bg-primary text-white"}`}
                onClick={() => setSelectedTime(item.time)}
              >
                {item.time}
              </Button>
            ))}
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <h2 className="font-bold">Contact Details</h2>
            <Input
              placeholder="Your Phone Number"
              value={userPhone}
              className="rounded-xl border-primary/20 focus-visible:ring-primary"
              onChange={(e) => setUserPhone(e.target.value)}
            />
            <Input
              placeholder="Your Home Address"
              value={userAddress}
              className="rounded-xl border-primary/20 focus-visible:ring-primary"
              onChange={(e) => setUserAddress(e.target.value)}
            />
          </div>
          <SheetFooter className="mt-5">
            <SheetClose asChild>
              <div className="flex gap-5">
                <Button variant="destructive" className="">
                  Cancel
                </Button>

                <Button
                  disabled={!(selectedTime && date && userAddress && userPhone)}
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
