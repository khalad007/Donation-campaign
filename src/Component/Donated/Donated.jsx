import { Link } from "react-router-dom";


const Donated = ({ card }) => {

    const { id, Picture, Title, Category, Category_bg, Card_bg, Text_button_bg, Description, Price } = card || {}


    return (
        <div className="w-4/5 mx-[10%] mt-3">
            <div className=" w-[500px] h-[192px] rounded-lg" style={{ backgroundColor: Card_bg }}>
                <div className=" flex lg:flex-row gap-3">
                    <img src={Picture} className="w-52 h-48 rounded-lg mt-0" />
                    <div className="p-3 py-2">
                        <p className="w-20 h-7 font-normal text-base rounded-md pl-1" style={{ backgroundColor: Category_bg, color: Text_button_bg }}>{Category}</p>
                        <p className="text-2xl font-semibold">{Title}</p>
                        <p style={{ color: Text_button_bg }} className="py-6 text-base font-semibold">$ {Price}</p>
                        <Link to={`/Card/${id}`}>
                            <button style={{ backgroundColor: Text_button_bg }} className="w-24 h-10 text-lg font-semibold text-white rounded-md">Details</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Donated;