import { useState, useRef, useLayoutEffect } from "react";

const FilterBar = ({ categories, handleFilter }) => {

    const [active, setActive] = useState(0);
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

    const handleClick = (id) => {
        setActive(id);
        handleFilter(id);
    }
    
    return (
        <>
            <div className="flex justify-center">
                <div className="relative filter-bar inline-flex rounded-full bg-black/50 shadow-md">
                    <div className="absolute inset-y-0 bg-primary rounded-full transition-all duration-300 opacity-90" style={{width: pillStyle?.width, transform: `translateX(${pillStyle?.left}px)`}}>
                    </div>
                    { categories? categories.map((element) => <button ref={el => refs.current[element.id] = el} onClick={() => handleClick(element.id)} className="rounded-full py-[8px] px-[16px] text-h6 text-white bg-white/0 z-50 hover:opacity-75 active:opacity-50" key={element.id}>{element.name}</button>) : "Nessuna categoria" }
                </div>
            </div>
        </>
    )
}

export default FilterBar;