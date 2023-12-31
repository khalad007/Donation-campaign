import { useEffect, useState } from "react";
import Donated from "../Donated/Donated";


const Donation = () => {

    
    const [donate, setDonate] = useState([]);

    const [noDataFound, setNoDateFound] = useState(false);

    const [isShow, setIsShow] = useState(false);

    console.log(donate)

    useEffect(() => {
        const donateItem = JSON.parse(localStorage.getItem('donate'));

   


        if (donateItem) {
            setDonate(donateItem);
        } else {
            setNoDateFound("No Donation Yet");
        }
    }, []);


    return (
        <div>
            {noDataFound ? <p className="h-[70vh] flex justify-center items-center ">{noDataFound}</p>
                :
                <div>
                    <div className="grid lg:grid-cols-2 ">
                        {
                            isShow ? donate.map((card) => (<Donated key={card.id} card={card}></Donated>)
                            )
                            :
                            donate.slice(0,4).map((card) => <Donated key={card.id} card={card}></Donated>
                            )
                        }
                    </div>

                    {donate.length > 4 && <button onClick={() => setIsShow(!isShow)} className=" btn btn-primary px-5 block mx-auto my-7">{isShow ? "Hide" : "See All"} </button>}
                </div>}
        </div>
    );
};

export default Donation;