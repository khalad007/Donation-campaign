import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero h-96" style={{ backgroundImage: 'url(src/assets/Rectangle-4281.png)' }}>
                <div className="hero-overlay bg-white bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-10 text-black text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <input className='h-12 w-[470px] rounded-l-lg pl-2' type="text" placeholder='Search here....' name="" id="" />
                        <button className='h-12 w-28 bg-[#FF444A] text-white text-base font-semibold rounded-r-lg'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;