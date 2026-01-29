import GameCard from "../Components/GameCard.component";
import { useEffect, useState, useRef } from "react";
import NavButtons from "../Components/NavButtons.component";
import { getAnimationClass } from "../Utils/animations";

const GameList = ( { items } ) => {

    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState("right");
    const [phase, setPhase] = useState("idle");

    items = items || [];

    const itemsPerPage = 6;
    const start = page * itemsPerPage;
    const visibleItems = items.slice(start, start + itemsPerPage);
    // se ho 8 elementi con pagine da 6, restituisce 1 come maxPage
    const maxPage = Math.ceil(items.length / itemsPerPage) - 1;
    
    if (!items || items instanceof Array && items.length === 0) {
        return (
            <>
                <div className="mt-[80px]">
                    <h4>Nessun prodotto trovato</h4>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="buttons mt-[80px]">
                <NavButtons page={page} setPage={setPage} maxPage={maxPage} phase={phase} setDirection={setDirection} setPhase={setPhase}/>
            </div>
            <div className={`cards mt-[54px] grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-[32px] 2xl:mx-[256px] transition-all duration-[300ms] ease-in ${getAnimationClass(phase, direction)}`}>
                {

                    visibleItems.map((element) => (
                        <GameCard className="" item={element} key={element._id} />
                    ))

                }
            </div>    
        </>
    )
}

export default GameList;
