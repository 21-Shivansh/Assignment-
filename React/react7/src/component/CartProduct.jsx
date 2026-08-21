import React from 'react'

const CartProduct = ({ ele,setTprice,setCartItem }) => {
    let handleRemove = () => {
        let delId = ele.id;
        setCartItem((prev)=>
            prev.filter(ele=>
                ele.id !== delId
            )
        )
    };
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-4 rounded-xl bg-gray-800 p-4">
                <div className="h-20 w-20 rounded-lg">
                    <img className='h-20 w-20 ' src={ele.image} alt="" />
                </div>
                <div className="flex-1">
                    <h2 className="font-semibold">{ele.title}</h2>
                    <p className="mt-2 font-semibold">
                        ⭐{ele.rating.rate}
                    </p>
                    <p className="mt-2 font-bold text-xl text-green-600">
                        ${ele.price}
                    </p>
                </div>
                <button onClick={handleRemove} className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400 transition hover:bg-red-500 hover:text-white">
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CartProduct
