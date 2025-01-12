import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import AppLayout from "@/components/ui/AppLayout"

const NavBar = () => {
  return (
    <div className="flex items-center justify-between">
    <AppLayout>
    <div className="w-full  h-16 bg-zinc-900  flex items-center justify-end   ">
       <div className = "mr-5" >
       <Avatar >
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
       </div>
    </div>
    </AppLayout>
    </div>
  );
};

export default NavBar;
