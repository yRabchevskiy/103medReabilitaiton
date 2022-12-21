export interface IBseApiResponse<T> {
  status: string;
  message: string;
  data: T;
}