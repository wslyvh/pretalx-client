export interface ClientResponse<T> {
  status: number;
  message: string;
  data: T | null;
}
