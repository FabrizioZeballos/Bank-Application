export class HTTPError extends Error {
  constructor(
    message: string,
    public statusCode: number
  ) {
    super(message);
    this.statusCode = statusCode;
    this.name = "HTTP Error";
  }
}
