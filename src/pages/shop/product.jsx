

import "./shop.css"
export const Product=(props)=>{

    const{productName,productImage,price,id}=props.data;

    return(
        <div className="product">
            <img src={productImage}/>
            <div>
                <p><b>{productName}</b></p>
                <p><b>{price}</b></p> 
            </div>

        </div>
    )
}
