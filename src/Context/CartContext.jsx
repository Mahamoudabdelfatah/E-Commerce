import axios from "axios";
import { createContext, useState } from "react";

export let CartContext = createContext();

export default function CartContextProvider(props) {


    const [cartCount, setCartCount] = useState(0);
    const [cartInfo, setCartInfo] = useState(null)

    let headers;

    if (localStorage.getItem("userToken")) {
        headers = {
            token: localStorage.getItem("userToken")
        }
    }


    function getLoggedUserCart() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, { headers: headers })
            .then((response) => {
                setCartCount(response.data.numOfCartItems)
                return response;
            })
            .catch((error) => error)
    }
    function addProductToCart(productId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, { productId: productId }, { headers: headers })
            .then((response) => {
                setCartCount(response.data.numOfCartItems)
                return response;
            })
            .catch((error) => error)
    }
    function updateCartCount(productId, count) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { count: count }, { headers: headers })
            .then((response) => {
                setCartCount(response.data.numOfCartItems)
                return response;
            })
            .catch((error) => error)

    }
    function removeProductToCart(productId) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { headers: headers })
            .then((response) => {
                setCartCount(response.data.numOfCartItems)
                return response;
            })
            .catch((error) => error)

    }
    function clearAllCart() {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, { headers: headers })
            .then((response) => {
                setCartCount(0)
                return response;
            })
            .catch((error) => error)
    }



    function clearCartAfterOrder() {
        setCartCount(0)
    }


    return (
        <CartContext.Provider value={{ getLoggedUserCart, addProductToCart, updateCartCount, removeProductToCart, clearAllCart, cartCount , clearCartAfterOrder }}>
            {props.children}
        </CartContext.Provider>
    )

}