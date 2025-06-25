import { configureStore } from '@reduxjs/toolkit';

// import jobReducer from './jobSlice';
import appReducer from './appSlice';

export const store = configureStore({
  reducer: {
    // job: jobReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
