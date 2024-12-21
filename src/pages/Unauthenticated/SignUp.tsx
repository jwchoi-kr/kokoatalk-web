import React, { useState } from 'react';
import SignInInput from '../../components/SignIn/SignInInput.tsx';
import Button from '../../components/SignIn/SignInButton.tsx';
import ExtraButton from '../../components/SignIn/ExtraButton.tsx';

const SignUp = () => {
  const [nickname, setNickname] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  return (
    <form
      onSubmit={() => {}}
      className="flex flex-col items-center justify-center"
    >
      <SignInInput
        type="text"
        placeholder="Name"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        className="border-b-0 rounded-b-none"
      />
      <SignInInput
        type="text"
        placeholder="Email or Phone Number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="border-t-gray-200 border-b-0 rounded-none"
      />
      <SignInInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-t-gray-200 border-b-0 rounded-none"
        maxLength={32}
      />
      <SignInInput
        type="password"
        placeholder="Password Confirm"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        className="border-t-gray-200 rounded-t-none"
        maxLength={32}
      />
      <Button
        onClick={() => {}}
        label="Sign Up"
        disabled={
          nickname === '' ||
          id === '' ||
          password === '' ||
          passwordConfirm === '' ||
          password !== passwordConfirm
        }
        className="mt-2 mb-28"
      />
      <ExtraButton
        text="Sign In"
        link="/"
      />
    </form>
  );
};
export default SignUp;
