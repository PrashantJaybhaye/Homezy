"use client";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)] py-12">
      <SignUp
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-lg",
          }
        }}
        routing="path"
        path="/sign-up"
        signInUrl="/sign-in"
        redirectUrl="/"
      />
    </div>
  );
}
