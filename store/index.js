import { configureStore, combineReducers } from '@reduxjs/toolkit';
import locationsReducer from './slices/locations';
import projectsReducer from './slices/projects';

const reducer = combineReducers({
	locations: locationsReducer,
	projects: projectsReducer,
});

const store = configureStore({
	reducer: reducer,
	middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export default store;
