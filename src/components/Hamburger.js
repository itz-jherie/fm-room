import close from '../assets/icon-close.svg'
const Hamburger = (props) => {
    if(!props.show) {
        return null;
    }
    return (
        <div className="fixed bg-black/[0.4] top-0 bottom-0 right-0 left-0 " onClick={props.onClose}>
            <div className="opacity-100 flex bg-red bg-white text-black">
                <img src={close} onClick={props.onClose} className='mr-0 sm:mr-5 cursor-pointer p-3 py-7 font-bold'alt="menu"></img>
                <ul className="opacity-100 flex items-center">
                    <li className='px-3 font-bold hover:text-gray-500 cursor-pointer'>home</li>
                    <li className='px-3 font-bold hover:text-gray-500 cursor-pointer'>shop</li>
                    <li className='px-3 font-bold hover:text-gray-500 cursor-pointer'>contact</li>
                    <li className='px-3  font-bold hover:text-gray-500 cursor-pointer'>about</li>
                </ul>
            </div>
        </div>
    );
}
 
export default Hamburger;