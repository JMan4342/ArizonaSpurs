import React from "react";

// const Twit = require('twit');
// const Twitter = require('twitter');
// require('dotenv').config();
// console.log('Application started');

// const consumer_key = process.env.consumer_key
// const consumer_secret = process.env.consumer_secret
// const access_token = process.env.access_token
// const access_token_secret = process.env.access_token_secret
// const bearer_token = process.env.bearer_token

// var T = new Twit({
//   consumer_key: consumer_key,
//   consumer_secret: consumer_secret,
//   access_token: access_token,
//   access_token_secret: access_token_secret,
// })

// var stream = T.stream('statuses/filter', {track: '#TOTAVL'});

// stream.on('tweet', function (tweet){
//   console.log(tweet);
// })
export default function Home(props) {
  window.twttr = (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
      t._e.push(f);
    };

    return t;
  })(document, "script", "twitter-wjs");

  return (
    <div className="home">
      <div>
        <h2 className="m-3">Home</h2>
      </div>
      <div>
        <p>The official supporter club for Tottenham Hotspurs in Arizona.</p>
        <p>
          We get together for every Spurs match to cheer on our Lilywhites and
          hate Arsenal.
        </p>
      </div>
      <div>
        <a
          className="twitter-timeline"
          data-width="400"
          data-height="600"
          data-theme="dark"
          href="https://twitter.com/JoeyM_Developer?ref_src=twsrc%5Etfw"
        >
          Tweets by ArizonaSpurs
        </a>{" "}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>{" "}
      </div>
    </div>
  );
}
