import { connect } from "./mongo/connect";
import { runServer } from "./runServer";

connect()
  .then(async (connection) => {
    const db = await connection.db("ts-project1");
    return db;
  })
  .then(runServer)
  .catch((e: Error) => console.log(e.message));
