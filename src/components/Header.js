import { LOGO, USER_AVATAR } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" alt="logo" src={LOGO} />

      {user && (
        <div className="flex p-2 gap-2 ">
          <p className="text-white text-2xl font-semibold py-2">{user.displayName}</p>
          <img className="w-12 h-12 " alt="user" src={user?.photoURL} />
          <button
            onClick={handleSignOut}
            className="font-bold p-2 h-12 bg-red-600 text-white rounded-lg "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
