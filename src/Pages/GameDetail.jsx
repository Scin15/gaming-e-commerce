import { useParams } from "react-router";
import { addItem } from "../Utlis/cartManagement";
import { useDispatch } from "react-redux";
import PlatformIcon from "../Components/PlatformIcon";
import { useProduct } from "../hooks/productHook";

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
                        <h4>Loading...</h4>
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

    return (
        <div className="bg-[url(background-5.png)] dark:bg-[url(background-4.png)]">
            <div className="py-[168px] 2xl:mx-[128px] md:mx-[64px] mx-[32px] min-h-screen relative">
                <div className="flex justify-center mb-[32px]">
                    <div className="absolute left-[8px] top-[-10px]">
                        {<PlatformIcon width={64} height={64} id={product.platform?.tag}/>}
                    </div>
                    <div className="">
                        <h2 className="object-center">{product.name}</h2>
                    </div>
                </div>


                <div className="gap-[8px] md:gap-[32px] grid grid-cols-1 md:grid-cols-2">
                    <div className="flex flex-col gap-[24px]">
                        <img src={product.background_image} alt={`${product.className} image`} className="hover:opacity-75 md:focus:absolute md:focus:w-full focus:opacity-100 focus:top-[168px] focus:left-0 hover:cursor-pointer order-2 md:order-1" tabIndex={0} />
                        <div className="flex flex-col gap-[16px] items-center mt-[8px] order-1 md_order-2">
                            <h5>{`${product.price} €`}</h5>
                            <button className="main-button text-h6 w-full" onClick={() => addItem(product, dispatch)}>Aggiungi al carrello</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px]">
                        <div className="flex flex-col">
                            <img src={product.background_image_additional} alt={`${product.className} secondary-image`} className="hover:opacity-75 md:focus:absolute md:focus:w-full focus:opacity-100 focus:top-[168px] focus:left-0 hover:cursor-pointer" tabIndex={0} />
                        </div>
                        <div className="">
                            <p className="text-p">{product.description_raw}</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameDetail;
