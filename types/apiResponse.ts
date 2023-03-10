type ApiResponse<T> = {
  count: number;

  next: string;

  pages_number: number;

  previous: string;
  results: T[];
};

export default ApiResponse;
