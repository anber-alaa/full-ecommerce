import { Category } from "@/payload-types";
import Link from "next/link";

interface Props{
  category: Category;
  isOpen: boolean;
  position: {
    top: number;
    left: number;
  }
}

export const SubcategoryMenu = ({ category , isOpen , position}:Props) => {
  const subcategories = Array.isArray(category.subcategories) 
  ? category.subcategories as Category[]
  : (category.subcategories?.docs ?? []) as Category[];

if(!isOpen || subcategories.length === 0) return null;

const backgroundColor = category.color || "#F5F5F5";

  return(
    <div className="fixed z-100" 
    style={{
      top: position.top,
      left: position.left
    }}>

      {/* invisible bridge to maintain hover state */}
      <div className="h-3 w-60" />
      <div className="w-60 text-black rounded-md shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] `-translate-x-[2px]` `-translate-y-[2px]` overflow-hidden border"
        style={{ backgroundColor }}
      >
        <div>
          {category.subcategories?.map((subcategory: Category) =>(
            <Link 
            key={subcategory.slug} 
            href={`/category/${subcategory.slug}`}
            className="w-full text-left p-4 flex justify-between items-center underline font-medium hover:bg-black hover:text-white"
            >
            {subcategory.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}