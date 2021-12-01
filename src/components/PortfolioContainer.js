import React, { useState } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import History from "./pages/History";
import Home from "./pages/Home";
import Merchandise from "./pages/Merchandise";
import Member from "./pages/Member";
import Login from "./Login/Login";
import useToken from "./useToken";
// import Dashboard from "./Dashboard/Dashboard";
// import Preferences from "./Preferences/Preferences";

// function setToken(userToken) {
//   sessionStorage.setItem('token', JSON.stringify(userToken));
// }

// function getToken() {
//   const tokenString = sessionStorage.getItem('token');
//   const userToken = JSON.parse(tokenString);
//   return userToken?.token
// }

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");
  // const [token, setToken] = useState();
  const { token, setToken } = useToken();

  
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "History") {
      return <History />;
    }
    if (currentPage === "Merchandise") {
      return <Merchandise />;
    }
    if(!token) {
      return <Login setToken={setToken} />
    } 
    return <Member />;
    // <BrowserRouter>
    //   <Switch>
    //     <Route path="/member">
    //       <Member />;
    //     </Route>
    //   </Switch>
    // </BrowserRouter>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
