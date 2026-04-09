import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Food(){

const navigate = useNavigate();

const seatTotal = parseInt(localStorage.getItem("totalPrice")) || 0;

const combos = [
{ name:"Popcorn + Coke", price:250 },
{ name:"Nachos + Pepsi", price:300 },
{ name:"Burger + Fries + Coke", price:400 }
];

const [selected,setSelected] = useState([]);

const toggle = (combo)=>{

if(selected.includes(combo)){
setSelected(selected.filter(c=>c!==combo));
}else{
setSelected([...selected,combo]);
}

};

const foodTotal = selected.reduce(
(sum,item)=>sum+item.price,0
);

const grandTotal = seatTotal + foodTotal;

const complete = ()=>{

localStorage.setItem(
"food",
JSON.stringify(selected)
);

localStorage.setItem("foodTotal",foodTotal);
localStorage.setItem("grandTotal",grandTotal);

navigate("/ticket");

};

return(

<div className="food-container">

<h2>Select Food Combos</h2>

{combos.map(combo=>(
<div
key={combo.name}
className={`food-item ${
selected.includes(combo)?"selected":""
}`}
onClick={()=>toggle(combo)}
>

<div>{combo.name}</div>
<div>₹ {combo.price}</div>

</div>
))}

<div className="food-total">

<div>Seat Total : ₹ {seatTotal}</div>
<div>Food Total : ₹ {foodTotal}</div>

<h3>Grand Total : ₹ {grandTotal}</h3>

</div>

<button
className="complete-btn"
onClick={complete}
>
Complete Booking
</button>

</div>

);

}

export default Food;