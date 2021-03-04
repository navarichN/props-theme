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
                if(item.title && item.price) {
                    return (
                        <div className="item">
                            <div className="item-image">
                                <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
                                    <img src={(item && item.MainImage && item.MainImage.url_570xN) ? item.MainImage.url_570xN : 'no image'}></img>
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
                }

            })}
        </div>
    )
}