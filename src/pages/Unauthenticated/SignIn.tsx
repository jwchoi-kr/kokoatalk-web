import { useState } from 'react';
import Button from '../../components/SignIn/SignInButton.tsx';
import SignInInput from '../../components/SignIn/SignInInput.tsx';
import RememberMeCheckbox from '../../components/SignIn/RememberMeCheckbox.tsx';
import ExtraButton from '../../components/SignIn/ExtraButton.tsx';

const SignIn = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isRememberMe, setIsRememberMe] = useState(false);

  return (
    <form
      onSubmit={() => {}}
      className="flex flex-col items-center justify-center"
    >
      <SignInInput
        type="text"
        placeholder="Email or Phone Number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="border-b-0 rounded-b-none"
      />
      <SignInInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border-t-gray-200 rounded-t-none"
        maxLength={32}
      />
      <Button
        onClick={() => {}}
        label="Log in"
        disabled={id === '' || password === ''}
        className="mt-2 mb-4"
      />
      <RememberMeCheckbox
        isChecked={isRememberMe}
        onChange={(e) => setIsRememberMe(e.target.checked)}
        className="self-start mb-28"
      />
      <ExtraButton
        text="Sign Up"
        link="/signUp"
      />
    </form>
  );
};

export default SignIn;
