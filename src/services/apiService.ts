import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
} from 'axios';

let apiService: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to handle errors globally
const setupInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error: AxiosError) => {
      if (error.response) {
        const errorDetail = error.response.data;
        if (typeof errorDetail === 'string') {
          return Promise.reject(new Error(errorDetail));
        }
        return Promise.reject(new Error('Unexpected error occurred.'));
      }

      if (error.request) {
        // No response was received (e.g. server is down, CORS issue, etc.)
        return Promise.reject(new Error('Cannot connect to server.'));
      }

      // Something else happened setting up the request
      return Promise.reject(
        new Error(error.message || 'Unknown error occurred.'),
      );
    },
  );
};

// Call this after the user enters the server IP
export const configureApiService = (baseURL: string) => {
  apiService = axios.create({
    baseURL: `http://${baseURL}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  setupInterceptors(apiService);
};

export const getApiService = () => apiService;
