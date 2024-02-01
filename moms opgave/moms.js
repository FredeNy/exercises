"use strict"

momsBeregner(100, 20);
momsBeregner(200, 20);
momsBeregner(300, 20);

//momsBeregner
function momsBeregner(amount, moms = 25) {
    const totalAmount = amount*(1+moms/100)
    console.log(totalAmount);
}