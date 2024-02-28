// function combine(a,b,c){
//     return a*b/c;
// }

// console.log(combine(12,32,24));

// const combine = (a,b,c) =>{
//     return a * b / c;
// }

// const result = combine(100,2,3);
// console.log(result);

const cart=[
    {productName: "T-shirt", price: 10},
    {productName: "Jeans", price: 10},
    {productName: "Sneakers", price: 10},
    {productName: "Mask", price: 10},
    {productName: "Dress", price: 10},
    {productName: "Swim Suit", price: 10}

]

function calculateTotal(cart){
    let totalPrice = 0;
    for(let items of cart){
        totalPrice= items.price + totalPrice
    
    }
    return "Total Price: " + totalPrice;
}

const totalPrice = calculateTotal(cart);

console.log(totalPrice);


