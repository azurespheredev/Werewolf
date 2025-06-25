import { createSlice } from '@reduxjs/toolkit';

interface AppState {
  isLoading: boolean;
  isServerConnected: boolean;
}

const initialState: AppState = {
  isLoading: false,
  isServerConnected: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setServerConnectionStatus: (state, action) => {
      state.isServerConnected = action.payload;
    },
  },
});

export const { setAppLoading, setServerConnectionStatus } = appSlice.actions;
export default appSlice.reducer;
