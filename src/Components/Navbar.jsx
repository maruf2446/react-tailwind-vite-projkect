import { useState } from 'react';
import logo from '../assets/img/IMG20220914020017.jpg'
import { GrLanguage } from "react-icons/gr";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from 'react-scroll';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const navItems = [
        { link: "Overview", path: "home" },
        { link: "Feature", path: "feature" },
        { link: "About", path: "about" },
        { link: "Pricing", path: "pricing" },
    ]

    return (
        <>
            <nav className='bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0'>
                <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                    <div className='flex items-center space-x-14'>
                        <a href="" className='text-2xl font-semibold flex items-center space-x-3 text-primary'><img src={logo} alt="" className='w-18 h-14 inline-block items-center' /> <span>MARUF</span>
                        </a>

                        {/* showing navitem using map */}
                        <ul className='md:flex space-x-12 hidden'>
                            {
                                navItems.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300 cursor-pointer'>{link}</Link>)
                            }
                        </ul>
                    </div>

                    {/* language and singup */}
                    <div className='space-x-12 hidden md:flex items-center'>
                        <a href="" className='hidden lg:flex items-center hover:text-secondary'><GrLanguage className='mr-2' /> <span>Language</span></a>
                        <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign up</button>
                    </div>

                    {/* menu btn only display on mobile */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-white text-xl focus:outline-none focus:text-gray-300'>
                            {
                                isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />) : (<FaBars className='w-6 h-6 text-primary' />)
                            }
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                {
                    navItems.map(({ link, path }) => <Link activeClass='active' spy={true} smooth={true} offset={-80} key={link} to={path} className='block hover:text-gray-300 text-white'
                     onClick={toggleMenu}
                    >{link}</Link>)
                }
            </div>
        </>
    );
};

export default Navbar;