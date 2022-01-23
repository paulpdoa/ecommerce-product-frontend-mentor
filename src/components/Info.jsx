import { ReactComponent as Minus } from '../assets/icon-minus.svg';
import { ReactComponent as Plus } from '../assets/icon-plus.svg';

import { useState } from 'react';

const Info = ({ Cart,quantity,setQuantity,setOrders,setCount }) => {

    
    const [error,setError] = useState('');

    const addItem = () => {
        const product = [{
            id:1,
            image:'/images/image-product-1-thumbnail.jpg',
            edition: 'Fall Limited Edition Sneakers',
            count: 125,
        }]
        if(quantity < 1) {
            setError('Cart cannot be empty');
            setInterval(() => {
                setError('');
            },3000)
        } else {
            setOrders(product);
            setCount(quantity);
        }
    }

    return (
        <div className="col-span-1 flex justify-center">
            <div className="md:mt-20 mt-5">
                <h3 className="small-text text-sm font-semibold select-none ml-9 md:ml-0">SNEAKER COMPANY</h3>
                <h1 className="font-bold titles md:text-4xl text-3xl md:w-3/4 ml-9 md:ml-0 mt-5 select-none">Fall Limited Edition Sneakers</h1>
                <p className="mt-10 md:text-justify w-3/4 nav-btns font-normal ml-9 md:ml-0 select-none">These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

                <div className="mt-7 select-none ml-9 md:ml-0"> 
                    <div className="flex gap-5 items-center justify-between">
                        <div className="flex gap-3 items-center">
                            <span className="font-bold titles text-3xl">$125.00</span>
                            <span className="small-text discount font-bold w-12 text-center rounded-md">50%</span>
                        </div>
                        <del className="before-price font-bold md:hidden mr-9">$250.00</del>
                    </div>
                    <del className="before-price font-bold hidden md:block">$250.00</del>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-10 relative items-center h-32 md:h-auto">
                    <div className="flex items-center justify-between md:w-32 w-4/5 p-2 qty-btn rounded-xl">
                        <Minus onClick={ quantity > 0 ? () => setQuantity(quantity-1) : () => setQuantity(quantity) }  className="cursor-pointer" />
                        <span className="font-bold titles select-none">{ quantity >= 0 ? quantity : 0}</span>
                        <Plus onClick={ () => setQuantity(quantity+1) } className="cursor-pointer" />
                    </div>
                    <p className="absolute md:-bottom-5 md:left-0 md:text-sm bottom-0 text-red-500">{error}</p>
                    <button onClick={addItem} className="flex cart-btn justify-center items-center gap-3 p-2 md:w-56 w-4/5 text-white rounded-xl font-semibold">
                    <Cart fill="white" /><span className="select-none">Add to cart</span></button>
                </div>
            </div>
        </div>
    )
}

export default Info
