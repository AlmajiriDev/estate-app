export const errorHandler = (statusCode, message) => {
  const error = new Error(3);
  error.statusCode = statusCode;
  error.message = message;
  return error;
};
