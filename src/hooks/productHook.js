import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { fetchProducts } from "../Utils/utils";
import { getSubstrings } from "../Utils/utils";

const useProduct = (_id) => {
    
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        
        fetchProducts(_id)
        .then((e)=> setProducts(e))
        .catch((err)=> {throw new Error("Error load products")});
        
    }, [])

    return products;
}

const useFilterProduct = (products, filter) => {

    const [productsDisplay, setProductsDisplay] = useState([]);
    const [searchParams] = useSearchParams();

    useEffect(() => {

        let filtered = [... products];
        // console.log(filtered);
        if( filter != "" && filter != "all") {
            filtered = filtered.filter((element) => element.category[0].tag === filter);
            }

        // per la funzione cerca uso una Regex.
        /* non case sensitive, anche più parole, se ci sono almeno 4 caratteri di fila che matchano l'imput, parolaInput|,  */
        const searchString = searchParams.get("search");

        if(searchString) {

            const expression = new RegExp(searchString, "i");
            const chunks = getSubstrings(searchString, 4);

            filtered = filtered.filter((element => {
                return (expression.test(element.title)) || 
                (
                    chunks.some(chunk => {
                     const regex = new RegExp(chunk);
                     return regex.test(element.title);
                    })
                ); 
            }));
        }

        setProductsDisplay(filtered);
        
    }, [filter, products, searchParams])

    return productsDisplay;
}

export {
    useProduct,
    useFilterProduct,
}
