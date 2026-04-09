import { useNavigate } from "react-router-dom";

function ThankYou(){

const navigate = useNavigate();

return(

<div className="success-container">

<div className="success-card">

<h2>Booking Confirmed 🎉</h2>

<p>Your movie tickets have been booked successfully.</p>

<button
className="home-btn"
onClick={()=>navigate("/profile")}
>
View Bookings
</button>

<button
className="home-btn"
onClick={()=>navigate("/movies")}
>
Book Another Movie
</button>

</div>

</div>

);

}

export default ThankYou;