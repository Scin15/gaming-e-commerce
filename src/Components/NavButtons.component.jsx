import LeftArrow from "./Icons/LeftArrow.component";
import RightArrow from "./Icons/RightArrow.component";

const NavButtons = ({ page, setPage, maxPage, changePage }) => {

    return (
        <>
            <div className="nav-buttons flex justify-center">
                <button className="left hover:bg-black/25 active:opacity-50 rounded-full disabled:opacity-10" onClick={() => changePage(page - 1, "left")} disabled={page === 0}>
                    <LeftArrow />
                </button>
                <button className="right hover:bg-black/25 active:opacity-50 rounded-full disabled:opacity-10" onClick={() => changePage(page + 1, "right")} disabled={page === maxPage}>
                    <RightArrow />
                </button>
            </div>
        </>
    )
}

export default NavButtons