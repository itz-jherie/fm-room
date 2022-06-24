import { useState } from 'react';
import icon  from '../assets/icon-hamburger.svg'
import Hamburger from './Hamburger';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const showMenu = () => {
        setShow(true);
    }
    return ( 
        <nav className="flex border-solid  text-white  w-screen xl:w-full lg:w-full md:w-full 2xl:w-full">
            <img src={icon} onClick={showMenu} width=" 30px" alt="menu icon" className=' cursor-pointer sm:flex md:hidden xl:hidden 2xl:hidden lg:hidden py-3 mx-5'></img>
           <span   className='flex self-center
                    text-3xl
                    font-bold
                    mr-8 px-4
                    text-center w-full justify-center items-center
                '>room <span></span></span>
           <div className='flex hidden lg:flex md:flex xl:flex 2xl:flex  '>
           <span className='flex self-center
                    font-bold
                    mr-4 p--2
                    border-solid 
                    hover:border-b-2 
                    border-white cursor-pointer
                '>home</span>
                <span className='flex self-center
                    mr-4 p--2
                    font-bold
                    border-solid 
                    hover:border-b-2 
                    border-white cursor-pointer
                '>shop</span>
                <span className='
                    flex self-center
                    mr-4 p--2
                    font-bold
                    border-solid 
                    hover:border-b-2 
                    border-white cursor-pointer
                '>about</span>
                <span className='flex self-center
                    mr-4 p--2
                    font-bold
                    border-solid 
                    hover:border-b-2 
                    border-white cursor-pointer
                '>contact</span>
                
           </div>
           <Hamburger show={show} onClose={() => setShow(false)}/>
        </nav>
     );
}
 
export default Navbar;