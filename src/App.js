import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Movies from "./Movies";
import Theatres from "./Theatres";
import Booking from "./Booking";
import Food from "./Food";
import Ticket from "./Ticket";
import Profile from "./Profile";
import ThankYou from "./ThankYou";
import ForgotPassword from "./ForgotPassword";

function App() {

const [user,setUser]=useState(null);

useEffect(()=>{
const saved=localStorage.getItem("currentUser");
if(saved) setUser(JSON.parse(saved));
},[]);

const PrivateRoute=({children})=>{
return user? children : <Navigate to="/" />;
};

return(

<>
<Navbar user={user} setUser={setUser}/>

<Routes>

<Route path="/" element={<Home user={user}/>}/>

<Route path="/movies"
element={
<PrivateRoute>
<Movies/>
</PrivateRoute>
}
/>

<Route path="/theatres"
element={
<PrivateRoute>
<Theatres/>
</PrivateRoute>
}
/>

<Route path="/booking"
element={
<PrivateRoute>
<Booking/>
</PrivateRoute>
}
/>

<Route path="/food"
element={
<PrivateRoute>
<Food/>
</PrivateRoute>
}
/>

<Route path="/ticket"
element={
<PrivateRoute>
<Ticket user={user}/>
</PrivateRoute>
}
/>

<Route path="/profile"
element={
<PrivateRoute>
<Profile/>
</PrivateRoute>
}
/>

<Route path="/success" element={<ThankYou/>}/>

<Route path="/forgot" element={<ForgotPassword/>}/>

</Routes>

</>

);

}

export default App;