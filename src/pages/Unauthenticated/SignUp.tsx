import React, { useState } from 'react';
import SignInInput from '../../components/SignIn/SignInInput.tsx';
import Button from '../../components/SignIn/SignInButton.tsx';
import ExtraButton from '../../components/SignIn/ExtraButton.tsx';
import { signUp } from '../../apis/auth.ts';

const SignUp = () => {
  const [nickname, setNickname] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      signUp({ accountId: id, password: password, nickname: nickname });
    }
  };

  return (
    <form
      onSubmit={handleSignUp}
      className="flex flex-col items-center justify-center"
    >
      <SignInInput
        type="text"
        placeholder="Name"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        className="rounded-b-none border-b-0"
      />
      <SignInInput
        type="text"
        placeholder="Email or Phone Number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="rounded-none border-b-0 border-t-gray-200"
      />
      <SignInInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-none border-b-0 border-t-gray-200"
        maxLength={32}
      />
      <SignInInput
        type="password"
        placeholder="Password Confirm"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        className="rounded-t-none border-t-gray-200"
        maxLength={32}
      />
      <Button
        label="Sign Up"
        disabled={
          nickname === '' ||
          id === '' ||
          password.length < 4 ||
          passwordConfirm.length < 4 ||
          password !== passwordConfirm
        }
        className="mb-28 mt-2"
      />
      <ExtraButton
        text="Sign In"
        link="/"
      />
    </form>
  );
};
export default SignUp;
