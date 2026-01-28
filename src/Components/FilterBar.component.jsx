import { useState, useRef, useLayoutEffect } from "react";

// parametri: 
// - categories => array di oggetti {tag:String, name:String};
// - handleFilter => funzione "setState" del componente padre;
// Filter bar mostra nella barra la proprietà "name dell'array di oggetti passato come categories, imposta come default la pillola su il primo elemento e cliccando su un altro elemento, setta il filtro del componente padre come la proprietà "tag" corrispondende al nome del bottone"

const FilterBar = ({ categories, handleFilter }) => {

    const [active, setActive] = useState(categories[0].tag);
    const [pillStyle, setPillStyle] = useState(null);
    const refs = useRef([]);

    useLayoutEffect(() => {
        const element = refs.current[active];
        if (!element) return;

        setPillStyle({
            width: element.offsetWidth,
            left: element.offsetLeft,
        });
    }, [active])

    const handleClick = (tag) => {
        setActive(tag);
        handleFilter(tag);
    }
    
    return (
        <>
            <div className="flex justify-center">
                <div className="relative filter-bar inline-flex rounded-full dark:bg-white/30 bg-black/50 shadow-md">
                    <div className="absolute inset-y-0 bg-primary rounded-full transition-all duration-300 opacity-90 shadow-xl" style={{width: pillStyle?.width, transform: `translateX(${pillStyle?.left}px)`}}>
                    </div>
                    { categories? categories.map((element) => <button ref={el => refs.current[element.tag] = el} onClick={() => handleClick(element.tag)} className="rounded-full py-[8px] px-[16px] text-h6 text-white bg-white/0 z-50 hover:opacity-75 active:opacity-50" key={element.tag}>{element.name}</button>) : "Nessuna categoria" }
                </div>
            </div>
        </>
    )
}

export default FilterBar;