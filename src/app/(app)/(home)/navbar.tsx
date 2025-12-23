"use client"

import Link from "next/link"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { MenuIcon } from "lucide-react"
import NavbarSidebar from "./navbar_sidebar"

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

interface NavbarItemProps{
  href:string;
  children:React.ReactNode;
  isActive?:boolean;
}
const NavbarItem =({
  href,
  children,
  isActive,
}:NavbarItemProps)=>{
  return(
    <Button asChild variant="outline" className={cn("bg-transparent hover:bg-transparent rounded-full border-transparent hover:border-primary px-3.5 text-lg", isActive && "text-white hover:bg-black hover:text-white bg-black font-semibold")}>
      <Link href={href}>
      {children}
      </Link>
    </Button>
  );
};
const navbarItems = [
  {href:'/', children:'Home'},
  {href:'/about', children:'About'},
  {href:'/features', children:'Features'},
  {href:'/pricing', children:'Pricing'},
  {href:'/contact', children:'Contact'},
]


export default function Navbar() {
  const pathname = usePathname()
  const [isSidebarOpen , setIsSidebarOpen] = useState(false);
  return (
    <nav className='h-20 flex border-b justify-between font-medium bg-white'>
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>LOGO</span>
      </Link>
      <NavbarSidebar
      items={navbarItems}
      open={isSidebarOpen}
      onOpenChange={setIsSidebarOpen}
      />
      <div className="items-center lg:flex gap-4 hidden">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href ={item.href}
            isActive={pathname === item.href}
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
      <div className="hidden lg:flex">
        <Button
        asChild
        variant="secondary"
        className="border-l border-t-0 border-b-0 border-r-0 hover:bg-pink-400 transition-colors text-lg px-12 h-full bg-white rounded-none"
        >
          <Link href="/signin">Log in</Link>
        </Button>
        <Button
        asChild
        variant="secondary"
        className="border-l border-t-0 border-b-0 text-white border-r-0 hover:bg-pink-400 hover:text-black transition-colors text-lg px-12 h-full bg-black rounded-none"
        >
          <Link href="/signup">
            Start selling
          </Link>
        </Button>
      </div>


      <div className="flex items-center justify-center lg:hidden">
        <Button 
        variant="ghost"
        className="size-12 bg-white border-transparent"
        onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon/>
        </Button>
      </div>
    </nav>
  )
}
