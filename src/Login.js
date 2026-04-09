import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ close, openSignup, setUser }) {

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");

const navigate=useNavigate();

const login=()=>{

let users=JSON.parse(localStorage.getItem("users")) || [];

const found=users.find(
u=>u.username===username && u.password===password
);

if(!found){
alert("Username or Password is wrong! Try again!");
return;
}

localStorage.setItem("currentUser",JSON.stringify(found));
setUser(found);

close();
navigate("/movies");

};

return(

<div className="login-overlay">

<div className="login-modal">

<h2>Sign In</h2>

<input
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="login-button" onClick={login}>
Sign In
</button>

<p className="signup-text">
Don't have an account ?
<span onClick={openSignup}> Sign Up</span>
</p>

<p
className="forgot-text"
onClick={()=>navigate("/forgot")}
>
Forgot Password?
</p>

<button className="close-button" onClick={close}>
Close
</button>

</div>
</div>

);

}

export default Login;