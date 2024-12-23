import { useEffect } from 'react';
import axiosInstance from '../apis/axiosInstance';
import { useAuth } from '../contexts/authContext.tsx';
import { refreshAccessToken } from '../apis/auth.ts';

export const useAxiosInterceptor = () => {
  const { accessToken, setAccessToken, clearAuth } = useAuth();

  useEffect(() => {
    const resInterceptor = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && error.response.status === 401) {
          try {
            const { accessToken } = await refreshAccessToken();
            if (accessToken) {
              setAccessToken(accessToken);
            }
            axiosInstance.defaults.headers['Authorization'] =
              `Bearer ${accessToken}`;
            return axiosInstance(error.config);
          } catch (refreshError) {
            // 리프레시도 실패함
            clearAuth();
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(resInterceptor);
    };
  }, [accessToken, setAccessToken, clearAuth]);
};
