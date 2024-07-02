import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_URL = 'http://192.168.100.44:5000/';

const ApiHandler = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
  });

  instance.interceptors.request.use(
    async (config) => {
      try {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        console.log('Unauthorized, redirecting to login...');
      }
      return Promise.reject(error);
    }
  );

  return instance;
};

export default ApiHandler;
