/**
 * API response type
 *
 * @param T - The type of the data
 * @param ok - The status of the response
 * @param error - The error message
 *
 * @returns `ApiResponseType<T>`
 *
 * @example
 * const response = new ApiResponseType<Review[]>(data, null);
 *
 * if (response.ok) {
 *  console.log(response.data);
 * } else {
 * console.error(response.error);
 * }
 */
export class ApiResponseType<T> {
  ok: boolean;

  error: string | null;

  data: T;

  constructor(data: T, error: string | null) {
    this.ok = error ? false : true;
    this.error = error;
    this.data = data;
  }
}
