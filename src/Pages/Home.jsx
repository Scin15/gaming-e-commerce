import { useRef } from "react";
import { NavLink } from "react-router";
import { handleScroll } from "../Utlis/animations";
import GameList from "../Components/GameList.component";
import { useProduct } from "../hooks/productHook";
import Button from "../Components/Button.component";

const Home = () => {

    // hook per gestire lo scroll verso la sezione top 20
    const targetRef = useRef(null);
    // carico tutti i prodotti dal server
    const products = useProduct();

    return (
        <>
            <div className="home text-black flex-col -z-20 ">
                <div className="bg-black bg-[url(background-3.png)] bg-cover mask-b-from-95%d sticky top-0 z-10">
                    <div className="animation hero xl:h-screen pb-[40px] 2xl:px-[128px] md:px-[64px] px-[10px] pt-[128px]">
                        <h3 className="text-gradient text-center">Lo store di videogame definitivo</h3>
                        <div className="title-buttons mt-[16px]">
                            <h1 className="text-white text-center">Tutti gli ultimi titoli,<br />in un unico,<br />semplice store</h1>
                            <div className="flex justify-center">
                                <div className="subtitle-buttons 2xl:mt-[80px] mt-[40px]">
                                    <div>
                                        <h5 className="h5 text-white text-center">Scopri qui sotto i titoli del mese o sfoglia l'intero catalogo</h5>
                                    </div>
                                    <div className="call-to-action flex 2xl:mt-[64px] mt-[32px] justify-center text-h6">
                                        <div className="md:block flex flex-col gap-[16px] items-center">
                                            <div className="flex flex-col md:flex-row gap-[16px]">
                                                <button className="secondary-button" onClick={() => handleScroll(targetRef)}>Titoli del mese</button>
                                                <NavLink to="catalog">
                                                    <button className="main-button">Catalogo</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
                <div className="relative z-20">
                    <div className="flex-col bg-[url(background-5.png)] dark:bg-[url(background-4.png)] text-center pt-[46px] mx-auto border-black/25 dark:border-white/25 2xl:px-[64px] md:px-[64px] px-[10px] pt-[32px]">
                        <div className="title scroll-mt-[112px]" ref={targetRef}>
                            <h4 className="text-primary">I migliori del mese</h4>
                            <h5 className="text-p md:text-h5">I migliori 20 titoli del mese in base a vendite, critica e apprezzamento del pubblico</h5>
                        </div>
                        <GameList items={products} itemsPerPage={8}></GameList>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
