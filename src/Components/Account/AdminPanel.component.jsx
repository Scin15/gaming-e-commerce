import { useState, useEffect } from "react";
import { fetchProducts } from "../../Utils/utils";

const AdminPanel = () => {

    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect( () => {
        fetchProducts()
        .then((e)=> setProducts(e))
        .catch((err)=> {throw new Error("Error load products")});
        setLoad(false);

    }, [load])

    const handleSubmitProduct = async (formData) => {
    console.log("Dati che sto inviando:", formData.get("img_cover"));
    const body = {
            title: formData.get("title"),
            platform: {tag: formData.get("platform_tag"), name: formData.get("platform")},
            price: formData.get("price"),
            desc: formData.get("desc"),
            img_cover: formData.get("img_cover"),
            img_misc: formData.getAll("img_misc"),
            category: {tag: formData.get("category_tag"), name: formData.get("category")}
        };

    console.log("Body che sto inviando al server:", body);

    const result = await fetch("http://localhost:3000/product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    if(result) {
        console.log("Risultato:", result);
        setLoad(true);
    } else {
        throw new Error("Not able to store the result");
    }
}

    return (
        <>
            <div className="grid grid-cols-2 gap-[16px] mt-[80px]">
                <div>
                    <h4>Prodotti:</h4>
                    <div className="flex flex-col gap-[16px] overflow-y-scroll max-h-screen">
                        {products.map((element) => {
                            return (
                                <div key={element._id} className="bg-white/50 rounded-[16px] p-[16px]">
                                    <ul>
                                        <li>{element.title}</li>
                                        <li>{element.platform.name}</li>
                                        <li>{element.price}</li>
                                        <li>{element.category.name}</li>
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div>
                    <h4 className="text-center">Inserisci nuovo prodotto</h4>
                    <form action={handleSubmitProduct} className="flex flex-col gap-[4px] items-center bg-white/50 p-[16px] rounded-[16px]">
                        <label htmlFor="title">Titolo</label>
                        <input type="text" id="title" name="title" required className="border-1 rounded-full px-[8px]"/>

                        <label htmlFor="platform_tag">Tag Piattaforma</label>
                        <input type="text" id="platform_tag" name="platform_tag" required minLength={3} maxLength={3} className="border-1 rounded-full px-[8px]"/>

                        <label htmlFor="platform">Piattaforma</label>
                        <input type="text" id="platform" name="platform" required className="border-1 rounded-full px-[8px]" />

                        <label htmlFor="price">Prezzo</label>
                        <input type="number" id="price" name="price" min="10" required className="border-1 rounded-full px-[8px]"/>

                        <label htmlFor="desc">Descrizione</label>
                        <input type="text" id="desc" name="desc" className="border-1 rounded-full px-[8px]" />

                        <label htmlFor="img_cover">Immagine cover</label>
                        <input type="text" id="img_cover" name="img_cover" required className="border-1 rounded-full px-[8px]"  pattern="^https?:\/\/.*"/>

                        <label htmlFor="img_misc">Immagine aggiuntiva</label>
                        <input type="text" id="img_misc" name="img_misc" pattern="^https?:\/\/.*" className="border-1 rounded-full px-[8px]"/>
                        
                        <label htmlFor="img_misc">Immagine aggiuntiva</label>
                        <input type="text" id="img_misc" name="img_misc" pattern="^https?:\/\/.*" className="border-1 rounded-full px-[8px]"/>

                        <label htmlFor="category_tag">Tag Categoria</label>
                        <input type="text" id="category_tag" name="category_tag" required minLength={3} maxLength={3} className="border-1 rounded-full px-[8px]"/>

                        <label htmlFor="category">Categoria</label>
                        <input type="text" id="category" name="category" required className="border-1 rounded-full px-[8px]"/>

                        <button className="border-1 border-black bg-primary text-p text-black rounded-[18px] px-[16px] py-[8px] mt-[16px]">Inserisci</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminPanel;