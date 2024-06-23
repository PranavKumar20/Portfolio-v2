"use client";
import React from'react';
import { useRouter } from "next/navigation";

export const Navbar = ()=>{
    const router = useRouter();
    return <div className="text-[0.8rem] md:text-[1.3rem] py-2 font-thin " >
        <button className="pr-4" onClick={()=>router.push('/')} >Home</button>
        <button className="pr-4" onClick={()=>router.push('/blog')} >Blog</button>
        <button className="pr-4" onClick={()=>router.push('/projects')} >Projects</button>
        <button className="pr-4" onClick={()=>router.push('/resume')} >Resume</button>
    </div>
}