
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* navBar  */}
            {/* navBar  */}
            <div className="navbar bg-base-100 w-4/5 mx-[10%]">
                <div className="flex-1 h-16 w-16">
                    <img className='h-10' src="/src/assets/Logo.png" alt="Logo" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Donation">Donation</NavLink></li>
                        <li><NavLink to="/Statistics">Statistics</NavLink></li>
                    </ul>
                </div>
            </div>

        </div>

    );
};

export default Header;