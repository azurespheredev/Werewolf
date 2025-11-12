import axios, { type AxiosError, type AxiosInstance, type AxiosResponse } from "axios";

// Interceptor to handle errors globally
const setupInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error: AxiosError) => {
      if (error.response) {
        const errorDetail = error.response.data;
        if (typeof errorDetail === "string") {
          return Promise.reject(new Error(errorDetail));
        }
        return Promise.reject(new Error("Unexpected error occurred."));
      }

      if (error.request) {
        // No response was received (e.g. server is down, CORS issue, etc.)
        return Promise.reject(new Error("Cannot connect to server."));
      }

      // Something else happened setting up the request
      return Promise.reject(new Error(error.message || "Unknown error occurred."));
    }
  );
};

// Create a single Axios instance and always attach interceptors
const apiService: AxiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

setupInterceptors(apiService);

export const getApiService = () => apiService;
