import { useNavigate } from "react-router-dom";

function Theatres(){

const navigate = useNavigate();

const timings = [
"10:00 AM",
"01:30 PM",
"05:00 PM",
"09:00 PM"
];

const selectShow = (theatre,time)=>{

localStorage.setItem(
"booking",
JSON.stringify({
theatre,
time
})
);

navigate("/booking");

};

return(

<div className="theatre-container">

<h2>Select Theatre & Show Time</h2>

{/* INOX */}

<div className="theatre-card">

<h3>INOX Selvam Cinemas - Vellore</h3>

<div className="time-row">

{timings.map((time)=>(
<button
key={time}
className="time-btn"
onClick={()=>selectShow(
"INOX Selvam Cinemas - Vellore",
time
)}
>
{time}
</button>
))}

</div>

</div>


{/* PVR */}

<div className="theatre-card">

<h3>
PVR Velocity, Silk Mall, Gandhi Nagar - Vellore
</h3>

<div className="movie-meta">
3D English
</div>

<div className="time-row">

{timings.map((time)=>(
<button
key={time}
className="time-btn"
onClick={()=>selectShow(
"PVR Velocity, Silk Mall, Gandhi Nagar - Vellore",
time
)}
>
{time}
</button>
))}

</div>

</div>

</div>

);

}

export default Theatres;