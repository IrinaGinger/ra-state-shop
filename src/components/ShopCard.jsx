export const ShopCard = (props) => {
    const { name, price, color, img } = props.card;
    return (
        <div className="product">
            <header className="product-header">
                <h2 className="product-name">{name}</h2>
                <div className="product-color">{color}</div>
            </header>
            <div className="image-container">
                <img className="product-image" src={img} alt={`${name}${color}`} />
            </div>
            <footer className="product-footer">
                <div className="product-price">&#36;{price}</div>
                <button className="add-button" type="button">Add to cart</button>
            </footer>
        </div>
    );
}