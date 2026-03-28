import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Category } from '@/payload-types';

import Footer from './footer';
import Navbar from './navbar';
import SearchFilters from './search-filters';


interface props{
  children: React.ReactNode;
}

export default async function layout({children}:props) {
  const payload = await getPayload({
        config: configPromise,
  })
  
  const data = await payload.find({
    collection: 'categories',
    pagination:false,
    depth: 1, // populate subcategories , subcategories.[0] will be a type of category
    where:{
      parent:{
        exists: false
      }
    }
  })

  const formattedData = data.docs.map((doc)=>({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc)=>({
      //because of "depth 1" we are confident that "doc" will be Category
      ...(doc as Category),
      subcategories:undefined,
    }))
  }));
  
  
  
  console.log({formattedData , data});
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <SearchFilters data={formattedData}/>
      <div className='flex-1 bg-[#F4F4F0]'>
        {children}
      </div>
      <Footer/>
    </div>
  )
}
