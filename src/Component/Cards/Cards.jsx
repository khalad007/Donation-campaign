import SingleCard from "../SingleCard/SingleCard";

const Cards = ({cards}) => {

    console.log(cards);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-4/5 lg:mx-[10%] gap-8 py-10 ml-20">
                {
                    cards.map(card=> <SingleCard key={card.id} card={card}></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Cards;