import { useLocation, useNavigate } from "react-router";
import { useDataContext } from "../../context/DataContextProvider";
import "./Navbar.css";
export default function Navbar() {
  const { dispatch } = useDataContext();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <nav>
      <img src="meetup.svg" alt="meetup-logo" />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => {
          dispatch({ type: "SEARCH", payload: e.target.value });
          pathname !== "/" && navigate("/");
        }}
      />
    </nav>
  );
}
