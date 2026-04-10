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

const PrivateRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/" replace />;
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("currentUser");
      if (saved) setUser(JSON.parse(saved));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<Home user={user} />} />

        <Route
          path="/movies"
          element={
            <PrivateRoute user={user}>
              <Movies />
            </PrivateRoute>
          }
        />

        <Route
          path="/theatres"
          element={
            <PrivateRoute user={user}>
              <Theatres />
            </PrivateRoute>
          }
        />

        <Route
          path="/booking"
          element={
            <PrivateRoute user={user}>
              <Booking />
            </PrivateRoute>
          }
        />

        <Route
          path="/food"
          element={
            <PrivateRoute user={user}>
              <Food />
            </PrivateRoute>
          }
        />

        <Route
          path="/ticket"
          element={
            <PrivateRoute user={user}>
              <Ticket user={user} />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <PrivateRoute user={user}>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route path="/success" element={<ThankYou />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;