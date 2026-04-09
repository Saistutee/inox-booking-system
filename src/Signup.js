import { useState } from "react";

function Signup({ close, openLogin }) {

const [form,setForm]=useState({
firstName:"",
lastName:"",
dob:"",
mobile:"",
email:"",
username:"",
password:""
});

const change=(e)=>{
setForm({...form,[e.target.name]:e.target.value});
};

const signup=()=>{

let users=JSON.parse(localStorage.getItem("users")) || [];

const exists=users.find(u=>u.username===form.username);

if(exists){
alert("Username already exists");
return;
}

users.push(form);

localStorage.setItem("users",JSON.stringify(users));

alert("Account created successfully");

close();
openLogin();

};

return(

<div className="login-overlay">

<div className="login-modal">

<h2>Create Account</h2>

<input
name="firstName"
placeholder="First Name"
onChange={change}
/>

<input
name="lastName"
placeholder="Last Name"
onChange={change}
/>

<input
type="date"
name="dob"
onChange={change}
/>

<input
name="mobile"
placeholder="Mobile Number"
onChange={change}
/>

<input
name="email"
placeholder="Email ID"
onChange={change}
/>

<input
name="username"
placeholder="Username"
onChange={change}
/>

<input
type="password"
name="password"
placeholder="Password"
onChange={change}
/>

<button className="login-button" onClick={signup}>
Create Account
</button>

<p className="signup-text">
Already have an account ?
<span onClick={openLogin}> Sign In</span>
</p>

<button className="close-button" onClick={close}>
Close
</button>

</div>
</div>

);

}

export default Signup;