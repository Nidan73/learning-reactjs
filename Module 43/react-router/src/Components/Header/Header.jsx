import React from 'react';
import { Link , NavLink} from 'react-router';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <nav className='flex'>
            
             {/* { <a href="">Home</a>
              <a href="/Mobiles">Mobiles</a>
              <a href="Laptops">Laptops</a>
              <a href=""""></a>  } */}
            <NavLink to= '/'>Home</NavLink>
            <NavLink to="Laptops">Laptops</NavLink>
            <NavLink to="/Mobiles">Mobiles</NavLink>
            <NavLink to="/Users">Users</NavLink>
            
            </nav>
        </div>
    );
};

export default Header;