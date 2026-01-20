import { handleTheme } from "../Utils/darkMode";
import NightIcon from "./Icons/NightIcon.component";
import DayIcon from "./Icons/DayIcon.component";

const ThemeToggler = () => {

    const switchTheme = () => {
        localStorage.theme === "dark" ? localStorage.theme = "light" : localStorage.theme = "dark"; 
        handleTheme();
    };

    return (
        <>
            <button className="hidden dark:flex hover:opacity-75" onClick={switchTheme}>
                <DayIcon width="24" height="24"/>
            </button>
            <button className="dark:hidden hover:opacity-75" onClick={switchTheme}>
                <NightIcon width="24" height="24"/>
            </button>
        </>
    )

};

export default ThemeToggler;