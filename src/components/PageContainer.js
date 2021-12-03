import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
// import NavBar from "./NavBar";
import History from "./pages/History";
import Home from "./pages/Home";
import Merchandise from "./pages/Merchandise";
import Member from "./pages/Member";
import Login from "./Login/Login";
// import useToken from "./useToken";
// import Dashboard from "./Dashboard/Dashboard";
// import Preferences from "./Preferences/Preferences";
// import PrivateRoute from "../Utils/PrivateRoute";
// import PublicRoute from "../Utils/PublicRoute";
import { getToken, removeUserSession, setUserSession } from "../Utils/Common";
import axios from "axios";

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState("Home");
//   // const [token, setToken] = useState();
//   const { token, setToken } = useToken();

//   // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
//   const renderPage = () => {
//     if (currentPage === "Home") {
//       return <Home />;
//     }
//     if (currentPage === "History") {
//       return <History />;
//     }
//     if (currentPage === "Merchandise") {
//       return <Merchandise />;
//     }
//     if(!token) {
//       return <Login setToken={setToken} />
//     }
//     return <Member />;
//     // <BrowserRouter>
//     //   <Routes>
//     //     <Route path="/member">
//     //       <Member />;
//     //     </Route>
//     //   </Routes>
//     // </BrowserRouter>;
//   };

//   return (
//     <div>
//       {/* We are passing the currentPage from state and the function to update it */}
//       <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
//       {/* Here we are calling the renderPage method which will return a component  */}
//       {renderPage()}
//     </div>
//   );
// }

export default function PageContainer() {
  // const [currentPage, setCurrentPage] = useState("Home");
  // const handlePageChange = (page) => setCurrentPage(page);

  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    axios
      .get(`http://localhost:4000/verifyToken?token=${token}`)
      .then((response) => {
        setUserSession(response.data.token, response.data.user);
        setAuthLoading(false);
      })
      .catch((error) => {
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
      return <div className="content">Checking Authentication...</div>
  }

  return (
    <div>
      <BrowserRouter>
        <div>
          <div>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink activeClassName="active" to="/history">
              History
            </NavLink>
            <small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/merchandise">
              Merchandise
            </NavLink>
            <small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/login">
              Login
            </NavLink>
            <small>(Access without token only)</small>
            <NavLink activeClassName="active" to="/member">
              Member
            </NavLink>
            <small>(Access with token only)</small>
          </div>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route path="/merchandise" element={<Merchandise />} />
              <Route path="/login" element={<Login />} />
              <Route path="/member" element={<Member />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}
