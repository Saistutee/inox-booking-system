import { useState } from "react";
import { Link } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";

function Navbar({ user, setUser }) {

const [showLogin,setShowLogin]=useState(false);
const [showSignup,setShowSignup]=useState(false);

const logout=()=>{
localStorage.removeItem("currentUser");
setUser(null);
};

return(

<>
<div className="navbar">

<div className="logo">INOX</div>

<div className="nav-right">

{user ? (
<>
<span className="welcome">
Hi, {user.username}
</span>

<Link to="/profile" className="nav-link">
View Profile
</Link>

<button className="logout-btn" onClick={logout}>
Logout
</button>
</>
) : (
<button
className="login-btn"
onClick={()=>setShowLogin(true)}
>
Login
</button>
)}

</div>
</div>

{showLogin && (
<Login
close={()=>setShowLogin(false)}
openSignup={()=>{
setShowLogin(false);
setShowSignup(true);
}}
setUser={setUser}
/>
)}

{showSignup && (
<Signup
close={()=>setShowSignup(false)}
openLogin={()=>{
setShowSignup(false);
setShowLogin(true);
}}
/>
)}

</>

);

}

export default Navbar;