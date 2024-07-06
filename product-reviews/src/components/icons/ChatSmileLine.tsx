import { FC } from "react";
import { RiChatSmile3Line } from "react-icons/ri";
interface IChatSmileLineProps {
  size?: number;
}

export const ChatSmileLine: FC<IChatSmileLineProps> = ({ size }) => {
  return <RiChatSmile3Line size={size} />;
};
