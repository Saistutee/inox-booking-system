import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import inox from "./images/inox.png";
import avengers from "./images/avengers.jpg";
import interstellar from "./images/interstellar.jpg";
import inception from "./images/inception.jpg";
import spiderman from "./images/spiderman.jpg";

function Home({ user }) {

const navigate=useNavigate();

const posters=[
avengers,
interstellar,
inception,
spiderman
];

const [index,setIndex]=useState(0);

useEffect(()=>{
const timer=setInterval(()=>{
setIndex((prev)=>(prev+1)%posters.length);
},2000);

return()=>clearInterval(timer);

},[]);

const showMovies=()=>{

if(!user){
alert("Please login first");
return;
}

navigate("/movies");

};

return(

<div className="home-container">

<div className="home-left">

<img src={inox} className="pvr-logo"/>

<h1>Welcome to INOX Movie Booking System</h1>

<p>Book movie tickets and food combos easily</p>

<button className="show-btn" onClick={showMovies}>
Show Movies →
</button>

</div>

<div className="home-right">

<img src={posters[index]} />

</div>

</div>

);

}

export default Home;