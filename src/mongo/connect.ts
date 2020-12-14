const mongoClient = require("mongodb");

export const connect = (mongoUrl: string = "mongodb://localhost:27017") =>
  mongoClient.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
