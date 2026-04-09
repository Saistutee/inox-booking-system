function Profile(){

const user = JSON.parse(localStorage.getItem("currentUser"));
const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

return(

<div className="profile-container">

<h2>My Profile</h2>

<div className="profile-card">

<p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
<p><strong>Email:</strong> {user.email}</p>
<p><strong>Mobile:</strong> {user.mobile}</p>

</div>

<h2>My Bookings</h2>

{bookings.length===0 && (
<p>No bookings yet</p>
)}

{bookings.map((b,i)=>(
<div className="booking-card" key={i}>

<h3>{b.movie}</h3>

<p>{b.theatre}</p>

<p>Time: {b.time}</p>

<p>Seats: {b.seats.join(", ")}</p>

<p>Total: ₹ {b.total}</p>

</div>
))}

</div>

);

}

export default Profile;