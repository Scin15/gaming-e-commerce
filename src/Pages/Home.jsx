import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router";
import items from "../DataBase/Games";
import { handleScroll } from "../Utils/animations";
import GameList from "../Components/GameList.component";

const Home = () => {

    const [startAnimation, setStartAnimation] = useState(false)

    // hook per gestire lo scroll verso la sezione top 20
    const targetRef = useRef(null);

    useEffect(()=>{
        const timer = setTimeout(()=> {
            setStartAnimation(true)
        }, 500)
    }, [])

    return (
        <>
            <div className="home text-black flex-col pt-[168px] 2xl:px-[128px] px-[64px] z-0">
                <div className="hero xl:h-screen pb-[40px]">
                    <div className={`${startAnimation ? "duration-800" : "-translate-x-50 opacity-0"}`}>
                        <h3 className="text-gradient">Lo store di videogame definitivo</h3>
                    </div>
                    <div className="title-buttons mt-[16px]">
                        <div className={`${startAnimation ? "duration-800" : "translate-x-50 opacity-0"}`}>
                            <h1>Tutti gli ultimi titoli,<br />in un unico,<br />semplice store</h1>
                        </div>
                        <div className="flex">
                            <div className="subtitle-buttons 2xl:mt-[80px] mt-[40px]">
                                <div className={`${startAnimation ? "duration-800" : "-translate-x-50 opacity-0"}`}>
                                    <h5>Scopri qui sotto i titoli del mese o sfoglia l'intero catalogo</h5>
                                </div>
                                <div className="call-to-action flex 2xl:mt-[64px] mt-[32px] text-h6">
                                    <div className={`${startAnimation ? "duration-800" : "translate-y-50 opacity-0"}`}>
                                        <button className="mr-[40px] shadow-md rounded-full 2xl:px[32px] px-[16px] py-[8px] 2xl:py-[16px] text-white bg-linear-to-r from-primary to-secondary hover:shadow-xl active:opacity-75 w-[230px]" onClick={() => handleScroll(targetRef)}>Titoli del mese</button>
                                        <NavLink to="catalog">
                                            <button className="rounded-full 2xl:px[32px] px-[16px] py-[8px] 2xl:py-[16px] text-secondary hover:shadow-xl active:bg-black/5 xl:mt-0 mt-[32px] xl:w-[258px] w-[230px] outline-[3px] outline-offset-[-3px]">Catalogo
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            {/* <div className={`${startAnimation ? "2xl:flex hidden translate-y-0 duration-800 opacity-100" : "xl:flex hidden translate-y-100 opacity-0"}`}>
                                <img src={ps5} alt="" className="xl:w-[272px] xl:h-[330px] w-[122] h-[180px] top-[433px] right-[822px]"/>
                                <img src={xbox_series} alt="" className="xl:w-[272px] xl:h-[330px] w-[122] h-[180px]"/>
                                <img src={switch2} alt="" className="xl:w-[272px] xl:h-[330px] w-[122] h-[180px]"/>
                            </div> */}
                        </div>

                    </div>
                </div>  
                <div className={`flex-col text-center pt-[46px] mx-auto border-t-1 border-black/25 dark:border-white/25 ${startAnimation ? "duration-800" : "translate-y-50 opacity-0"}`}>
                    <div className="title scroll-mt-[112px]" ref={targetRef}>
                        <h4 className="text-primary">I migliori del mese</h4>
                        <h5>I migliori 20 titoli del mese in base a vendite, critica e apprezzamento del pubblico</h5>
                    </div>
                    <GameList items={items}></GameList>
                </div>
            </div>
        </>
    )
}

export default Home
