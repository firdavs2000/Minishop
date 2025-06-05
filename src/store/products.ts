import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  price: number;
  rating?: number;
  discountPercentage?: number;
  stock?: number;
  rate?: number;
  images?: string[];
  [key: string]: any;
}

interface ProductsState {
  products: Product[];
  searchTerm: string;
  sort: string;
  sortDirection: "asc" | "desc";
  page: number;
  limit: number;
  sortField: string;
}

const initialState: ProductsState = {
  products: [],
  searchTerm: "",
  sort: "",
  sortDirection: "asc",
  page: 1,
  limit: 12,
  sortField: '',
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
      state.page = 1; // qidiruv bo'lsa, 1-sahifaga qaytadi
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const {
  setProducts,
  setSearchTerm,
  setSort,
  setPage,
} = productsSlice.actions;

export default productsSlice.reducer;
