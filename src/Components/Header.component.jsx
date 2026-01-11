import { useState } from "react";
import { NavLink } from "react-router"
import { useSelector } from "react-redux";
import Logo from "./Icons/Logo.component";
import AccountIcon from "./Icons/AccountIcon.component";
import CartIcon from "./Icons/CartIcon.component";
import SearchIcon from "./Icons/SearchIcon.component";
import SearchBar from "./Search/SearchBar.component";
import ThemeToggler from "./ThemeToggler.component";
import CrossIcon from "./Icons/CrossIcon.component";

const Header = () => {

    const count = useSelector((state) => state.counter.value)
    const [searchMobile, setSearchMobile] = useState(false);

    const handleSearchMobile = () => {
        setSearchMobile((state) => !state);
    }

    return (
        <>
            <div className="absolute shadow-md h-[96px] text-p text-black fixed top-0 w-full z-100 bg-white dark:bg-black dark:text-white">
                <div className="header-content flex justify-between items-center mx-[40px] h-full">
                    <div className="logo-nav-bar flex justify-between items-center">
                        <NavLink to="/">
                            <Logo />
                        </NavLink>
                        <div className="nav-bar text-h6 uppercase ml-[64px]">
                            <NavLink to="/" className="mr-[49px] hover:opacity-50">Home</NavLink>
                            <NavLink to="catalog" className="hover:opacity-50">Categorie</NavLink>
                        </div>
                    </div>
                    {/* <div className="focus-within:outline-1 focus-within:outline-[#2C2725]/25 hidden xl:flex justify-between rounded-[18px] py-[8px] px-[16px] bg-[#2C2725]/5 xl:w-[569px] sm:w-[450px] w-[200px] 2xl:absolute 2xl:left-1/2 2xl:-translate-x-1/2">
                        <input type="text" className="focus:outline-none w-full border-0 rounded-[18px] px-[8px]" placeholder="" />
                        <button className="group">
                            <SearchIcon />
                        </button>

                    </div> */}
                    <div className="hidden xl:block 2xl:absolute 2xl:left-1/2 2xl:-translate-x-1/2">
                        <SearchBar />
                    </div>
                    <div className="flex justify-center items-center gap-[8px]">
                        <button className="xl:hidden hover:opacity-75 mt-[3px] mx-[16px]" onClick={handleSearchMobile}>
                            <SearchIcon width="32" height="32" />
                        </button>
                        { searchMobile &&
                            <div className="absolute left-0 w-full h-full bg-white dark:bg-black flex justify-between px-[16px] items-center">
                                <div>
                                    <SearchBar />
                                </div>
                                <button onClick={handleSearchMobile}>
                                    <CrossIcon width="32" height="32" />
                                </button>
                            </div> }
                        <div className="mr-[16px] mt-[4px]">
                            <ThemeToggler />
                        </div>
                        <NavLink className="" to="cart">

                            <CartIcon />
                            {count > 0 && (
                                <span className="
                                absolute 
                                top-0 
                                right-3 
                                flex 
                                h-5 
                                w-5 
                                items-center 
                                justify-center 
                                rounded-full 
                                bg-primary 
                                text-xs 
                                font-bold 
                                text-white
                                ">
                                {count}
                                </span>
                            )}
                        </NavLink>
                        <NavLink to="account" className="">
                            <AccountIcon />
                        </NavLink>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Header

