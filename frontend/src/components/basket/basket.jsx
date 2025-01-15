import "./basket.css"

function Basket({basket}) {
    return (
      <div className="basket">
        <h3>Basket</h3>
        <ul className="basket-product-list">
          {basket.map((product, index) => {
            return (
              <li key={index}>
                <img src={product.imageSrc}/>
                <h3>{product.name}</h3>
                <p>£{product.price.toFixed(2)}</p>
              </li>
            );
          })}
        </ul>
      </div>
    );
}

export default Basket;