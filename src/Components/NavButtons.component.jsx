import LeftArrow from "./Icons/LeftArrow.component";
import RightArrow from "./Icons/RightArrow.component";
import { changePage } from "../utils/animations";

const NavButtons = ({ page, maxPage, setPage, setDirection, setPhase, phase }) => {

    return (
        <>
            <div className="nav-buttons flex justify-center dark:text-white text-black">
                <button className="left hover:bg-black/25 active:opacity-50 rounded-full disabled:opacity-10" onClick={() => changePage(page - 1, "left", phase, setDirection, setPhase, setPage)} disabled={page === 0}>
                    <LeftArrow />
                </button>
                <button className="right hover:bg-black/25 active:opacity-50 rounded-full disabled:opacity-10" onClick={() => changePage(page + 1, "right", phase, setDirection, setPhase, setPage)} disabled={page === maxPage}>
                    <RightArrow />
                </button>
            </div>
        </>
    )
}

export default NavButtons