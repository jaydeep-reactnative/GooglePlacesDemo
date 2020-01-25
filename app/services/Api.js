import {apiConfig} from './Utils';
import Secrets from 'react-native-config';

const api = apiConfig(__DEV__ ? Secrets.API_URL_DEBUG : Secrets.API_URL);

const location = () => {
  console.log('API called');
  const getLocation = () => api.post(api);
  return {
    getLocation,
  };
};

export default {
  location,
};
