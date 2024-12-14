import Image from 'next/image';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import foodlogo from "./public/Foodtuck.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from 'next/link';

const Nav = () => {
  return (
    <div className="w-full flex flex-col lg:px-[100px] px-[20px] lg:py-[20px] py-[10px] bg-[#0D0D0DF2]">
      <div className="w-full h-[50px] bg-[#0D0D0DF2] text-white flex justify-center items-center px-4">
      <h2 className="text-[24px] font-bold"><span className="text-[#FF9F0D]">Food</span>Tuck</h2>
      </div>
      <div className="hidden lg:flex justify-between items-center">
        <ul className='text-whitetext flex gap-[10px] font-medium leading-[24px] text-[15px] '>
        <Link href={"/"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Home</li></Link>
        <Link href={"/ourmenu"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Menu</li></Link>
        <li className='w-[45px] h-[24px] font-medium leading-[24px] '>Blog</li>
        <Link href={"/ourchef"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Chef</li></Link>
        <li className='w-[45px] h-[24px] font-medium leading-[24px] '>About</li>
        <Link href={"/shop"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Shop</li></Link>
        <Link href={"/signin"}><li className='w-[45px] h-[24px] font-medium leading-[24px] '>Signin</li></Link>
      </ul>
        <div className="flex items-center gap-[15px]">
            <div className="flex items-center gap-[10px] px-[15px] py-[5px] border border-bordercoloryello rounded-2xl">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-whitetext text-[14px] placeholder:text-whitetext w-full"
            />
            <IoSearch className="text-whitetext w-[20px] h-[20px]" />
          </div>

          {/* Shopping Bag */}
          <Link href={"/shoppingcart"}><HiOutlineShoppingBag className="text-whitetext text-[24px] cursor-pointer" /></Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex justify-between  px-[30px]">
        <Image src={foodlogo} alt="logo" className="w-[150px] h-auto" />
        <Sheet>
          <SheetTrigger>
            <GiHamburgerMenu className="text-whitetext text-[34px] cursor-pointer" />
          </SheetTrigger>
          <SheetContent>
            <ul className="flex flex-col gap-[10px] font-medium text-[16px] text-blackkk">
              <li className="hover:text-bordercoloryello cursor-pointer"><Link href="/">Home</Link></li>
            <li className="hover:text-bordercoloryello cursor-pointer"><Link href="/ourmenu">Menu</Link></li>
            
            <li className="hover:text-bordercoloryello cursor-pointer"><Link href="/ourchef">Chef</Link></li>
           
            <li className="hover:text-bordercoloryello cursor-pointer"><Link href="/shop">Shop</Link></li>
            <li className="hover:text-bordercoloryello cursor-pointer"><Link href="/signin">Signin</Link></li>
               <li className="hover:text-bordercoloryello cursor-pointer"><Link href="/aboutus">About</Link></li>
              <li className="hover:text-bordercoloryello cursor-pointer"><Link href="/blog">Blog</Link></li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Nav;
