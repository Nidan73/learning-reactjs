import React, { useState } from 'react';
import Link from './Link';
import { Menu ,ListChevronsUpDown } from 'lucide-react';

const navData = [
  {
    "id": 1,
    "name": "Home",
    "path": "/",
    "url": "https://example.com/"
  },
  {
    "id": 2,
    "name": "About",
    "path": "/about",
    "url": "https://example.com/about"
  },
  {
    "id": 3,
    "name": "Services",
    "path": "/services",
    "url": "https://example.com/services"
  },
  {
    "id": 4,
    "name": "Projects",
    "path": "/projects",
    "url": "https://example.com/projects"
  },
  {
    "id": 5,
    "name": "Contact",
    "path": "/contact",
    "url": "https://example.com/contact"
  }
]
const link = navData.map(route => <Link key={route.id} route ={route}></Link>)

const Nav = () => {
    const [toggle ,setToggle] = useState(true)
    return (
       <nav className='flex justify-between mx-2 mt-2 md:max-w-300 md:mx-auto'>
           <div onClick={()=>setToggle(!toggle)} className='flex'>
            {
                toggle ? <Menu className='md:hidden'></Menu> : 
                 <ListChevronsUpDown className='md:hidden'>
                 </ListChevronsUpDown>
            }
            {
                <ul className={`md:hidden absolute duration-500 ml-6 text-black bg-gray-400 
                 ${toggle ? '-top-40' : 'top-5'}
                `}>
                      {link}
                </ul>
            }
              <h3 className='ml-3'>My Navbar</h3>
           </div>
            <ul className='hidden md:flex'>
            {
                      link
            }
              </ul>
          
          <button>Sign in</button>









        {/* <ul className='flex'>
            {
                navData.map(route => <li className='mr-10'>
                    <a href={route.path}>{route.name}
                    </a></li>)
            }
        </ul> */}
           {/* <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/"></a></li>
            <li><a href="/"></a></li>
           </ul> */}
       </nav>
    );
};

export default Nav;