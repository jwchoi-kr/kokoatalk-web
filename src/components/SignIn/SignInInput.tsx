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
        className={`w-80 h-[3.5rem] px-6 rounded text-lg bg-gray-50 border border-gray-300 focus:outline-none ${type === 'password' ? 'pr-14' : ''} ${className} `}
      />
      {type === 'password' && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 hover:brightness-70"
        >
          <img
            src={showPassword ? hidePasswordIcon : showPasswordIcon}
            alt="show password"
            className="w-6 h-6 "
          />
        </button>
      )}
    </div>
  );
};

export default SignInInput;
