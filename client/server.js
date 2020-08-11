const redisApp = require("./app");
const networkIfs = require("./utils");

console.log(networkIfs);

const PORT = process.env.PORT || 4000;
redisApp.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));
