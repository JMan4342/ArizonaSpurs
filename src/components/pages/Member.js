import React from "react";
import { 
  getUser, 
  removeUserSession 
} from "../../Utils/Common";

export default function Member(props) {
  const user = getUser();

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <div className="shop">
      <div>
        <h2 className="m-3">Member Dashboard</h2>
      </div>
      <h3>Welcome {user}!</h3>
      <input type="button" onClick={handleLogout} value="Logout" />
      <div>
        <p>
          The Arizona Spurs member page will feature member only benefits that
          include discounts to the Official Spurs shop, access to tickets, early
          access to Arizona Spurs merchandise, and club news.
        </p>
      </div>
      <div>
        <h3>Spurs Shop Discount Codes</h3>
        <h4>**************</h4>
        <p>Enter this code in the discount code section at checkout.</p>
      </div>
    </div>
  );
}
