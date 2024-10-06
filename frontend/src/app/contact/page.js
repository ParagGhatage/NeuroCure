"use client"
import Image from "next/image";
import React from "react";
import { Label } from "@/app/components/ui/label";
import { Input } from "@/app/components/ui/input";
import { cn } from "@/app/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  Icon3dCubeSphere,
  IconBrandX,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconPhoneCall,
  IconLocation
} from "@tabler/icons-react";
import axios from "axios"
import Link from "next/link";
import { useToast } from "@chakra-ui/react";

export default function Home() {

  
  const [user, setUser] = React.useState({
    email: "",
    message: "",
    name: "",
})
const toast = useToast()

const onEmail = async (e) => {
  e.preventDefault()
      try {

          const response = await axios.post("/api/send", user);
          console.log( response.data);

          if(!(response.data)){
            toast({
              title: `Enable to send an email!`,
              description:" Please try again.",
              status: "error",
              isClosable: true,
            })
          }
          if((response.data)){
            toast({
              title: `Email sent!`,
              description:"We have sent email to Explora team.",
              status: "success",
              isClosable: true,
            })
          }
      } catch (error) {
          console.log("Enable to send email", error.message);
          toast({
            title: `Enable to send email!`,
            description:`${error.message}`,
            status: "error",
            isClosable: true,
          })
      }
    }
  return (
    <div className="bg-orange-100 pt-20  w-full h-full">
      <div className="bg-orange-100 w-full h-full ">
      <div className="flex-auto justify-center lg:flex">
    <div className="max-w-md mx-auto bg-white rounded-none md:rounded-2xl p-4 md:p-8 shadow-input  mt-20 placeholder:text-black w-full">
      <div className="font-bold text-3xl text-black pt-3 ">
        Get in touch
      </div>
      

      <form className="my-8 placeholder:text-black" onSubmit={onEmail}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className=" text-black  ">
            <Label htmlFor="name" className="text-black placeholder:text-black ">Your Name</Label>
            <Input id="name" placeholder="Your Name" type="text"
            value={user.name} 
            onChange={(e) => setUser({...user, name: e.target.value})}
            className=" text-black  placeholder:text-black bg-indigo-100"/>
          </LabelInputContainer>
          
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="Email id" type="email"
          value={user.email} 
          onChange={(e) => setUser({...user, email: e.target.value})}
          className="placeholder:text-black bg-indigo-100"/>
        </LabelInputContainer>

        <LabelInputContainer className="h-56">
            <Label htmlFor="message">Message</Label>
            <textarea id="message" placeholder="Your message..." 
            value={user.message}
            onChange={(e) => setUser({...user, message: e.target.value})}
           className=" placeholder:text-black h-40 md:max-w-xl px-4 py-2 bg-indigo-100 whitespace-normal break-words resize-y"
          />
          </LabelInputContainer>

        <div className="text-center">
        <button
          className="rounded-xl p-5 hover:bg-white hover:text-black hover:border-2 hover:border-black bg-black hover:font-bold  text-white text-2xl font-bold"
          type="submit"
          
        >
          Send &rarr;
          <BottomGradient />
        </button>
        </div>
        

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        
        
      </form>
    </div>
    <div className="mt-20 mr-20 bg-white p-6 rounded-lg">
        <div className="text-3xl font-semibold text-slate-600">
        Info
        </div>

        <div className="bg-slate-100 rounded-lg  border border-black shadow-orange-100">
        <Link href="https://paragghatage.com">
            <div className="m-3 text-slate-600 font-normal flex">
                <Icon3dCubeSphere className="text-slate-600"/>
                
                <div className="ml-3">
                paragghatage.com
                </div>
                
            </div>
            </Link>
        </div>

        
        

        <div>
            <div className="m-3 text-slate-600  font-normal flex">
                <IconLocation className="text-slate-600"/>
                <div className="ml-3">
                India
                </div>
                
            </div>
        </div>

        <div className="mt-5">
        <div className="text-3xl font-semibold text-slate-600 mt-7 ">
        Socials
        </div>
        <div className="flex flex-col space-y-4 mt-5">
        <Link href={"mailto:thunderwolf.dev@gmail.com?subject=Get%20in%20Touch&body=Hello%20there"}>
<div
  className="  border border-black relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
> 

  <IconBrandGmail className="h-4  text-black" /> 
  <div className="text-black  text-sm text-center ">
    Email
  </div>
  <BottomGradient />
</div>
</Link>

<Link href="https://github.com/ParagGhatage">
<div
  className=" border border-black relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
> 
  <IconBrandGithub className="h-4  text-black" /> 
  <div className="text-black text-sm text-center">
    GitHub
  </div>
  <BottomGradient />
</div>
</Link>

<Link href="https://x.com/PARAG_GHATAGE">
<div
  className=" border border-black relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
> 
  <IconBrandX className="h-4  text-black" /> 
  <div className="text-black text-sm text-center">
    X
  </div>
  <BottomGradient />
</div>
</Link>
<Link href="https://www.instagram.com/parag_ghatage_35/">
<div
  className=" border border-black relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
> 
  <IconBrandInstagram className="h-4  text-black" /> 
  <div className="text-black text-sm text-center">
    Instagram
  </div>
  <BottomGradient />
</div>
</Link>

<Link href="https://www.linkedin.com/in/parag-ghatage-09685a314/">
<div
  className=" border border-black relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
> 
  <IconBrandLinkedin className="h-4  text-black" /> 
  <div className="text-black text-sm text-center">
    LinkedIn
  </div>
  <BottomGradient />
</div>
</Link>


</div>
        </div >
        
    </div>
    
  </div>
          
      </div>
    </div>
  );
}
const BottomGradient = () => {
  return (
    <div>
      <div className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <div className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </div>
  );
};

const LabelInputContainer = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};