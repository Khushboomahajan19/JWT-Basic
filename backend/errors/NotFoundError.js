import CustomAPIError from "./CustomAPIError.js";
import { StatusCodes } from "http-status-codes";
class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}
export default NotFoundError;
