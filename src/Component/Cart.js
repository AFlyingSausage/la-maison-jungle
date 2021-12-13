import React from 'react';
const Cart = () => {
    const monstera = 8
    const lierre = 10
    const bouquet = 12
    return (
      <React.Fragment>
    <ul>
        <li>Monstera : {monstera} €</li>
        <li>Lierre : {lierre} €</li>
        <li>Bouquet de fleurs : {bouquet} €</li>
    </ul>
    <p>Le total du panier est de : {monstera+lierre+bouquet} </p>
    </React.Fragment>)
}
export default Cart