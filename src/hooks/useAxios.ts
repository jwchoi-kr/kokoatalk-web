import { useEffect } from 'react';
import { useAuth } from '../contexts/authContext';
import axiosInstance from '../apis/axiosInstance.ts';

export const useAxios = () => {
  const { accessToken } = useAuth();

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        } else {
          delete config.headers['Authorization'];
        }
        return config;
      }
    );

    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [accessToken]);

  return axiosInstance;
};
