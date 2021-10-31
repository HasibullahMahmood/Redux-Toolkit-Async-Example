import store from '../store/index';
import { projectAdded } from '../store/slices/projects';
import { load as loadLocations } from '../store/slices/locations';

store.dispatch(projectAdded({ title: 'Project 1' }));

const main = async () => {
	await store.dispatch(loadLocations());
	console.log('store.getState(): ', store.getState());
};

main();
