import { useState, useEffect, useMemo } from "react";
import FilterBar from "../Components/FilterBar.component";
import categories from "../DataBase/Categories";
import GameList from "../Components/GameList.component";
import { useSearchParams } from "react-router";
import { getSubstrings } from "../Utils/utils";
import { fetchProducts } from "../Utils/utils";

const Catalog = () => {

    // potrei usare useMemo per tenermi in memoria l'array completo dei giochi

    const [products, setProducts] = useState([])
    const [productsDisplay, setProductsDisplay] = useState([]);
    const [filter, setFilter] = useState("");
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);

    console.log("Filtro:", filter);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const result = await fetchProducts();
                if (result) setProducts(result);
            } catch (err) {
                throw new Error(err);
            }
            
        }
        loadProducts();
    }, [])

    useEffect(() => {
        let filtered = [... products];
        console.log(filtered);
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
    }, [filter, searchParams, products])

    return (
        <>
            <div className="pt-[168px] xl:px-[128px] px-[64px]">
                <div className="flex-col">
                    <div>
                        <FilterBar categories={categories} handleFilter={setFilter} />
                    </div>
                    <GameList key={filter} items={productsDisplay} />
                </div>
            </div>
        </>
    )
}

export default Catalog