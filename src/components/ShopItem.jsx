export const ShopItem = (props) => {
    const { name, price, color, img } = props.item;
    
    return (
        <div className="product">
            <div className="image-container">
                <img className="product-image" src={img} alt={`${name}${color}`} />
            </div>
            <div className="name-container">
                <h2 className="product-name">{name}</h2>
            </div>
            <div className="color-container">
                <div className="product-color">{color}</div>
            </div>    
            <div className="product-price">&#36;{price}</div>
            <button className="add-button" type="button">Add to cart</button>
        </div>
    );
}