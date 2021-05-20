import React, {useEffect}  from 'react';
import {detailsProduct} from '../actions/productActions';
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
function ProductScreen(props){
    const productDetails = useSelector(state => state.productDetails);
    const {product, loading, error} = productDetails;
    const dispatch = useDispatch();
    useEffect(() =>{
        dispatch(detailsProduct(props.match.params.id));
        return() =>{

        }
    }, []);

    return <div>
        <div className="back-to-result">
            <Link to="/"> Back to home page</Link>
        </div>
        {loading? <div>Laoding123hahproducts</div>:
            error? <div>error</div>:
            (
            
            <div className="details">
           <div className="details-image">
                <img src={product.image} alt="iamproduct" ></img>
                
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Starts ({product.numReviews} reviews)
                    </li>
                    <li>
                        Price: <b> ${product.price} </b>
                    </li>
                    <li>
                        Decsription:
                        <div>
                        {product.description}
                        </div>
                        
                    </li>
                </ul>
            </div>
            <div className="details-action"> 
                <ul>
                    <li>
                        Price: {product.price}
                    </li>
                    <li>
                        Status: {product.status}
                    </li>
                    <li>
                        Qty: <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </li>
                    <li>
                        <button className="button primary">Add to cart</button>

                    </li>

                </ul>

            </div>

            </div>            
            )        
        }       
       </div>
}
export default ProductScreen;
