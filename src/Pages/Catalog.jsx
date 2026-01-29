import { useState } from "react";
import FilterBar from "../Components/FilterBar.component";
import categories from "../DataBase/Categories";
import GameList from "../Components/GameList.component";
import { useProduct, useFilterProduct } from "../hooks/productHook";

const Catalog = () => {

    const [filter, setFilter] = useState("");
    // carico tutti i prodotti dal server
    const products = useProduct();

    // filtra l'array prodotti usando lo stato filtro
    // gli elementi dell'array devono avere una prop "tag" che corrisponde al filtro passato
    const productsDisplay = useFilterProduct(products, filter);

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