import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking(){

const navigate = useNavigate();

const rows = ["A","B","C","D","E","F","G","H","I","J"];

const [count,setCount] = useState(1);
const [selected,setSelected] = useState([]);

const getPrice = (row)=>{
if(["A","B","C"].includes(row)) return 250;
if(["D","E","F"].includes(row)) return 200;
return 150;
};

const toggleSeat = (seat,row)=>{

if(selected.includes(seat)){
setSelected(selected.filter(s=>s!==seat));
return;
}

if(selected.length>=count) return;

setSelected([...selected,seat]);

};

const total = selected.reduce((sum,seat)=>{
const row = seat.charAt(0);
return sum + getPrice(row);
},0);

const proceed = ()=>{

localStorage.setItem("selectedSeats",JSON.stringify(selected));
localStorage.setItem("totalPrice",total);

navigate("/food");

};

return(

<div className="seat-container">

<h2>Select Seats</h2>

{/* Seat count */}

<div className="count-selector">

{[1,2,3,4,5,6,7,8,9,10].map(n=>(
<button
key={n}
className={count===n?"count-active":"count-btn"}
onClick={()=>setCount(n)}
>
{n}
</button>
))}

</div>

{/* seats */}

<div className="seat-grid">

{rows.map(row=>(
<div className="seat-row" key={row}>

<div className="row-label">{row}</div>

{[...Array(15)].map((_,i)=>{

const seat = row+(i+1);

return(
<div
key={seat}
className={`seat ${
selected.includes(seat)?"selected":""
}`}
onClick={()=>toggleSeat(seat,row)}
>
{i+1}
</div>
);

})}

</div>
))}

</div>

{/* screen */}

<div className="screen-box">
SCREEN THIS WAY
</div>

{/* footer */}

<div className="selected-bar">

<div>
Seats: {selected.join(", ")}
</div>

<div>
₹ {total}
</div>

<button
className="proceed-btn"
onClick={proceed}
>
Proceed to Add-on's
</button>

</div>

</div>

);

}

export default Booking;