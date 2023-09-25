import SingleCard from "../SingleCard/SingleCard";

const Cards = ({cards}) => {

    console.log(cards);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-4/5 mx-[10%] gap-8 py-10">
                {
                    cards?.map(card=> <SingleCard key={card.id} card={card}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Cards;