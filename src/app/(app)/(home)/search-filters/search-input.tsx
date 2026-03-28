import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface Props{
  disabled?: boolean;
}


export default function SearchInput({ disabled }:Props) {
  return (
    <>
      <div className="flex items-center gap-2 w-full">
        <div className="relative w-full">
          <SearchIcon className="absolute left-3 top-1/2 size-4 transform -translate-y-1/2 text-neutral-500"/>
          <Input className="pl-8" placeholder="Search Products.." disabled={disabled}/>
        </div>
        {/* toDo : Add category view all buttons */}
        {/* toDo : Add library button */}
      </div>
    </>
  )
}
