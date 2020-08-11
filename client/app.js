const express = require("express");
const rc = require("./redis-client");

const app = express();

app.get("/favicon.ico", (_, res) => res.send("no icon"));

app.get("*", (req, res) => {
  const { redisClient, redisConnected, redisConnectionError } = rc;
  if (redisConnectionError) return res.send("Redis connection error.");
  if (!redisConnected) return res.send("Redis failed to connect.");
  redisClient.get("counter", (err, reply) => {
    if (err) return res.send(`Redis error reading counter. ${err}`);
    if (!reply) {
      redisClient.set("counter", 0, (err1, reply1) => {
        if (err)
          return res.send(`Redis error setting initial counter. ${err1}`);
        return res.send("Redis initial counter read set to zero.");
      });
    } else {
      const count = ++reply;
      redisClient.set("counter", count, (err2, reply2) => {
        if (err) return res.send(`Redis error setting counter. ${err2}`);
        return res.send(`Redis counter ${count}.`);
      });
    }
  });
});

module.exports = app;
