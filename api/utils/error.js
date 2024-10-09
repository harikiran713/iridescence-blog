const errorHandler = (statusCode, message) => {
    const error = new Error(message); // Pass the message to the Error constructor
    error.statusCode = statusCode;
    return error;
  };
  
  module.exports = errorHandler;
  