import { useState } from "react";
import { NavLink } from "react-router";
import BurgerIcon from "./Icons/BurgerIcon.component";
import ThemeToggler from "./ThemeToggler.component";
import CrossIcon from "./Icons/CrossIcon.component";

const BurgerMenu = ({ menuList }) => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        setToggleMenu((state) => !state);
    }

    return (
        <>        
            <div className="relative px-[8px] group bg-white dark:bg-black" tabIndex={0}>
                <button className="hover:opacity-50" onClick={handleToggle}>
                    {
                        toggleMenu ? <CrossIcon width="32" height="32"/> : <BurgerIcon width="32" height="32" />
                    } 
                </button>
                <div className={`${toggleMenu ? "scale-y-100" : ""} duration-200 scale-y-0 origin-top absolute flex flex-col gap-[16px] mt-[8px] nav-bar text-h6 uppercase bg-white dark:bg-black p-[16px] left-[-8px] backdrop:bg-white w-screen`} aria-modal={true}>
                    <ThemeToggler />
                    {
                        menuList.map((element) => <NavLink key={element.id} to={element.path} className="mr-[49px] hover:opacity-50" onClick={handleToggle}>{element.desc}</NavLink>) 
                    }
                </div>
            </div>
        </>
    );
}

export default BurgerMenu;

