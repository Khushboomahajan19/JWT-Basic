class CustomAPIError extends Error {
  constructor(message) {
    super(message);
    // this.statusCode = statusCode;
  }
}
export default CustomAPIError;
