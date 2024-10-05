import { ShopCard } from './ShopCard';

export const CardsView = (props) => {
    return (
        <div className="products-table">
            {props.cards.map((card, index) => {
                return <ShopCard key={`${index}${card.name}`} card={card} />;
            })}
        </div>
    );
}