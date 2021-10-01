import React from "react";

// var Twit = require('twit');
require('dotenv').config();

const apikey = process.env.apikey
const apiSecretKey = process.env.apikeysecret
const accessToken = process.env.accesstoken
const tokenSecret = process.env.accesstokensecret
const bearerToken = process.env.bearertoken

// var T = new Twit({
//   consumer_key: apikey,
//   consumer_secret: apiSecretKey,
//   access_token: accessToken,
//   access_token_secret: tokenSecret,
// })

// (async () => {
//   T.stream('user', [])
//   stream.on('tweet', function (tweet) {

//   })
// })

const needle = require('needle');

const userId = "1443699793499353107";
const url = `https://api.twitter.com/2/users/${userId}/tweets?expansions=author_id`;

const getUserTweets = async () => {
  let userTweets = [];

  const options = {
      headers: {
          "User-Agent": "v2UserTweetsJS",
          "authorization": `Bearer ${bearerToken}`
      }
  }

  let hasNextPage = true;
  let nextToken = null;
  let userName;
  console.log("Retrieving Tweets...");

  while (hasNextPage) {
      let resp = await getPage(options, nextToken);
      if (resp && resp.meta && resp.meta.result_count && resp.meta.result_count > 0) {
          userName = resp.includes.users[0].username;
          if (resp.data) {
              userTweets.push.apply(userTweets, resp.data);
          }
          if (resp.meta.next_token) {
              nextToken = resp.meta.next_token;
          } else {
              hasNextPage = false;
          }
      } else {
          hasNextPage = false;
      }
  }

  console.dir(userTweets, {
      depth: null
  });
  console.log(`Got ${userTweets.length} Tweets from ${userName} (user ID ${userId})!`);

}

const getPage = async (params, options, nextToken) => {
  if (nextToken) {
      params.pagination_token = nextToken;
  }

  try {
      const resp = await needle('get', url, params, options);

      if (resp.statusCode !== 200) {
          console.log(`${resp.statusCode} ${resp.statusMessage}:\n${resp.body}`);
          return;
      }
      return resp.body;
  } catch (err) {
      throw new Error(`Request failed: ${err}`);
  }
}

getUserTweets();

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
  