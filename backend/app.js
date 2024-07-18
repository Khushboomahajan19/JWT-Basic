import express from "express";
import cors from "cors";
import "express-async-errors";

import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
import userRoute from "./routes/userRoute.js";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(notFound);
app.use(errorHandler);

const start = () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

start();
