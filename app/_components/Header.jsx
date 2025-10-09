"use client";
import { Button } from "@/components/ui/button";
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, Home, Briefcase, Info, Calendar, X } from "lucide-react";

function Header() {
  const { isSignedIn, user } = useUser();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-white/80 dark:bg-background/80 shadow-lg shadow-black/5"
          : "backdrop-blur-md bg-white/70 dark:bg-background/60"
      } border-b border-border/40`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-8 lg:gap-12">
            <Link 
              href="/" 
              className="flex items-center transition-transform hover:scale-105 duration-200"
            >
              <Image
                src="/logo.svg"
                alt="Homezy Logo"
                width={120}
                height={60}
                className="w-[100px] h-auto sm:w-[120px] md:w-[140px]"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 relative group"
              >
                Home
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300" />
              </Link>
              <Link
                href="#services"
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 relative group"
              >
                Services
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300" />
              </Link>
              <Link
                href="#about"
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 relative group"
              >
                About Us
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300" />
              </Link>
            </nav>
          </div>

          {/* Right Section - Auth & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-3">
            {isSignedIn ? (
              <>
                {/* My Booking Button - Hidden on small mobile */}
                <Link href="/mybooking" className="hidden sm:block">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-sm font-medium hover:bg-primary/10 transition-colors"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="hidden md:inline">My Booking</span>
                    <span className="md:hidden">Bookings</span>
                  </Button>
                </Link>
                
                {/* User Button */}
                <div className="scale-90 sm:scale-100">
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "w-9 h-9 ring-2 ring-primary/20 hover:ring-primary/40 transition-all"
                      }
                    }}
                  />
                </div>
              </>
            ) : (
              <SignInButton mode="redirect" redirectUrl="/sign-in">
                <Button 
                  className="rounded-full px-4 sm:px-6 text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
                  size="sm"
                >
                  <span className="hidden sm:inline">Login / Sign Up</span>
                  <span className="sm:hidden">Login</span>
                </Button>
              </SignInButton>
            )}

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg hover:bg-primary/10 transition-colors"
                    aria-label="Open navigation menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[280px] sm:w-[350px] p-0 border-l border-border/40"
                >
                  {/* Mobile Menu Header */}
                  <div className="flex items-center justify-between p-6 border-b border-border/40">
                    <h2 className="text-lg font-semibold">Menu</h2>
                  </div>

                  {/* Mobile Menu Content */}
                  <div className="flex flex-col p-6">
                    <nav className="flex flex-col gap-2 mb-6">
                      <SheetClose asChild>
                        <Link 
                          href="/" 
                          className="flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200"
                        >
                          <Home className="w-5 h-5" />
                          Home
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link 
                          href="#services" 
                          className="flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200"
                        >
                          <Briefcase className="w-5 h-5" />
                          Services
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link 
                          href="#about" 
                          className="flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200"
                        >
                          <Info className="w-5 h-5" />
                          About Us
                        </Link>
                      </SheetClose>
                    </nav>

                    <div className="h-px bg-border/60 my-4" />

                    {/* Auth Section in Mobile Menu */}
                    {isSignedIn ? (
                      <div className="flex flex-col gap-3">
                        <SheetClose asChild>
                          <Link 
                            href="/mybooking" 
                            className="flex items-center gap-3 px-4 py-3 text-base font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200"
                          >
                            <Calendar className="w-5 h-5" />
                            My Bookings
                          </Link>
                        </SheetClose>
                        <div className="flex items-center gap-3 px-4 py-3 bg-muted/50 rounded-lg">
                          <UserButton afterSignOutUrl="/" />
                          <div className="flex flex-col min-w-0">
                            <span className="text-sm font-medium truncate">
                              {user?.fullName || "User"}
                            </span>
                            <span className="text-xs text-muted-foreground truncate">
                              {user?.emailAddresses?.[0]?.emailAddress}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <SheetClose asChild>
                        <SignInButton mode="redirect" redirectUrl="/sign-in">
                          <Button 
                            className="w-full rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                            size="lg"
                          >
                            Login / Sign Up
                          </Button>
                        </SignInButton>
                      </SheetClose>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
