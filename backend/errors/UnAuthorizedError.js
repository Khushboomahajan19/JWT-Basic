import CustomAPIError from "./CustomAPIError.js";
class UnAuthorizedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 401;
  }
}
export default UnAuthorizedError;
