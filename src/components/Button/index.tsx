import { GeneralButton } from "./styles";
import { ButtonProps } from "./types";

export default function Button({children, onClick}: ButtonProps) {
  return (
      <GeneralButton onClick={onClick}>{children}</GeneralButton>
   );
}