import { connect } from "./mongo/connect";
import { getFileNameAndNumber } from "./utils";
import { csvReaderGen } from "./csv/csvReaderGen";

const insertCsvToMongo = async (csvFilename, collectionName, index) => {
  let connection;
  try {
    connection = await connect();
    const db = connection.db("ts-project1");
    const collection = db.collection(collectionName);

    await collection.deleteMany({});
    await collection.createIndex(index);

    let line = 1;
    for (let obj of csvReaderGen(csvFilename)) {
      await collection.insertOne(obj);
      console.log(`${line++} inserted.`);
    }
  } catch (e) {
    console.log(e.message);
  } finally {
    connection.close();
  }
};

const [filename] = getFileNameAndNumber("./data/fake-0.csv", 1);
insertCsvToMongo(filename, "users", { birthday: -1, name: 1 });
