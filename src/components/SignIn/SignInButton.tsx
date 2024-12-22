import classNames from 'classnames';

interface LoginButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  label: string;
  disabled: boolean;
  className?: string;
}

const Button = ({ onClick, label, disabled, className }: LoginButtonProps) => {
  const buttonStyle = classNames(
    'w-80 h-[3.5rem] rounded text-lg border',
    {
      ' bg-gray-100 text-[#BDC2C9] font-light border-gray-300': disabled,
      ' bg-kakao-brown text-gray-50 border-black': !disabled,
      ' active:bg-[#614A4A]': !disabled,
    },
    className
  );

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={buttonStyle}
    >
      {label}
    </button>
  );
};

export default Button;
