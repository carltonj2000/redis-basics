const redis = require("redis");

const host = process.env.HOSTNAME || "localhost";
const password = process.env.PASSWORD;
const options = password ? { password } : {};
const redisClient = redis.createClient(6379, host, options);

const exp = {
  redisClient,
  redisConnectionError: false,
  redisConnected: false,
};

redisClient.on("error", (err) => {
  exp.redisConnectionError = true;
  console.error(err);
  process.exit(-1);
});

redisClient.on("connect", () => {
  exp.redisConnected = true;
  console.log("Redis Connected");
});

module.exports = exp;
