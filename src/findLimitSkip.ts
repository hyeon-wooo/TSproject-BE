import { connect } from "./mongo/connect";
import { IFake } from "./fake";

const findLimitSkip = async () => {
  let connection, cursor;
  try {
    connection = await connect();
    const db = connection.db("ts-project1");
    const Users = db.collection("users");

    cursor = await Users.find({})
      .sort({ birthday: -1, name: 1 })
      .skip(100)
      .limit(5);
    let result = await cursor.toArray();

    console.log(
      result.map((user: IFake) => ({
        name: user.name,
        birthday: user.birthday,
      }))
    );
  } catch (e) {
    console.log(e.message);
  } finally {
    connection.close();
  }
};

findLimitSkip();
