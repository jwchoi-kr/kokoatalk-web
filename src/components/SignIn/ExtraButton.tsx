import { useNavigate } from 'react-router-dom';

interface ExtraButtonProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
  link: string;
}

const ExtraButton = ({ text, link }: ExtraButtonProps) => {
  const navigate = useNavigate();

  return (
    <p
      onClick={() => navigate(link)}
      className="text-sm font-light text-gray-600 select-none hover:cursor-pointer"
    >
      {text}
    </p>
  );
};

export default ExtraButton;
