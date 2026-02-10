import { useParams } from "react-router";
import { addItem } from "../Utlis/cartManagement";
import { useDispatch } from "react-redux";
import PlatformIcon from "../Components/PlatformIcon";
import { useProduct } from "../hooks/productHook";
import { div, img } from "framer-motion/client";

const GameDetail = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const product = useProduct(params.id)[0];
    console.log("Prodotto nella game detail:", product);

    // se useProduct ritorna array vuoto, allora product = undefined e renderizzo un loading
    switch (product) {
        case undefined:
            return (
                <>
                    <div className="flex justify-center mt-[90px]">
                        <h1>Loading...</h1>
                    </div>
                </>
            )
        case product.length === 0:
            return (
                <>
                    <div className="flex justify-center mt-[90px]">
                        <h1>Not found</h1>
                    </div>
                </>
            )
    }

    // if (!product) {
    //     return (
    //         <>
    //             <div className="flex justify-center mt-[90px]">
    //                 <h1>Loading...</h1>
    //             </div>
    //         </>
    //     )
    // }

    return (
        <>
            <div className="py-[168px] 2xl:mx-[512px] md:mx-[128px] mx-[32px] min-h-screen relative">
                <div className="flex justify-center mb-[32px]">
                    <div className="absolute left-[8px] top-[-10px]">
                        {<PlatformIcon width={64} height={64} id={product.platform?.tag}/>}
                    </div>
                    <div className="">
                        <h5 className="object-center">{product.name}</h5>
                    </div>
                </div>


                <div className="gap-[8px] md:gap-[32px] grid grid-cols-2">
                    <div className="flex-col gap-[24px]">
                        <img src={product.background_image} alt={`${product.className} image`} className="hover:opacity-75 focus:absolute focus:opacity-100 focus:top-[168px] focus:left-0 hover:cursor-pointer" tabIndex={0} />
                        <div className="flex flex-col gap-[32px] items-center mt-[24px]">
                            <h5>{`${product.price} €`}</h5>
                            <button className="shadow-md rounded-full xl:px[32px] px-[16px] py-[8px] xl:py-[16px] text-white bg-linear-to-r from-primary to-secondary hover:shadow-xl active:opacity-75 w-[100px] md:w-[200px] sm:text-h6 text-small" onClick={() => addItem(product, dispatch)}>Aggiungi al carrello</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col">
                            <img src={product.background_image_additional} alt={`${product.className} secondary-image`} className="hover:opacity-75 focus:absolute focus:opacity-100 focus:top-[168px] focus:left-0 hover:cursor-pointer" tabIndex={0} />
                            {/* {
                            product.short_screenshots ? 
                                product.short_screenshots.map((element) => {
                                    return (
                                    <img key={element.id} src={element.image } alt="" className="hover:opacity-75 focus:absolute focus:top-[168px] focus:left-0 focus:opacity-100 t-0 hover:cursor-pointer" tabIndex={0}  />  
                                    )
                                }) :
                                <>
                                    <img src="" alt="not found" />
                                    <img src="" alt="not found" />
                                    <img src="" alt="not found" />
                                    <img src="" alt="not found" />
                                </>
                            } */}
                            
                        </div>
                        <div className="">
                            <p className="text-small md:text-p">{product.description_raw}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default GameDetail;
