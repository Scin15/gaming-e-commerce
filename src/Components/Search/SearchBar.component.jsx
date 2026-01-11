import SearchIcon from "../Icons/SearchIcon.component";
import CrossIcon from "../Icons/CrossIcon.component";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useLocation } from "react-router";

const SearchBar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [searchString, setSearchString] = useState("");
    const onChange = (e) => {
        setSearchString(e.target.value);
        console.log(searchString);
    }

    const handleSearch = () => {
        navigate(`/catalog/?search=${searchString}`);
    }
    
    const handleCleanSearch = (location) => {
        console.log("Location:", location.pathname);
        if(location.pathname == "/catalog" || location.pathname == "/catalog/") {
            setSearchString("");
            navigate(`/catalog/?search=`);
            return;
        }
        setSearchString("");
    }

    return (
        <>
            <div className="focus-within:outline-1 focus-within:outline-[#2C2725]/25 flex justify-between rounded-[18px] py-[8px] px-[16px] bg-[#2C2725]/5 xl:w-[569px] sm:w-[450px] w-[200px]  dark:text-white/75 dark:bg-white/25">
                <input type="text" name="search" onChange={onChange} value={searchString} className="focus:outline-none w-full border-0 rounded-[18px] px-[8px]" placeholder="" />
                {
                    searchString.length > 0 && <button className="group border-r-[1px] border-black/50 dark:border-white opacity-50" onClick={()=>handleCleanSearch(location)}>
                        <CrossIcon width="32" height="32" />
                    </button>    
                }
                <button className="group" onClick={handleSearch}>
                    <SearchIcon width="32" height="32" />
                </button>
            </div>
        </>
    )
}

export default SearchBar;