import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            {/* <img className="w-[100%] h-[530px]" src="/src/assets/wallpaperflare.com_wallpaper.jpg" alt="Error Banner" /> */}
            <h1 className="text-6xl flex justify-center items-center mt-28"><span className="text-orange-600">Error !</span> Something is Wrong </h1>
            <Link className="flex justify-center items-center mt-20" to="/"><button className="btn btn-error">Go Home </button></Link>
        </div>
    );
};

export default ErrorPage;