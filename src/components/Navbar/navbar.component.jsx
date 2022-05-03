import React from "react";
import { BiMenu, BiChevronRight ,BiSearch, BiChevronDown} from "react-icons/bi";

const NavbarSm = () => {
    return (
    <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold">It All Starts Here!</h2>
                <span className="text-gray-400 text-xs flex items-center">
                    Mumbai<BiChevronRight />
                </span>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full" />
            </div>
        </div>
    </>
    );
};

const NavbarMd = () => {
    return (
        <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded-md">
            <BiSearch />
            <input type="search" className="w-full bg-transparent border-none focus:outline-none"  placeholder="Search for movies, events, plays, sports and activities."/>
        </div>
    );
};

const NavbarLg = () => {
    return (
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center w-1/2 gap-3">
                <div className="w-12 h-12">
                    <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full" />
                </div>
                <div className="w-full flex items-center gap-3 bg-white py-2 px-3 rounded-md">
                    <BiSearch />
                    <input type="search" className="w-full bg-transparent border-none focus:outline-none"  placeholder="Search for movies, events, plays, sports and activities."/>
                </div>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-gray-200 text-xs flex items-center cursor-pointer hover:text-white">Mumbai<BiChevronDown /></span>
                <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">Sign in</button>
                <div className="w-8 h-8 text-white">
                    <BiMenu className="w-full h-full"/>
                </div>
            </div>
        </div>
    )
};

const Navbar = () => {
    return( 
    <>
        <nav className="bg-bms-700 p-4">
            <div className="md:hidden">
                <NavbarSm />
            </div>
            <div className="hidden md:flex lg:hidden">
                <NavbarMd />
            </div>
            <div className="hidden w-full lg:flex">
                <NavbarLg />
            </div>
        </nav>
    </>
  );
};

export default Navbar;