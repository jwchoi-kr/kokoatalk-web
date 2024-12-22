import axiosInstance from './axiosInstance';

interface SignUpRequest {
  loginId: string;
  password: string;
  nickname: string;
}

const signUp = async ({ loginId, password, nickname }: SignUpRequest) => {
  try {
    const response = await axiosInstance.post('/api/auth/signup', {
      loginId: loginId,
      password: password,
      nickname: nickname,
    });
  } catch (error) {
    console.error('Error during sign up:', error);
  }
};

export { signUp };
