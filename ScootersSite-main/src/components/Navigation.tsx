import React, { useState } from 'react'
import { navLinks } from './NavData';
import { FaChevronRight } from 'react-icons/fa';

interface NavLink {
    id: number;
    title: string;
    link: string;
}

const Navigation: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavigation = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className='bg-gray-900 h-screen w-64'>
        
            <ul className="flex items-center relative justify-between p-4">
                <button
                    onClick={toggleNavigation}
                    className='text-white focus:outline-none focus:ring focus:border-gray-300'
                >
                    <FaChevronRight className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`} />
                </button>
            </ul>
        

        <div className={`px-4 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="mt-4">
                {navLinks.map((item: NavLink) => (
                    <a
                        key={item.id}
                        href={item.link}
                        className='text-gray-50 hover:text-gray-300 px-3 py-2 rounded-md text-xl font-bold'
                    >
                        {item.title}
                    </a>
                ))}
            </div>
        </div>

            
        
        
    </div>
  )
}

export default Navigation;