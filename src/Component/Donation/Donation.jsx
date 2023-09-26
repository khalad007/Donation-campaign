import { useEffect, useState } from "react";
// import SingleCard from "../SingleCard/SingleCard";
import Donated from "../Donated/Donated";


const Donation = () => {


    const [donate, setDonate] = useState([]);

    const [noDataFound, setNoDateFound] = useState(false);

    useEffect(() => {
        const donateItem = JSON.parse(localStorage.getItem('donate'));

        if (donateItem) {
            setDonate(donateItem);
        } else{
            setNoDateFound("No Donation Yet");
        }
    },[]);


    return (
        <div>
            {noDataFound ? <p className="h-[70vh] flex justify-center items-center ">{noDataFound}</p> 
        :
        <div>
            <div className="grid grid-cols-2 ">
                {donate.map(card => <Donated key={card.id} card={card}></Donated>)}
            </div>
        </div>}</div>
    );
};

export default Donation;