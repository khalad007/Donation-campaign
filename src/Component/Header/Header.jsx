
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* navBar  */}
            {/* navBar  */}
            <div className="navbar bg-base-100 lg:w-4/5 lg:mx-[10%] md:w-4/5 md:mx-[10%]">
                <div className="flex-1 h-16 w-16">
                    <img className='h-10' src="https://i.ibb.co/sF9tscL/Logo.png" alt="Logo" />
                </div>
                <div className="flex-none">
                    <ul className=" menu-horizontal px-1 text-lg font-bold gap-4 ">
                        <li><NavLink to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }>Home</NavLink></li>
                        <li><NavLink to="/Donation" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }>Donation</NavLink></li>
                        <li><NavLink to="/Statistics" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }>Statistics</NavLink></li>
                    </ul>
                </div>
            </div>

        </div>

    );
};

export default Header;