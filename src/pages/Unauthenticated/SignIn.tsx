import React, { useState } from 'react';
import Button from '../../components/SignIn/SignInButton.tsx';
import SignInInput from '../../components/SignIn/SignInInput.tsx';
import RememberMeCheckbox from '../../components/SignIn/RememberMeCheckbox.tsx';
import ExtraButton from '../../components/SignIn/ExtraButton.tsx';
import { signIn } from '../../apis/auth.ts';
import { useAuth } from '../../contexts/authContext.tsx';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberMe, setIsRememberMe] = useState(false);

  const { setAuth } = useAuth();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await signIn({
      accountId: id,
      password: password,
      rememberMe: isRememberMe,
    });

    if (response) {
      setAuth(response.accessToken, response.user);
      navigate('/');
    }
  };

  return (
    <form
      onSubmit={handleSignIn}
      className="flex flex-col items-center justify-center"
    >
      <SignInInput
        type="text"
        placeholder="Email or Phone Number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="rounded-b-none border-b-0"
      />
      <SignInInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-t-none border-t-gray-200"
        maxLength={32}
      />
      <Button
        label="Log in"
        disabled={id === '' || password.length < 4}
        className="mb-4 mt-2"
      />
      <RememberMeCheckbox
        isChecked={isRememberMe}
        onChange={(e) => setIsRememberMe(e.target.checked)}
        className="mb-28 self-start"
      />
      <ExtraButton
        text="Sign Up"
        link="/auth/signUp"
      />
    </form>
  );
};

export default SignIn;
