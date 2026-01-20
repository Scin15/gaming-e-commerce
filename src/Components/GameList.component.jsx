// import ps5 from "../assets/Homepage/playstation5.png";
// import xbox_series from "../assets/Homepage/xbox_series.png";
// import switch2 from "../assets/Homepage/switch2.png";
import GameCard from "../Components/GameCard.component";
import { useEffect, useState, useRef } from "react";
import NavButtons from "../Components/NavButtons.component";
import { getAnimationClass } from "../Utils/animations";

const GameList = ( { items } ) => {

    const [startAnimation, setStartAnimation] = useState(false)
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState("right");
    const [phase, setPhase] = useState("idle");

    // hook per gestire lo scroll verso la sezione top 20
    const targetRef = useRef(null);
    
    const itemsPerPage = 6;
    const start = page * itemsPerPage;
    const visibleItems = items.slice(start, start + itemsPerPage);
    const maxPage = Math.ceil(items.length / itemsPerPage) - 1;

    useEffect(()=>{
        setTimeout(()=> {
            setStartAnimation(true)
        }, 500)
    }, [])

    return (
        <>
            <div className="buttons mt-[80px]">
                <NavButtons page={page} setPage={setPage} maxPage={maxPage} phase={phase} setDirection={setDirection} setPhase={setPhase}/>
            </div>
            <div className={`cards mt-[54px] grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-[32px] 2xl:mx-[256px] transition-all duration-[300ms] ease-in ${getAnimationClass(phase, direction)}`}>
                {

                    visibleItems.map((element) => (
                        <GameCard className="" item={element} key={element.id} />
                    ))

                }
            </div>    
        </>
    )
}

export default GameList;
