import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const load = createAsyncThunk('locations/load', async (params, thunkApi) => {
	try {
		const response = await axios.get('http://api.vihobook.com/locations', { params });
		if (response.data.result) {
			return response.data;
		} else {
			throw new Error(response.data.message);
		}
	} catch (error) {
		console.log(error.message);
		throw Error(error);
	}
});

const slice = createSlice({
	name: 'locations',
	initialState: {
		list: [],
		loading: false,
		error: null,
	},
	reducers: {},
	extraReducers: {
		[load.pending]: (locations) => {
			locations.loading = true;
			locations.error = null;
		},
		[load.fulfilled]: (locations, action) => {
			locations.loading = false;
			locations.list = action.payload.dbResult;
		},
		[load.rejected]: (locations, action) => {
			locations.loading = false;
			locations.error = action.error.message;
		},
	},
});

export default slice.reducer;
