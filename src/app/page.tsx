'use client';
import React, { useState } from "react";
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Navbar from "@/components/Navbar";

export default function Home() {
  const [switchComp, setSwitchComp] = useState(false);

  return (
    <>
      {/* {switchComp ? (
        <Signup 
          onSwitchComponent={() => setSwitchComp(!switchComp)}
        />
      ):(
        <Login 
          onSwitchComp={() => setSwitchComp(!switchComp)}
        />
      )} */}

      <Navbar/>
    </>
  );
}