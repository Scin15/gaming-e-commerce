import { useRef } from "react";
import { NavLink } from "react-router";
import { handleScroll } from "../Utlis/animations";
import GameList from "../Components/GameList.component";
import { useProduct } from "../hooks/productHook";

const Home = () => {

    // hook per gestire lo scroll verso la sezione top 20
    const targetRef = useRef(null);
    // carico tutti i prodotti dal server
    const products = useProduct();
    console.log("Prodotti", products);

    return (
        <>
            <div className="home text-black flex-col z-0">
                <div className="bg-black bg-[url(background_2.jpg)] bg-cover mask-b-from-95%">
                    <div className="hero xl:h-screen pb-[40px] 2xl:px-[128px] md:px-[64px] px-[10px] pt-[168px]">
                        <h3 className="text-gradient text-h5 md:text-h3">Lo store di videogame definitivo</h3>
                        <div className="title-buttons mt-[16px]">
                            <h1 className="text-h4 md:text-h1 text-white ">Tutti gli ultimi titoli,<br />in un unico,<br />semplice store</h1>
                            <div className="flex">
                                <div className="subtitle-buttons 2xl:mt-[80px] mt-[40px]">
                                    <div>
                                        <h5 className="text-h6 md:text-h5 text-white">Scopri qui sotto i titoli del mese o sfoglia l'intero catalogo</h5>
                                    </div>
                                    <div className="call-to-action flex 2xl:mt-[64px] mt-[32px] justify-center text-h6">
                                        <div className="md:block flex flex-col gap-[16px] items-center">
                                            <button className="md:mr-[40px] shadow-md rounded-full 2xl:px[32px] px-[16px] py-[16px] 2xl:py-[16px] text-white bg-linear-to-r from-primary to-secondary hover:shadow-xl active:opacity-75 w-[230px]" onClick={() => handleScroll(targetRef)}>Titoli del mese</button>
                                            <NavLink to="catalog">
                                                <button className="rounded-full 2xl:px[32px] px-[16px] py-[16px] 2xl:py-[16px] text-primary hover:shadow-xl active:bg-black/5 xl:mt-0 xl:w-[258px] w-[230px] outline-[3px] outline-offset-[-3px]">Catalogo
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                </div>  
                <div className="flex-col text-center pt-[46px] mx-auto border-black/25 dark:border-white/25 2xl:px-[128px] md:px-[64px] px-[10px] pt-[32px]">
                    <div className="title scroll-mt-[112px]" ref={targetRef}>
                        <h4 className="text-primary">I migliori del mese</h4>
                        <h5 className="text-p md:text-h5">I migliori 20 titoli del mese in base a vendite, critica e apprezzamento del pubblico</h5>
                    </div>
                    <GameList items={products} itemsPerPage={6}></GameList>
                </div>
            </div>
        </>
    )
}

export default Home
