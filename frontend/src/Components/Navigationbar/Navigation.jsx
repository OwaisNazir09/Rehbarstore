// JSX Code
import React from 'react';
import './Navigation.css';
import addIcon from '../../assets/add.png'
import img from '../../assets/img1.webp'
import bookIcon from '../../assets/book.png'
import clothes from '../../assets/clothes.png'
import emailIcon from '../../assets/email.png'
import menuIcon from '../../assets/icons8-menu-50.png'
import home from '../../assets/home-icon-silhouette.png'
import magicIcon from '../../assets/magic-wand.png'
import cookie from '../../assets/icons8-cookie-48.png'


import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
// import DarkMode from "./DarkMode";
import { FiShoppingBag } from "react-icons/fi";


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "New Releases",
    link: "/#services",
  },
  {
    id: 3,
    name: "Publishers",
    link: "/#",
  },
  // {
  //   id: 4,
  //   name: "Books",
  //   link: "/#",
  // },
  // {
  //   id: 5,
  //   name: "Clothing",
  //   link: "/#",
  // },
  // {
  //   id: 6,
  //   name: "Attar / Perfume",
  //   link: "/#",
  // },
  // {
  //   id: 5,
  //   name: "Dry-Fruits",
  //   link: "/#",
  // },
];

const DropdownLinksBooks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const DropdownLinksClothes = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
const DropdownLinksDryFruits = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];
const Navigation = ({ handleOrderPopup }) => {
  return (
   <>
<div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
    {/* upper Navbar */}
<div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-xl items-center flex gap-1">
              {/* <FiShoppingBag size="30" />
              ShopMe */}
<img src={img} alt="" className='logo'/>
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search for products"
                className="w-[00px] sm:w-[200px] group-hover:w-[500px] transition-all duration-300 rounded-lg border border-yellow-300
                 py-1 px-2
                text-sm focus:outline-none 
                // focus:border-1
                 focus:border-primary dark:border-gray-500 dark:bg-slate-800 "
              />
              <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer bg-green-800"  />
            </button>

            {/* Darkmode Switch */}
            <div>
              {/* <DarkMode /> */}
            </div>
          </div>
        </div>
      </div>
 {/* lower Navbar */}
 <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links1 */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
           Books
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinksBooks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </li>
   {/* Simple Dropdown and Links2 */}
   <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
           Clothing
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2
             text-black ">
              <ul>
                {DropdownLinksClothes.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </li>
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
            Attar / Perfume
              {/* <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span> */}
            </a>
            {/* <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinksBooks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

          </li>
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
            Dry-Fruits
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinksDryFruits.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </li>
        </ul>
      </div>
      </div>

   </>
  
  );
};


export default Navigation;
