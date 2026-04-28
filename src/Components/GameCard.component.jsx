import { useDispatch } from "react-redux";
import { NavLink } from "react-router";
import PlatformIcon from "./PlatformIcon";
import { addItem } from "../Utlis/cartManagement";

const GameCard = ({ item, className}) => {

    const dispatch = useDispatch();

    return (
        <>
            <div className={className ? className : ""}>
                <div className=" bg-gradient-to-r from-secondary to-primary card flex-col text-left text-h6 mb-[32px] md:mb-[64px] rounded-[8px] overflow-hidden card-border">
                    <div className="relative overflow-hidden rounded-[18px]-- 2xl:h-[300px] md:h-[200px]">
                        <div className="absolute left-[8px] top-[8px] z-100 rounded-full bg-white">
                            <PlatformIcon width={32} height={32} id={item.platform?.tag}/>
                        </div>
                        <NavLink to={`/gameDetail/${item.id}`}>
                            <img className=" w-full h-full hover:scale-110 active:opacity-75 transition-transform duration-300" src={item.background_image} alt={"cover image: " + item.title}/>
                        </NavLink>
                    </div>
                    <div className="info mt-[16px] px-[16px] pb-[16px]">
                        <h6 className="mb-8px">{item.name}</h6>
                        <h6 className="opacity-75">{item.price + " €"}</h6>
                        <button className="main-button-black xl:text-h6 text-p mt-[16px] w-full" onClick={() => addItem(item, dispatch)}>Aggiungi al carrello</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameCard
