import items from "../DataBase/Games";
import { useParams } from "react-router";
import resident_evil from "../assets/Giochi/Resident Evil Requiem/resident_evil.png";
import { increment } from "../state/counter/counterSlice";
import { add } from "../state/cart/cartSlice";
import { useDispatch } from "react-redux";
import PlatformIcon from "../Components/PlatformIcon";

const GameDetail = ( { id } ) => {

    const dispatch = useDispatch();
    const params = useParams();
    const game = items[params.id];

    const handleClick = () => {
        console.log("Gioco ad aggiungere: ", game)
        dispatch(add(game));
        dispatch(increment());
    }

    return (
        <>
            <div className="py-[168px] 2xl:mx-[512px] md:mx-[128px] mx-[32px] min-h-screen relative">
                <div className="flex justify-center mb-[32px]">
                    <div className="absolute left-[8px] top-[-10px]">
                        {<PlatformIcon width={64} height={64} id={game.platform_id}/>}
                    </div>
                    <div className="">
                        <h5 className="object-center">{game.title}</h5>
                    </div>
                </div>


                <div className="gap-[8px] md:gap-[32px] grid grid-cols-2">
                    <div className="flex-col gap-[24px]">
                        <img src={game.cover_image_url} alt="" className="hover:opacity-75 focus:absolute focus:opacity-100 focus:top-[168px] focus:left-0 hover:cursor-pointer" tabIndex={0} />
                        <div className="flex flex-col gap-[32px] items-center mt-[24px]">
                            <h5>{`${game.price} €`}</h5>
                            <button className="shadow-md rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-white bg-linear-to-r from-primary to-secondary hover:shadow-xl active:opacity-75 w-[100px] md:w-[200px] sm:text-h6 text-small" onClick={handleClick}>Aggiungi al carrello</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <div className="grid grid-rows-2 grid-cols-2 gap-[8px] md:gap-[32px]">
                            {
                            game.images_url.map((element) => {
                                return (
                                  <img src={element} alt="" className="hover:opacity-75 focus:absolute focus:top-[168px] focus:left-0 focus:opacity-100 t-0 hover:cursor-pointer" tabIndex={0}  />  
                                )
                            })
                            }
                            
                        </div>
                        <div className="">
                            <p className="text-small md:text-p">{game.game_desc}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default GameDetail;
