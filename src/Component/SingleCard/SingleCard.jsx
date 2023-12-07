import { Link } from "react-router-dom";

// this page is like ami jodi samsung click korar por je page ashe oi ta 

const SingleCard = ({ card }) => {


    const { id, Picture, Title, Category, Category_bg, Card_bg, Text_button_bg, Description, Price } = card || {}

    return (
        <div>

            <Link to={`/Card/${id}`}>
                <div style={{backgroundColor:Card_bg}} className="card card-compact w-64 gap-2 shadow-xl">
                    <figure><img className="w-72 h-48" src={Picture} alt="Donation Pic" /></figure>
                    <div className="card-body">
                        <h2 style={{backgroundColor:Category_bg,color:Text_button_bg}} className="w-20 rounded-md pl-1 h-6 text-sm font-medium">{Category}</h2>
                        <p style={{color:Text_button_bg}} className="font-semibold text-base">{Title}</p>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingleCard;