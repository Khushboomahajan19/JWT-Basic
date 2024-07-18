import NotFoundError from "../errors/NotFoundError.js";
const notFound = (req, res) => {
  // return res.send("Route does not exists");
  throw new NotFoundError("Route does not exist");
};
export default notFound;
