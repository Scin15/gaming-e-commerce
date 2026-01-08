import ps5 from "../assets/Homepage/playstation5.png";
import xbox_series from "../assets/Homepage/xbox_series.png";
import switch2 from "../assets/Homepage/switch2.png";
import GameCard from "./GameCard.component";
import { useEffect, useState, useRef } from "react";
import NavButtons from "./NavButtons.component";
import Counter from "./counter.component";
import { NavLink } from "react-router";
import items from "../DataBase/Games";

const Home = () => {

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

    const handleScroll = () => {
        targetRef.current?.scrollIntoView({ behavior: "smooth",
            block: "start",
         });
    }

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

    useEffect(()=>{
        const timer = setTimeout(()=> {
            setStartAnimation(true)
        }, 500)
    }, [])

    return (
        <>
            <div className="home text-black flex-col mt-[168px] xl:mx-[128px] mx-[64px]  z-0">
                <div className="hero xl:h-screen pb-[40px]">
                    <div className={`${startAnimation ? "duration-800" : "-translate-x-50 opacity-0"}`}>
                        <h3 className="text-gradient">Lo store di videogame definitivo</h3>
                    </div>
                    <div className="title-buttons mt-[16px]">
                        <div className={`${startAnimation ? "duration-800" : "translate-x-50 opacity-0"}`}>
                            <h1>Tutti gli ultimi titoli,<br />in un unico,<br />semplice store</h1>
                        </div>
                        <div className="flex">
                            <div className="subtitle-buttons xl:mt-[80px] mt-[40px]">
                                <div className={`${startAnimation ? "duration-800" : "-translate-x-50 opacity-0"}`}>
                                    <h5>Scopri qui sotto i titoli del mese o sfoglia l'intero catalogo</h5>
                                </div>
                                <div className="call-to-action flex xl:mt-[64px] text-h6">
                                    <div className={`${startAnimation ? "duration-800" : "translate-y-50 opacity-0"}`}>
                                        <button className="mr-[40px] shadow-md rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-white bg-linear-to-r from-primary to-secondary hover:shadow-xl active:opacity-75 w-[230px]" onClick={handleScroll}>Titoli del mese</button>
                                        <NavLink to="catalog">
                                            <button className="rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-secondary hover:shadow-xl active:bg-black/5 xl:mt-0 mt-[32px] xl:w-[258px] w-[230px] outline-[3px] outline-offset-[-3px]">Catalogo
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className={`${startAnimation ? "xl:flex hidden translate-y-0 duration-800 opacity-100" : "xl:flex hidden translate-y-100 opacity-0"}`}>
                                <img src={ps5} alt="" className="xl:w-[272px] xl:h-[330px] w-[122] h-[180px] top-[433px] right-[822px]"/>
                                <img src={xbox_series} alt="" className="xl:w-[272px] xl:h-[330px] w-[122] h-[180px]"/>
                                <img src={switch2} alt="" className="xl:w-[272px] xl:h-[330px] w-[122] h-[180px]"/>
                            </div>
                        </div>

                    </div>
                </div>  
                <div className={`flex-col text-center pt-[46px] mx-auto border-t-1 border-black/25 ${startAnimation ? "duration-800" : "translate-y-50 opacity-0"}`}>
                    <div className="title" ref={targetRef}>
                        <h4 className="text-primary">I migliori del mese</h4>
                        <h5>I migliori 20 titoli del mese in base a vendite, critica e apprezzamento del pubblico</h5>
                    </div>
                    <div className="buttons mt-[80px]">
                        <NavButtons page={page} setPage={setPage} maxPage={maxPage} changePage={changePage}/>
                    </div>
                    <div className={`cards mt-[54px] grid grid-cols-3 grid-rows-2 gap-[32px] 2xl:mx-[256px] transition-all duration-[300ms] ease-in ${getAnimationClass()}`}>
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

export default Home