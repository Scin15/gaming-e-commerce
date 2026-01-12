import { NavLink } from "react-router";
import BurgerMenu from "./BurgerMenu.component";

const NavBar = ({ menuList }) => {

    return (
        <>
            <div className="nav-bar text-h6 uppercase ml-[64px] hidden md:flex">
                {menuList.map((element) => <NavLink key={element.id} to={element.path} className="mr-[49px] hover:opacity-50">{element.desc}</NavLink> )}
            </div>
            <div className="md:hidden" >
                <BurgerMenu menuList={menuList} />
            </div>
        </>
    );
}

export default NavBar; 