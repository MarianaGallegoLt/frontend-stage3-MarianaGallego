export interface MediaListResponse {
  data: {
    results: any; totalResults: number
  };
  error: boolean;
  Response: string;
}

export interface MediaInterface {
  id: string;
  poster: string;
  title: string;
  type: string;
  year: string;
  registerDate?: Date;
  comment?: string;
}
