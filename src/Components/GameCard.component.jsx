import resident_evil from "../assets/Giochi/Resident Evil Requiem/resident_evil.png"
import { decrement, increment } from "../state/counter/counterSlice";
import { add } from "../state/cart/cartSlice";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router";
import SteamIcon from "./Icons/SteamIcon.component";
import PlatformIcon from "./PlatformIcon";

const GameCard = ({ product, className}) => {

    const dispatch = useDispatch();
    console.log(product)

    const handleClick = () => {
        dispatch(increment());
        dispatch(add(product));
    }

    return (
        <>
            <div className={className ? className : ""}>
                <div className="card flex-col text-left text-h6 mb-[64px]">
                    <div className="relative overflow-hidden rounded-[18px]">
                        <div className="absolute left-[8px] top-[8px] z-100 rounded-full bg-white">
                            <PlatformIcon width={32} height={32} id={product.platform_id}/>
                        </div>
                        <NavLink to={`/gameDetail/${product.id}`}>
                            <img className=" w-full h-full hover:scale-110 active:opacity-75 transition-transform duration-300" src={product.cover_image_url} alt="" />
                        </NavLink>
                    </div>
                    <div className="info mt-[16px]">
                        <h6 className="mb-8px">{product.title}</h6>
                        <h6 className="opacity-75">{product.price + " €"}</h6>
                        <button className="xl:flex shadow-md rounded-full px-[16px] py-[8px] xl:px-[32px] xl:py-[16px] text-white bg-linear-to-r from-primary to-secondary xl:text-h6 text-p hover:shadow-xl mt-[16px] active:opacity-75" onClick={handleClick}>Aggiungi al carrello</button>
                        {/* <button className="xl:hidden shadow-md border-[3px] border-secondary rounded-full w-[32px] h-[32px] p-[4px] text-secondary text-h6 hover:shadow-xl mt-[16px]" onClick={handleClick}>+</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default GameCard
