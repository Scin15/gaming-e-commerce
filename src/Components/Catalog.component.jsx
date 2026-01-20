import GameCard from "./GameCard.component";
import NavButtons from "./NavButtons.component";
import { useState, useEffect } from "react";
import items from "../DataBase/Games";
import FilterBar from "./FilterBar.component";
import categories from "../DataBase/Categories";

//const categoryNames = categories.map((element) => element.name)

const Catalog = () => {

    const [productsDisplay, setProductsDisplay] = useState([]);
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState("right");
    const [phase, setPhase] = useState("idle");
    const [filter, setFilter] = useState(0);

    useEffect(() => {
        setProductsDisplay(items);
    }, [])

    useEffect(() => {
        if( filter != 0 ) {
            const filtered = items.filter((element) => element.category_id == filter);
            setProductsDisplay(filtered);
            } else {
                setProductsDisplay(items);
            }
        }, [filter])

    const itemsPerPage = 6;
    const start = page * itemsPerPage;
    const visibleItems = productsDisplay.slice(start, start + itemsPerPage);
    const maxPage = Math.ceil(productsDisplay.length / itemsPerPage) - 1;

        const getAnimationClass = () => {
        if (phase === "exit") {
            return direction === "right"
            ? "-translate-x-50 opacity-0"
            : "translate-x-50 opacity-0";
        }

        if (phase === "enter") {
            return direction === "right"
            ? "translate-x-50 opacity-0"
            : "-translate-x-50 opacity-0";
        }

        return "translate-x-0 opacity-100";
    };

    const changePage = (newPage, dir) => {
        if (phase !== "idle") return;

        setDirection(dir);
        setPhase("exit");

        // dopo l'uscita, cambio pagina
        setTimeout(() => {
            setPage(newPage);
            setPhase("enter");
        }, 300);

        // dopo l'entrata, torno idle
        setTimeout(() => {
            setPhase("idle");
        }, 600);
    };

    return (
        <>
            <div className="mt-[168px] xl:mx-[128px] mx-[64px]">
                <div className="flex-col">
                    <div>
                        <FilterBar categories={categories} handleFilter={setFilter} />
                    </div>
                    <div className="buttons mt-[80px]">
                        <NavButtons page={page} setPage={setPage} maxPage={maxPage} changePage={changePage}/>
                    </div>
                    <div className={`cards mt-[54px] grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-[32px] 2xl:mx-[256px] transition-all duration-[300ms] ease-in ${getAnimationClass()}`}>
                        {
                            visibleItems.map((element) => (
                                <GameCard className="" product={element} />
                            ))
                        }
                    </div>  
                </div>
            </div>
        </>
    )
}

export default Catalog
