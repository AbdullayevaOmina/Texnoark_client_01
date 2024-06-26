export interface GetAll {
  page: number;
  limit: number;
  search: string | null | undefined;
}

export interface CategoryData {
  id: number;
  createdAt: string;
  lastUpdateAt: string;
  name: string;
}

export interface CategoryStoreState {
  categoriesData: any[];
  isLoading: boolean;
  totalCount: number;
  getAll: (params: GetAll) => Promise<void>;
}