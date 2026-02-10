
// come parametro passo l'elemento target (ad esempio trovato con useRef())
const handleScroll = (target) => {
    target.current?.scrollIntoView({ behavior: "smooth",
        block: "start",
        });
};

// funzione per settare la className che fa animare la lista di schede
// passo il parametro phase: stato(idle, exit, enter)
// passo il parametro direction(left right)
const getAnimationClass = (phase, direction) => {
    if (phase === "exit") {
        return direction === "right"
        ? "-translate-x-50 opacity-0"
        : "translate-x-50 opacity-0";
    }

    if (phase === "enter") {
        return direction === "right"
        ? "translate-x-50 opacity-0"
        : "-translate-x-50 opacity-0";
    }

    return "translate-x-0 opacity-100";
};

// funzione per cambiare pagina con parametri:
// newPage( è lo stato del componente definito come numero intero)
// direction: sringa che rappresenta la direzione del cambio pagina.
// phase: stato (idle, exit, enter)
const changePage = (newPage, direction, phase ,setDirection, setPhase, setPage) => {
    console.log(phase);
    if (phase !== "idle") return;

    setDirection(direction);
    setPhase("exit");

    // dopo l'uscita, cambio pagina
    setTimeout(() => {
        console.log("Sto cambiando pagina")
        setPage(newPage);
        setPhase("enter");
    }, 300);

    // dopo l'entrata, torno idle
    setTimeout(() => {
        setPhase("idle");
    }, 600);
};

export {
    handleScroll,
    getAnimationClass,
    changePage,
};