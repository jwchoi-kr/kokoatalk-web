interface RememberMeCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const RememberMeCheckbox = ({
  isChecked,
  onChange,
  className,
}: RememberMeCheckboxProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <input
        type="checkbox"
        id="rememberMe"
        checked={isChecked}
        onChange={onChange}
        className="mr-3 h-[1.2rem] w-[1.25rem] appearance-none rounded-full border border-gray-500 bg-white hover:bg-gray-50"
      />
      <label
        htmlFor="rememberMe"
        className="select-none text-sm font-light text-gray-600"
      >
        Keep me logged in
      </label>
    </div>
  );
};

export default RememberMeCheckbox;
