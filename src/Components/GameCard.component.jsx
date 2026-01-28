import { useDispatch } from "react-redux";
import { NavLink } from "react-router";
import PlatformIcon from "./PlatformIcon";
import { addItem } from "../Utils/cartManagement";

const GameCard = ({ item, className}) => {

    const dispatch = useDispatch();

    return (
        <>
            <div className={className ? className : ""}>
                <div className="card flex-col text-left text-h6 mb-[64px]">
                    <div className="relative overflow-hidden rounded-[18px]">
                        <div className="absolute left-[8px] top-[8px] z-100 rounded-full bg-white">
                            <PlatformIcon width={32} height={32} id={item.platform.tag}/>
                        </div>
                        <NavLink to={`/gameDetail/${item._id}`}>
                            <img className=" w-full h-full hover:scale-110 active:opacity-75 transition-transform duration-300" src={item.img_cover} alt={"cover image: " + item.title}/>
                        </NavLink>
                    </div>
                    <div className="info mt-[16px]">
                        <h6 className="mb-8px">{item.title}</h6>
                        <h6 className="opacity-75">{item.price + " €"}</h6>
                        <button className="shadow-md rounded-full px-[16px] py-[8px] xl:px-[32px] xl:py-[16px] text-white bg-linear-to-r from-primary to-secondary xl:text-h6 text-p hover:shadow-xl mt-[16px] active:opacity-75 w-full" onClick={() => addItem(item, dispatch)}>Aggiungi al carrello</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameCard
