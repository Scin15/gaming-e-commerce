import { useState } from "react";
import FilterBar from "../Components/FilterBar.component";
import categories from "../DataBase/Categories";
import GameList from "../Components/GameList.component";
import { useProduct, useFilterProduct } from "../hooks/productHook";
import { useSearchParams } from "react-router";

const Catalog = () => {

    const [filter, setFilter] = useState("");
    const [searchParams] = useSearchParams();
    const searchString = searchParams.get("search");
    // carico tutti i prodotti dal server
    const products = useProduct();

    // filtra l'array prodotti usando lo stato filtro e la query string se ne ho una
    // gli elementi dell'array devono avere una prop "tag" che corrisponde al filtro passato
    const productsDisplay = useFilterProduct(products, filter, searchString);

    return (
        <>
            <div className="bg-[url(background-5.png)] dark:bg-[url(background-4.png)] pt-[168px] xl:px-[64px] md:px-[64px] px-[10px]">
                <div className="flex-col">
                    <div>
                        <FilterBar categories={categories} handleFilter={setFilter} />
                    </div>
                    <GameList key={filter} items={productsDisplay} itemsPerPage={8} />
                </div>
            </div>
        </>
    )
}

export default Catalog
