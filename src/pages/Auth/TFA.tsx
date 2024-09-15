
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {Link} from 'react-router-dom'
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import toast from 'react-hot-toast'
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";

export default function TFA() {
    const [otp,setOtp]=useState("")

    const handleSubmit = (e: any) => {
      
    };
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md">
        <div className="flex items-center justify-center mb-8">
          <MountainIcon className="h-8 w-8" />
          <span className="text-2xl font-bold ml-2">
            Two Factor Authentication
          </span>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Enter 2FA Code</CardTitle>
            <CardDescription>
              Please enter the 6-digit code sent to your device.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <Input type="text" placeholder="Enter Two Factor Code" className="uppercase"
              value={otp}
              onChange={(e:any)=>{
                let inputValue=e.target.value;
                if(inputValue.length>6){
                    toast.error("OTP MUST BE LESS THAN 6 DIGITS")
                }else{
                    setOtp(inputValue)
                }
                
              }}/>
              <Button type="submit" className="w-full">
                Verify Code
              </Button>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div>Didn't receive the code?</div>
                <Link
                  to="#"
                  className="underline underline-offset-4"
                  onClick={() => {
                    toast.success("Otp Resent successfully");
                  }}
                >
                  Resend Code
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function MountainIcon(props:any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-lock-keyhole"
    >
      <circle cx="12" cy="16" r="1" />
      <rect x="3" y="10" width="18" height="12" rx="2" />
      <path d="M7 10V7a5 5 0 0 1 10 0v3" />
    </svg>
  );
}
