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
        onClick={() => {}}
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
        link="/signUp"
      />
    </form>
  );
};

export default SignIn;
