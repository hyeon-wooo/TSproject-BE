import { connect } from "../mongo/connect";

const connectTest = async () => {
  let connection;
  try {
    connection = await connect();
    const db = await connection.db("ts-project1");
    console.log("[db] ", db);
  } catch (e) {
    console.log(e.message);
  } finally {
    connection.close();
  }
};

connectTest();
