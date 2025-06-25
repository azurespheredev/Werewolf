import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { TIMEZONE_OPTIONS } from '../lib/constants';
import { AnalyticsScopeEnum } from '../lib/enums';
import { APIResponse, JobOffer, JobsList } from '../lib/types';
import { convertToDate } from '../lib/utils';
import { JobInput, OfferLetterInput } from '../lib/validations';
import { apiService } from '../services/apiService';

interface JobState {
  isLoading: boolean;
  offers: JobOffer[] | null;
  list: JobsList[] | null;
}

export const fetchJobOffers = createAsyncThunk(
  'job/fetchOffers',
  async (_, thunkAPI) => {
    try {
      const scope =
        (localStorage.getItem('offer_scope') as AnalyticsScopeEnum) ||
        AnalyticsScopeEnum.ALL;
      const currentTimezone =
        localStorage.getItem('timezone') || TIMEZONE_OPTIONS.items[1].value;

      const response: APIResponse<JobOffer[]> = await apiService.get(
        '/job/offers',
        {
          params: {
            scope,
            timezone: currentTimezone,
          },
        },
      );

      if (response.success) {
        return response.data as JobOffer[];
      } else {
        return thunkAPI.rejectWithValue(response.message);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const fetchJobs = createAsyncThunk('job/list', async (_, thunkAPI) => {
  try {
    const response: APIResponse<JobsList[]> = await apiService.get('/job/list');

    if (response.success) {
      return response.data as JobsList[];
    } else {
      return thunkAPI.rejectWithValue(response.message);
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const createJobOffers = createAsyncThunk(
  'job/createOffer',
  async (jobOffer: OfferLetterInput, thunkAPI) => {
    const formData = new FormData();

    formData.append('companyName', jobOffer.companyName);
    formData.append('position', jobOffer.position);
    formData.append('salary', jobOffer.salary);
    formData.append('jobType', jobOffer.jobType);
    formData.append('source', jobOffer.source);
    formData.append('interviews', jobOffer.interviews);
    formData.append(
      'receivedAt',
      convertToDate(jobOffer.receivedAt).toISOString(),
    );
    formData.append(
      'startAt',
      jobOffer.startAt ? convertToDate(jobOffer.startAt).toISOString() : '',
    );

    if (jobOffer.document instanceof File) {
      formData.append('document', jobOffer.document);
    }

    try {
      const response: APIResponse<unknown> = await apiService.post(
        '/job/offer/create',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      if (response.success) {
        return response.message;
      } else {
        return thunkAPI.rejectWithValue(response.message);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const createJob = createAsyncThunk(
  'job/create',
  async (job: JobInput, thunkAPI) => {
    try {
      const response: APIResponse<unknown> = await apiService.post(
        '/job/create',
        job,
      );

      if (response.success) {
        return response.message;
      } else {
        return thunkAPI.rejectWithValue(response.message);
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState: JobState = {
  isLoading: false,
  offers: null,
  list: null,
};

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobOffers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.offers = action.payload;
      })
      .addCase(fetchJobOffers.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchJobs.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default jobSlice.reducer;
