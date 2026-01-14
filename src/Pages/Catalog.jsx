import { useState, useEffect, useMemo } from "react";
import items from "../DataBase/Games";
import FilterBar from "../Components/FilterBar.component";
import categories from "../DataBase/Categories";
import GameList from "../Components/GameList.component";
import { useSearchParams } from "react-router";
import { getSubstrings } from "../Utils/utils";

const Catalog = () => {

    // potrei usare useMemo per tenermi in memoria l'array completo dei giochi

    const products = useMemo(()=> items, [items]);

    const [productsDisplay, setProductsDisplay] = useState(products);
    const [filter, setFilter] = useState(0);
    const [searchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let filtered = [... items];
        if( filter != 0) {
            filtered = filtered.filter((element) => element.category_id == filter);
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
    }, [filter, searchParams])

    return (
        <>
            <div className="pt-[168px] xl:px-[128px] px-[64px]">
                <div className="flex-col">
                    <div>
                        <FilterBar categories={categories} handleFilter={setFilter} />
                    </div>
                    <GameList items={productsDisplay} />
                </div>
            </div>
        </>
    )
}

export default Catalog