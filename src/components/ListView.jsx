import { ShopItem } from './ShopItem';

export const ListView = (props) => {
    return (
        <div className="products-list">
            {props.items.map((item, index) => {
                return <ShopItem key={`${index}${item.name}`} item={item} />;
            })}
        </div>
    );
}