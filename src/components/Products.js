import React, {useState,useEffect} from 'react';
import api from "../services/api"
export default function Content(props){
    
    const [product,setProduct] = useState([]);

    useEffect(() =>{
        async function fetchMyAPI(){
            let response = await api.get('');
            response = await response.data;
            await setProduct(response);
        }
        fetchMyAPI();
    },[])
    
    function handleClickBuy(id,prod){
        const productStore = JSON.stringify(prod)
        localStorage.setItem(`@Produto-${id}`,productStore)

    }

   

    return(
        <section className="collum">
            <div className="titleProducts">
                <h2>Nossos Produtos</h2>
            </div>
            
            <ul className="containerProducts">
                {product.map( (prod,id) => (
                   <li className="product" key={prod.id}>
                       <p className="produto">{prod.name}</p>
                       <div className="containerPhoto">
                            <img className="photo" src={prod.photo}></img>
                       </div>
                       <p className="produto">{prod.description}</p>
                       <p className="produto font">R${prod.price},00</p>
                       <button className="buy" onClick={() => handleClickBuy(id,prod)}>Comprar</button>
                   </li> 
                ))}
            </ul>
            
            
        </section>
    );
}
