import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <img className="w-[100%] h-[530px]" src="/src/assets/wallpaperflare.com_wallpaper.jpg" alt="Error Banner" />
            <Link to="/"><button className="btn btn-primary">Go Home </button></Link>
        </div>
    );
};

export default ErrorPage;