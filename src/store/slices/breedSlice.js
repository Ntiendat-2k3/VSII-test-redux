import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import breedService from '../../services/breedService';

export const fetchAllBreeds = createAsyncThunk(
  'breeds/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await breedService.getAllBreeds();
      return data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.message ||
        'Đã xảy ra lỗi không xác định';
      return rejectWithValue(message);
    }
  }
);

const initialState = {
  breeds: [],
  loading: false,
  error: null,
};

const breedSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBreeds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllBreeds.fulfilled, (state, action) => {
        state.loading = false;
        state.breeds = action.payload.data;
        state.error = null;
      })
      .addCase(fetchAllBreeds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError } = breedSlice.actions;

// Selectors
export const selectBreeds = (state) => state.breeds.breeds;
export const selectBreedsLoading = (state) => state.breeds.loading;
export const selectBreedsError = (state) => state.breeds.error;

export default breedSlice.reducer;
