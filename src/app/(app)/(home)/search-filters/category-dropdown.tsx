"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Category } from "@/payload-types";
import { useRef, useState } from "react";
import useDropdownPosition from "./use-dropdown-position";
import { SubcategoryMenu } from "./subcategory-menu";

interface Props{
  category: Category;
  isActive?: boolean;
  isNavigationHovered?: boolean;
}

export default function CategoryDropdown({ category , isActive , isNavigationHovered }:Props) {
  console.log("category:", category)
  console.log("subcategories:", category.subcategories)
  const [isOpen , setIsOPen] = useState(false)
  const dropDownRef = useRef<HTMLDivElement>(null);
  const {getDropdownPosition} = useDropdownPosition(dropDownRef);
  const onMouseEnter = () =>{
    if(category.subcategories){
      setDropDownPosition(getDropdownPosition())
      setIsOPen(true)
    }
  };

  const onMouseLeave = () => setIsOPen(false);
  const [dropDownPosition , setDropDownPosition] = useState({ top: 0, left: 0 });

  return (
    <div 
    className="relative"
    ref={dropDownRef}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    >
      <div className="relative">
        <Button 
          variant="elevated"
          className={cn("h-11 px-4 bg-transparent border-transparent rounded-full hover:bg-white hover:border-primary text-black"
            , isActive && !isNavigationHovered && "bg-white border-primary text-black"
          )}
          >
            {category.name}
        </Button>
        {(Array.isArray(category.subcategories) 
            ? category.subcategories.length > 0 
            : (category.subcategories?.docs ?? []).length > 0 )
          && (
          <div className={cn(
            "absolute opacity-0 -bottom-3 w-0 h-0 border-l-[10px] border-r-[10px] border-l-transparent border-r-transparent border-b-[10px] border-b-black left-1/2 -translate-x-1/2",
            isOpen && "opacity-100"
          )}/>
        )}
      </div>
      <SubcategoryMenu
      category ={category}
      isOpen={isOpen}
      position ={dropDownPosition}
      />
    </div>
  )
}