    
    const CartListTotal = ( {total, discount, className } ) => {

        return (
            <div className={`shadow-md border-1 flex flex-col gap-[24px] p-[24px] rounded-[18px] bg-black/10 border-[2px] border-secondary ${className}`}>
                <h5 className="text-secondary">Riepilogo</h5>
                <div className="grid grid-cols-2 gap-[24px]">
                                <div>
                                    <p>Totale</p>
                                </div>
                                <div>
                                    <p>{total + " €"}</p>
                                </div>
                                <div>
                                    <p>Sconto</p>
                                </div>
                                <div>
                                    <p>{`${discount * 100} %`}</p>
                                </div>
                                <div className="font-bold">
                                    <p>Prezzo finale</p>
                                </div>
                                <div className="font-bold">
                                    <p>{`${total - total*discount} €`}</p>
                                </div>
                </div>
            </div>
        )
    }

    export default CartListTotal;
