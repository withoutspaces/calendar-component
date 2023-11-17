import { GeneralButton } from "../App.styles";

interface ButtonProps {
   children: React.ReactNode
   onClick: () => void
}
export default function Button({children, onClick}: ButtonProps) {
  return (
      <GeneralButton onClick={onClick}>{children}</GeneralButton>
   );
}