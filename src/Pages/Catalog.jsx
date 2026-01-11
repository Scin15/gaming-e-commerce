import { useState, useEffect, useMemo } from "react";
import items from "../DataBase/Games";
import FilterBar from "../Components/FilterBar.component";
import categories from "../DataBase/Categories";
import GameList from "../Components/GameList.component";
import { useSearchParams } from "react-router";

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
        if(searchParams.get("search")) {
            filtered = filtered.filter((element => element.title.includes(searchParams.get("search"))));
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