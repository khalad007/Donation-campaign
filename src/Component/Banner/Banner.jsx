
import { useLoaderData} from 'react-router-dom';


const Banner = () => {



    const cards = useLoaderData()
    console.log(cards[0].Category)

 

    return (

        <div>
            <div className="lg:hero h-96 mb-11 relative" style={{ backgroundImage: 'url("https://i.ibb.co/Rh3qGQn/Rectangle-4281.png")' }}>
                <div className="hero-overlay bg-white bg-opacity-90 "></div>
                {/* ..................................responsive........ */}
                <div className="hero-content text-center text-neutral-content absolute bottom-10 sm:left-11 md:left-52">
                    <div className='lg:hidden'>
                        <h1 className="lg:mb-10 text-black lg:text-5xl text-2xl mb-4 font-bold">I Grow By Helping People In Need</h1>
                        <input className='h-12 lg:w-[470px] rounded-l-lg pl-2' type="text" placeholder='Search here....' name="" id="" />
                        <button className='h-12 w-28 bg-[#FF444A] text-white text-base font-semibold rounded-r-lg'>Search</button>
                    </div>
                </div>
                {/* .................................................. */}
                <div className="hero-content text-center text-neutral-content">
                    <div className='lg:block hidden'>
                        <h1 className="lg:mb-10 text-black lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <input className='border h-12 lg:w-[470px] rounded-l-lg pl-2 text-black' type="text" placeholder='Search here....' name="vlu" id="srcInput" />

                        <button className='h-12 w-28 bg-[#FF444A] text-white text-base font-semibold rounded-r-lg'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;