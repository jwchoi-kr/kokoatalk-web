import { useState } from 'react';
import showPasswordIcon from '@assets/show-password.svg';
import hidePasswordIcon from '@assets/hide-password.svg';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'password';
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const SignInInput = ({
  type,
  placeholder,
  value,
  onChange,
  className,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        type={
          type === 'password' ? (showPassword ? 'text' : 'password') : 'text'
        }
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`h-[3.5rem] w-80 rounded border border-gray-300 bg-gray-50 px-6 text-lg focus:outline-none ${type === 'password' ? 'pr-14' : ''} ${className} `}
      />
      {type === 'password' && value !== '' && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 top-1/2 -translate-y-1/2 transform hover:brightness-70"
        >
          <img
            src={showPassword ? hidePasswordIcon : showPasswordIcon}
            alt="show password"
            className="h-6 w-6"
          />
        </button>
      )}
    </div>
  );
};

export default SignInInput;
