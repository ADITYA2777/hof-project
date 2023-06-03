const exchangeRate = 80 // 1 usd to 80 Inr

const itemlist=[
    {item:'item1',price:10},
    {item:'item2',price:20},
    {item:'item3',price:30}
];
const converted =itemlist.map(item =>{
 const convertedPrice = item.price * exchangeRate
 return{item:item.item,price:convertedPrice}
});

console.log(converted);