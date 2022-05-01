import "./Header.css";
import { VideoCameraIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="header">
      <VideoCameraIcon width="32px" style={{ marginRight: "8px" }} />
      <div>TV APP</div>
    </div>
  );
};

export default Header;
