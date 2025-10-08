"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

function Header() {
  const { data } = useSession();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="mx-auto px-4 md:px-8 lg:px-10 py-3 sm:py-1 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="logo"
              width={140}
              height={70}
              className="h-auto md:w-[160px] md:h-[80px]"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-foreground/80 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm text-foreground/80 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm text-foreground/80 hover:text-primary transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              About Us
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {data?.user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image
                  src={data?.user?.image}
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full ring-2 ring-transparent hover:ring-primary transition"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={"/mybooking"}>My Booking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button className="rounded-full" onClick={() => signIn("descope")}>
              Login / Sign Up
            </Button>
          )}
          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[85%] sm:w-[400px] p-6">
                <div className="flex flex-col gap-6 mt-6">
                  <SheetClose asChild>
                    <Link href="/" className="text-base">
                      Home
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#services" className="text-base">
                      Services
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="#about" className="text-base">
                      About Us
                    </Link>
                  </SheetClose>
                  <div className="h-px bg-border" />
                  {data?.user ? (
                    <div className="flex flex-col gap-3">
                      <SheetClose asChild>
                        <Link href="/mybooking" className="text-base">
                          My Booking
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Button variant="secondary" onClick={() => signOut()}>
                          Logout
                        </Button>
                      </SheetClose>
                    </div>
                  ) : (
                    <SheetClose asChild>
                      <Button
                        className="rounded-full"
                        onClick={() => signIn("descope")}
                      >
                        Login / Sign Up
                      </Button>
                    </SheetClose>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
