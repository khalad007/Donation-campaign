import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetails from "../CardDetails/CardDetails";


const Card = () => {


    const [card, setCard] = useState({})

    const { id } = useParams()
    console.log(id)

    const cards = useLoaderData()
    console.log(cards)

    useEffect(() => {

        const findCard = cards?.find((card) => card.id == id);

        console.log(findCard);

        setCard(findCard);

    }, [id, cards]);


    console.log(card)

    return <div className="static">
       <CardDetails card={card}></CardDetails>

    </div>
};

export default Card;