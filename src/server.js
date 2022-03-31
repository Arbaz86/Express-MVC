const app = require("./index");
const port = 3030;

const connect = require("./configs/db");

app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on port ${port}`);
  } catch (e) {
    console.log(e.message);
  }
});
