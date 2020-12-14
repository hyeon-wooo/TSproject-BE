const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const bodyParser = require("body-parser");
const cors = require("cors");

export const runServer = (db) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

  app.get("/", (req, res) => res.json({ msg: "HelloWorld" }));
  app.get("/users/:skip/:limit", async (req, res) => {
    const { skip, limit } = req.params;
    const Users = await db.collection("users");
    const cursor = await Users.find({})
      .sort({ name: 1 })
      .skip(parseInt(skip))
      .limit(parseInt(limit));
    const result = await cursor.toArray();
    res.json(result);
  });

  app.listen(port, () => console.log(`${port}번 포트에서 대기중`));
};
