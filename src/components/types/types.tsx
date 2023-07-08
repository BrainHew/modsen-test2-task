export interface IBook {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
    };
  };

export interface IBookResponse {
    kind: string;
    items: IBook[];
    totalItems: number;
  }