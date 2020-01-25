import apisauce from 'apisauce';
import NetInfo from '@react-native-community/netinfo';

export const apiConfig = baseURL =>
  apisauce.create({
    baseURL,
    timeout: 30000,
    headers: {'Cache-Control': 'no-cache'},
  });

function checkInternetConnectivity(response) {
  return NetInfo.fetch().then(state => {
    if (response === null && state.isConnected === false) {
      return 'Please check your internet connection';
    } else {
      return response?.error || 'Something went wrong!';
    }
  });
}

// TODO: Move this to API(common place) and update errors
export async function getError(response) {
  // if (response.problem === 'CLIENT_ERROR') return response.data.error;
  if (response?.problem === 'NETWORK_ERROR') {
    return 'Please check your internet connection';
  }
  if (['CONNECTION_ERROR', 'SERVER_ERROR'].includes(response?.problem)) {
    return 'Server is not available';
  }
  const error = await checkInternetConnectivity(response);
  return error;
}
