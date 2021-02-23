import '../../App.css';
import toCurrency from '../Listing/funcToCurrency.js';

export default function Listing({items}) {
    console.log(items)
    return (
        <div className="item-list">
            {items.map((item) => {
                let currencyCode = '';
                if(item.currency_code !== "USD") {
                    currencyCode = item.currency_code;
                    console.log(currencyCode)
                } else {
                    currencyCode = "USD"
                }
                return (
                        <div className="item">
                            <div className="item-image">
                                <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
                                    <img src="https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg"></img>
                                    {/* item.MainImage.url_570xN */}
                                </a>
                            </div>
                            <div className="item-details">
                                <p className="item-title">{item.title}</p>
                                <p className="item-price">
                                    {
                                        item.currency_code !== "USD" ? 
                                        `${item.price} ${item.currency_code}` : 
                                        toCurrency(item.price, item.currency_code, "en-EN")
                                    }
                                </p>
                                {(item.quantity <= 10) ? 
                                    <p className="item-quantity level-low">{item.quantity} left</p> :
                                (20 > item.quantity > 10) ? <p className="item-quantity level-medium">{item.quantity} left</p> :
                                    <p className="item-quantity level-high">{item.quantity} left</p>
                                }
                            </div>
                        </div>
                )
            })}
        </div>
    )
}