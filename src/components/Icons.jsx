// import { HiUser } from "react-icons/hi";
import { IoAccessibilityOutline } from "react-icons/io5";
export const UserMenu = ({ name }) => {
  return (
    <div>
      <p><IoAccessibilityOutline className="my-icon" size="24"/> {name}</p>
    </div>
  );
};