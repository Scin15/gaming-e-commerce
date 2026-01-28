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
import NavBar from "./NavBar";
import menuList from "../DataBase/MenuList";

const Header = () => {

    const count = useSelector((state) => state.counter.value)
    const [searchMobile, setSearchMobile] = useState(false);

    const handleSearchMobile = () => {
        setSearchMobile((state) => !state);
    }

    return (
        <>
            <div className="absolute shadow-md h-[96px] text-p text-black fixed top-0 w-screen z-100 bg-white/75 dark:bg-black/75 dark:text-white">
                <div className="flex justify-between items-center mx-[8px] md:mx-[40px] h-full">
                    <div className="logo-nav-bar flex justify-between items-center">
                        <NavLink className="hidden md:block" to="/">
                            <Logo width="105" height="105" />
                        </NavLink>
                        <div>
                            <NavBar menuList={menuList} />
                        </div>
                    </div>
                    <div className="hidden xl:block 2xl:absolute 2xl:left-1/2 2xl:-translate-x-1/2">
                        <SearchBar />
                    </div>
                    <div className="flex justify-center items-center gap-[4px]">
                        <button className="xl:hidden hover:opacity-75 mt-[3px] mx-[16px]" onClick={handleSearchMobile}>
                            <SearchIcon width="32" height="32" />
                        </button>
                        { searchMobile &&
                            <div className="absolute left-0 w-full h-full bg-white dark:bg-black flex justify-between px-[16px] items-center z-150 gap-[32px]">
                                <div className="grow-1">
                                    <SearchBar />
                                </div>
                                <button className="" onClick={handleSearchMobile}>
                                    <CrossIcon width="32" height="32" />
                                </button>
                            </div> }
                        <div className="mr-[16px] mt-[4px] hidden md:block">
                            <ThemeToggler />
                        </div>
                        <div className="flex gap-[4px] md:gap-[16px] border-l-[1px] pl-[16px]">
                            <NavLink className="relative z-100 hover:opacity-50" to="cart">
                                <CartIcon width="32" height="32"/>
                                {count > 0 && (
                                    <span className="
                                    absolute 
                                    -top-1 
                                    -right-1 
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
                            <NavLink to="account" className="hover:opacity-50">
                                <AccountIcon width="32" height="32"/>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Header

