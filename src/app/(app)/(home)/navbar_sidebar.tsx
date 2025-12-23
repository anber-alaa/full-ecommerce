import { Sheet, SheetContent, SheetHeader, SheetTitle} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface NavbarItem{
  href:string;
  children:React.ReactNode;
}
interface props{
  items:NavbarItem[];
  open:boolean;
  onOpenChange:(open:boolean)=>void;
}


export default function NavbarSidebar({items,open,onOpenChange}:props) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto pb-2 h-full">
          {items.map((item)=>(
            <Link
            onClick={() => onOpenChange(false)}
            key={item.href}
            href={item.href}
            className="w-full p-4 text-left hover:bg-black text-base font-medium hover:text-white flex items-center"
            >
              {item.children}
            </Link>
          ))}

          <div className="border-t">
            <Link
            onClick={() => onOpenChange(false)}
            href="/sign-in" className="w-full p-4 text-left hover:bg-black text-base font-medium hover:text-white flex items-center">
              Log in
            </Link>
            <Link 
            onClick={() => onOpenChange(false)}
            href="/sign-up" className="w-full p-4 text-left hover:bg-black text-base font-medium hover:text-white flex items-center">
              Start selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
