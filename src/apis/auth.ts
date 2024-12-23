import axiosInstance from './axiosInstance';
import { User } from '../pages/Unauthenticated/types.ts';

interface SignUpRequest {
  accountId: string;
  password: string;
  nickname: string;
}

interface SignInRequest {
  accountId: string;
  password: string;
  rememberMe: boolean;
}

interface SignInResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

interface RefreshTokenResponse {
  accessToken: string;
}

const signUp = async ({ accountId, password, nickname }: SignUpRequest) => {
  try {
    await axiosInstance.post('/api/auth/signup', {
      accountId: accountId,
      password: password,
      nickname: nickname,
    });
  } catch (error) {
    console.error('Error during sign up:', error);
  }
};

const signIn = async ({
  accountId,
  password,
  rememberMe,
}: SignInRequest): Promise<SignInResponse> => {
  try {
    const response = await axiosInstance.post('/api/auth/signin', {
      accountId: accountId,
      password: password,
      rememberMe: rememberMe,
    });
    return response.data;
  } catch (error) {
    console.error('Error during sign in:', error);
    throw error;
  }
};

const refreshAccessToken = async (): Promise<RefreshTokenResponse> => {
  try {
    const response = await axiosInstance.post(
      '/api/auth/refresh',
      {},
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error('Error during token refresh:', error);
    throw error;
  }
};

const signOut = async () => {
  try {
    await axiosInstance.post('/api/auth/signout');
  } catch (error) {
    console.error('Error during sign out:', error);
  }
};

export { signUp, signIn, refreshAccessToken, signOut };
