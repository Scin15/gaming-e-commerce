import { useSelector } from "react-redux"
import AccountPanel from "../Components/Account/AccountPanel.component";
import Login from "../Components/Account/Login.component";
import { useState, useEffect } from "react";

const Account = () => {

    const user = useSelector((state) => state.user);
    const [products, setProducts] = useState([]);

    console.log("Utente che ho loggato: ", user);

    useEffect( () => {

        const fetchProducts = async () => {
            const result = await (await fetch("http://localhost:3000/product")).json();
            if (result) {
                console.log("Prodotti trovati:", result);
                setProducts(result);
            } else {
                console.log("Prodotti non trovati");
            }
        }

        fetchProducts();

    }, [])

    const handleDelete = async () => {
        const result = await fetch("http://localhost:3000/product/all", {
            method: "DELETE"
        });
        if (result) {
            window.alert("Prodotti cancellati con successo!");
        } else {
            window.alert("Errore nella cancellazione dei prodotti");
        }
    }

    return (
        <>
            <div className="pt-[168px]">
                {user.id == null || !user ? <Login /> : <AccountPanel />}
            </div>
            <div className="flex">
                <div>
                    <h1>Prodotti:</h1>
                    <ul>
                        {products.map((element) => <li>{element.title}</li>)}
                    </ul>
                </div>

                <div>
                    <h1 className="text-center">Form di prova inserimento prodotto</h1>
                    <button onClick={handleDelete}>Cancella tutto</button>
                    <form action="http://localhost:3000/product" method="post" className="flex flex-col items-center bg-white">
                        <label htmlFor="title">Titolo</label>
                        <input type="text" id="title" name="title" required className="user-invalid:border-1 border-alert"/>

                        <label htmlFor="platform_tag">Tag Piattaforma</label>
                        <input type="text" id="platform_tag" name="platform_tag" required/>

                        <label htmlFor="platform">Piattaforma</label>
                        <input type="text" id="platform" name="platform" required/>

                        <label htmlFor="price">Prezzo</label>
                        <input type="number" id="price" name="price" min="10" step={10} required/>

                        <label htmlFor="desc">Descrizione</label>
                        <input type="text" id="desc" name="desc"/>

                        <label htmlFor="img_cover">Immagine cover</label>
                        <input type="text" id="img_cover" name="img_cover" required/>

                        <label htmlFor="img_misc">Immagine aggiuntiva</label>
                        <input type="text" id="img_misc" name="img_misc"/>
                        
                        <label htmlFor="img_misc">Immagine aggiuntiva</label>
                        <input type="text" id="img_misc" name="img_misc"/>

                        <label htmlFor="category_tag">Tag Categoria</label>
                        <input type="text" id="category_tag" name="category_tag" required/>

                        <label htmlFor="category">Categoria</label>
                        <input type="text" id="category" name="category" required/>

                        <button className="border-1 px-[16px] py-[8px] hover:bg-black/50 hover:text-white">Invia form</button>
                    </form>
                </div>
            </div>
        </>
    )
}

// const CategorySchema = new Schema({
//   tag: {type: String, required: [true, "Tag obbligatorio"]},
//   name: {type: String}
// })

// const PlatformSchema = new Schema({
//   tag: {type: String, required: [true, "Tag obbligatorio"]},
//   name: {type: String}
// })

// const ProductSchema = new Schema({
  
//   title: {type: String, required: true},
//   platform: {type: PlatformSchema, required: true},
//   price: {type: Number, required: true},
//   desc: {type: String},
//   img_cover: {type: String},
//   img_misc: {type: [String]},
//   category: {type: [CategorySchema], required: true, validate: {
//     validator: v => Array.isArray(v) && v.length > 0, 
//     message: "Array non valido (non array o array vuoto)"}},
//   created_at: {type: Date},
//   updated_at: {type: Date},
// });

export default Account;
