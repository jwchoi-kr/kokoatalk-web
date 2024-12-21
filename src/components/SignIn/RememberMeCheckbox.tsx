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
        className="w-[1.25rem] h-[1.2rem] mr-3 rounded-full border border-gray-500 bg-white appearance-none checked:before:content-['✓'] checked:before:text-sm checked:before:font-aptos checked:before:flex checked:before:justify-center checked:before:items-center hover:bg-gray-50"
      />
      <label
        htmlFor="rememberMe"
        className="text-sm font-light text-gray-600 select-none"
      >
        Keep me logged in
      </label>
    </div>
  );
};

export default RememberMeCheckbox;
