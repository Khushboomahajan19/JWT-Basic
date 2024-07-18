import jwt from "jsonwebtoken";
import "dotenv/config";
import BadRequestError from "../errors/BadRequestError.js";
export const login = (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("Please provide username and password");
  }
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  console.log(token);

  res.status(200).json({
    msg: "user created ",
    token,
  });
};

export const dashboard = (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `${req.user.username} is logged in`,
    secret: `HERE IS YOUR AUTHORIZED DATA, YOUR LUCKY NUMBER IS ${luckyNumber}`,
  });
};
