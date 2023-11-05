class ApiException extends Error {
  constructor(
    public code: string,
    message: string,
  ) {
    super(message);
  }
}

export default ApiException;
