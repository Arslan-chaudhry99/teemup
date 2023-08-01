const ErrorWrapper = (asyncFunction) => {
  return async (...args) => {
    try {
      return await asyncFunction(...args);
    } catch (error) {

      console.log("An error occurred:", error?.response);
      // Optionally, you can re-throw the error to propagate it further
      // throw error;
    }
  };
};

export default ErrorWrapper;
