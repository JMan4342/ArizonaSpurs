import React from "react";

var Twitter = require('twitter');
require('dotenv/config');

const apikey = process.env.apikey
const apiSecretKey = process.env.apikeysecret
const bearerToken = process.env.bearertoken

var client = new Twitter({
  consumer_key: apikey,
  consumer_secret: apiSecretKey,
  bearer_token: bearerToken
});

function Home(props) {
    return (
      <div className="home">
        <div>
          <h2 className="m-3">Home</h2>
        </div>
        <div>
          <p>The official supporter club for Tottenham Hotspurs in Arizona.</p>
          <p>We get together for every Spurs match to cheer on our Lilywhites and hate Arsenal.</p>
        </div>
      </div>
    );
  }
  
  export default Home;
  