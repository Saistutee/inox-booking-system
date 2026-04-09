import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword(){

const [username,setUsername]=useState("");
const [password,setPassword]=useState("");

const navigate=useNavigate();

const reset=()=>{

let users=JSON.parse(localStorage.getItem("users")) || [];

const index=users.findIndex(u=>u.username===username);

if(index===-1){
alert("User not found");
return;
}

users[index].password=password;

localStorage.setItem("users",JSON.stringify(users));

alert("Password updated successfully");

navigate("/");

};

return(

<div className="login-overlay">

<div className="login-modal">

<h2>Reset Password</h2>

<input
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<input
type="password"
placeholder="New Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<button className="login-button" onClick={reset}>
Update Password
</button>

<button
className="close-button"
onClick={()=>navigate("/")}>
Back to Login
</button>

</div>
</div>

);

}

export default ForgotPassword;