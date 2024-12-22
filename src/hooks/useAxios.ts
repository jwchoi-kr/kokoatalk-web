import { useEffect } from 'react';
import { useAuth } from '../contexts/authContext';
import axiosInstance from '../apis/axiosInstance.ts';

export const useAxios = () => {
  const { accessToken } = useAuth();

  useEffect(() => {
    if (accessToken) {
      axiosInstance.defaults.headers['Authorization'] = `Bearer ${accessToken}`;
    } else {
      delete axiosInstance.defaults.headers['Authorization'];
    }
  }, [accessToken]);

  return axiosInstance;
};
