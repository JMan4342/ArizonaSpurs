import React from "react";

export default function Login() {
  return (
    <div>
      <h1>Please Enter Password</h1>
      <form>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
