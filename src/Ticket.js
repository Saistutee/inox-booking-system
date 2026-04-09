import { useNavigate } from "react-router-dom";

function Ticket(){

const navigate = useNavigate();

const movie = JSON.parse(localStorage.getItem("selectedMovie"));
const booking = JSON.parse(localStorage.getItem("booking"));
const seats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
const food = JSON.parse(localStorage.getItem("food")) || [];

const seatTotal = parseInt(localStorage.getItem("totalPrice")) || 0;
const foodTotal = parseInt(localStorage.getItem("foodTotal")) || 0;
const grandTotal = parseInt(localStorage.getItem("grandTotal")) || 0;

const bookingID = "INOX" + Math.floor(Math.random()*1000000);

const qrData = `
Movie: ${movie.title}
Theatre: ${booking.theatre}
Time: ${booking.time}
Seats: ${seats.join(",")}
Total: ${grandTotal}
ID: ${bookingID}
`;

const qrURL =
`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}`;

const confirm = ()=>{

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

bookings.push({
movie: movie.title,
theatre: booking.theatre,
time: booking.time,
seats,
food,
total: grandTotal,
id: bookingID
});

localStorage.setItem("bookings",JSON.stringify(bookings));

navigate("/success");

};

return(

<div className="ticket-container">

<div className="ticket-card">

<div className="ticket-header">
INOX E-Ticket
</div>

<div className="ticket-body">

<h3>{movie.title}</h3>

<div className="ticket-row">
<span>Theatre</span>
<span>{booking.theatre}</span>
</div>

<div className="ticket-row">
<span>Time</span>
<span>{booking.time}</span>
</div>

<div className="ticket-row">
<span>Seats</span>
<span>{seats.join(", ")}</span>
</div>

<div className="ticket-row">
<span>Food</span>
<span>
{food.length===0
?"None"
:food.map(f=>f.name).join(", ")
}
</span>
</div>

<div className="ticket-total">
Grand Total ₹ {grandTotal}
</div>

<div className="ticket-row">
<span>Booking ID</span>
<span>{bookingID}</span>
</div>

<div className="qr-box">
<img src={qrURL} alt="QR"/>
</div>

</div>

<button
className="confirm-btn"
onClick={confirm}
>
Confirm Booking
</button>

</div>

</div>

);

}

export default Ticket;