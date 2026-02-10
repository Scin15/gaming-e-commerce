import { useState, useEffect } from "react";
import { fetchProducts, readGames } from "../Utlis/utils";
import { getSubstrings } from "../Utlis/utils";

const useProduct = (_id) => {
    
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        readGames(_id)
        .then((e)=> setProducts(e))
        .catch((err) => {
            console.log(err.message);
            setProducts([]);
        });
    }, [])
    return products;
}

const useFilterProduct = (products, filter, searchString) => {

    const [productsDisplay, setProductsDisplay] = useState([]);

    useEffect(() => {

        let filtered = [... products];
        console.log(filtered);
        if( filter != "" && filter != "all") {
            filtered = filtered.filter((element) => element.genres[0].slug === filter);
            }

        // per la funzione cerca uso una Regex.
        /* non case sensitive, anche più parole, se ci sono almeno 4 caratteri di fila che matchano l'imput, parolaInput|,  */

        if(searchString) {

            const expression = new RegExp(searchString, "i"); // flag "i" per rendere case-insensitive
            const chunks = getSubstrings(searchString, 4);

            filtered = filtered.filter((element => {
                return (expression.test(element.name)) || 
                (
                    chunks.some(chunk => {
                     const regex = new RegExp(chunk);
                     return regex.test(element.name);
                    })
                ); 
            }));
        }

        setProductsDisplay(filtered);
        
    }, [filter, products, searchString])

    return productsDisplay;
}

export {
    useProduct,
    useFilterProduct,
}
