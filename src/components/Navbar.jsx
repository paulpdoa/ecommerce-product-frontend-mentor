import { useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Trash } from '../assets/icon-delete.svg';
import { ReactComponent as Menu } from '../assets/icon-menu.svg';
import Close from './Close';

const Navbar = ({ Cart,orders,setOrders,setQuantity,count }) => {

    const [show,setShow] = useState(false);
    const [showMenu,setShowMenu] = useState(false);
    const [changeColor,setChangeColor] = useState(false);
    
    const deleteItem = () => {
        setOrders([]);
        setQuantity(0);
    }

    return (
        <div className="center-content md:absolute w-full">
            <div className="fit-content">
                <nav className="flex items-center justify-around md:justify-between border-b md:h-24 h-20 bg-white border-gray-300">
                    <div className="md:hidden flex gap-4 items-center">
                        <span onClick={() => setShowMenu(!showMenu)}><Menu /></span>
                        <span><Logo /></span>
                    </div>
                    <ul className="hidden md:flex items-center gap-5">
                        <li className="font-bold text-3xl titles nav-title"><Logo /></li>
                        <li className="ml-5 nav-btns nav-li font-normal py-8 hover:text-gray-800 transition duration-300">Collections</li>
                        <li className="nav-btns nav-li font-normal py-8 hover:text-gray-800 transition duration-300">Men</li>
                        <li className="nav-btns nav-li font-normal py-8 hover:text-gray-800 transition duration-300">Women</li>
                        <li className="nav-btns nav-li font-normal py-8 hover:text-gray-800 transition duration-300">About</li>
                        <li className="nav-btns nav-li font-normal py-8 hover:text-gray-800 transition duration-300">Contact</li>
                    </ul>
                    <div className="flex items-center md:gap-10 gap-5 relative">
                        <div onClick={() => setShow(!show)} className="relative cursor-pointer">
                            <Cart className="cursor-pointer hover:text-gray-900" fill={"hsl(219, 9%, 45%)"} setChangeColor={setChangeColor} changeColor={changeColor} />
                            <span className="absolute -top-2 text-white -right-2 w-5 text-center rounded-md cart-btn text-xs font-bold">{ orders.length > 0 && count }</span>
                        </div>
                        <img className="md:w-10 w-8 cursor-pointer hover-img object-cover" src="/images/image-avatar.png" alt="avatar" />
                        {/* Show Cart */}
                        { show && 
                            <div className="absolute md:top-20 top-16 bg-white shadow-2xl md:w-96 w-80 rounded-lg md:right-1 -right-1 md:h-52 h-48">
                                 <h1 className="titles font-bold p-3 border-b border-gray-300 select-none">Cart</h1>
                                 <div className="flex justify-center items-center h-full relative">
                                    { orders.length < 1 ? 
                                        <h1 className="font-bold text-gray-500 top-20 absolute select-none animate-pulse">Your cart is empty.</h1> : 
                                        orders.map((order,key) => (
                                            <>
                                                <div className="flex gap-4 items-center justify-around absolute top-7" key={key}>
                                                    <img className="w-12 h-12 rounded-lg" src={order.image} alt={order.edition} />
                                                    <div>
                                                        <h2 className="nav-btns">{order.edition}</h2>
                                                        <div className="flex gap-2">
                                                            <span className="nav-btns">${order.count} x {count}</span>
                                                            <span className="font-bold">${order.count * count}</span>
                                                        </div>
                                                    </div>
                                                    <Trash className="cursor-pointer" onClick={deleteItem} />
                                                </div>
                                                <button className="cart-btn md:w-4/5 w-4/5 p-3 rounded-xl font-bold text-sm text-white mt-7">Checkout</button>
                                            </>
                                        )) 
                                    }
                                 </div>   
                            </div> 
                        }
                    </div>
                </nav>
            </div>
            { showMenu &&
                <nav className="md:hidden fixed left-0 bg-white w-3/5 min-h-screen">
                    <div onClick={() => setShowMenu(!showMenu)} className="cursor-pointer mt-5 ml-5">
                        <Close />
                    </div>
                    <ul className="flex flex-col gap-5 z-50 ml-5 mt-10 font-bold">
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            }
        </div>
    )
}

export default Navbar
