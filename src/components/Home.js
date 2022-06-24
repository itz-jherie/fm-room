import { useState } from 'react';
import bg1 from '../assets/desktop-image-hero-1.jpg'
import bg2 from '../assets/desktop-image-hero-2.jpg'
import bg3 from '../assets/desktop-image-hero-3.jpg'
import Navbar from './Navbar'
import leftArrow from '../assets/icon-angle-left.svg'
import rightArrow from '../assets/icon-angle-right.svg'
import shopArrow from '../assets/icon-arrow.svg'
import furniture1 from '../assets/image-about-dark.jpg'
import furniture2 from '../assets/image-about-light.jpg'


const Home = () => {
    const [img, setImg] = useState(0);
    const images = [bg1, bg2, bg3];

    const incImg = () => {
        if ( img > 1){
            return null
        } else{
            setImg(img + 1)
            
        }
    };
    const reduImg = () => {
        if ( img < 1){
            return null
        } else{
            setImg(img - 1)
        }
        
    }
    return ( 
        <div className='2xl:mx-64'>
            <div className="grid overflow-hidden grid-cols-1 grid-rows-2 items-start h-1/2 2xl:mx-96">
                
                <div className=" relative box grid overflow-hidden md:grid-cols-3  grid-rows-1 items-start max-h-1/2">
                    <div className="box relative col-span-2 ">
                        <img src={images[img]} alt="background"/>
                        <div className='absolute top-0 left-0 sm:top-5 sm:left-5 '><Navbar/></div>
                        <div className='bg-black flex absolute right-0 xl:-right-16  
                        bottom-0'>
                            <div onClick={()=>reduImg()} className='p-6 py-5 hover:bg-gray-900'><img src={leftArrow} alt='Left Arrow'/></div>
                            <div onClick={()=>incImg()} className='p-6 py-5 hover:bg-gray-900'><img src={rightArrow} alt="Right Arrow"/></div>
                        </div>
                    </div>
                    <div className="box">
                        <div className='relative flex flex-col p-7  md:p-5 lg:p-10'>
                            {
                                img && img === 0 ? 
                                img + "0" : img === 1 ? 
                                <div>
                                    <h2 className='text-2xl font-bold  lg:text-2xl xl:text-2xl md:text-base md:mt-5 mb-5 '>
                                    We are available<br/> all across the globe</h2>
                                    <span className='text-xs'> 
                                        With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                                        Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                                        store locator. Any questions? Don't hesitate to contact us today. 
                                    </span>
                                </div>  : img === 2 ? 
                                <div>
                                    <h2 className='text-2xl font-bold  lg:text-2xl xl:text-2xl md:text-base md:mt-5 mb-5 '>
                                    Manufactured with<br/>the best materials</h2>
                                    <span className='text-xs'> 
                                        Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                                        to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                                        experience in this industry, we understand what customers want for their home and office.
                                    </span>
                                
                                </div> :  
                                <div>
                                    <h2 className='text-2xl font-bold  lg:text-2xl xl:text-2xl md:text-base md:mt-5 mb-5'>
                                    Discover innovative<br/> ways to decorate</h2>
                                    <span className='text-xs '> 
                                    We provide unmatched quality, comfort and style for property owners across the country. 
                                    Our experts combine form and function in bringing your vision to life. 
                                    Create a room in your own style with our collection and make your property a 
                                    reflection of you and what you love. 
                                    </span>
                                </div> 

                            }
                            <div className=' inline w-25 flex my-7 py-3 cursor-pointer hover:bg-gray-200 rounded p-3'>S&nbsp;H&nbsp;O&nbsp;P&nbsp; N&nbsp;O&nbsp;W &nbsp;&nbsp; <img src={shopArrow} alt="arrow"/></div>

                            

                        </div>
                    </div>

                </div>
                <div className="box grid items-start overflow-hidden
                    grid-cols-1 md:grid-cols-3 md:grid-rows-1 sm:-my-12 -my-12 md:my-0">
                    <div className="box   justify-self-center"><img src={furniture1} alt="furniture"/></div>
                    <div className="box p-7 lg:p-5 sm:p-5 m-0 sm:border-green-500 md:border-purple-500 md:m-0 sm:mx-20 lg:border-red-500">
                        <h3 className='text-lg font-bold mt-5 lg:mt-10'>ABOUT OUR FURNITURE</h3>
                        <span className='text-xs'>
                            Our multifunctional collection blends design and function 
                            to suit your individual taste.
                            Make each room unique, or pick a cohesive theme that best 
                            express your interests and what
                            inspires you. Find the furniture pieces you need, from traditional to contemporary
                            styles
                            or anything in between. Product specialists are available to help you create your dream space.
                        </span>
                    </div>
                    <div className="box justify-self-center"><img src={furniture2} alt="furniture"/></div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default Home;