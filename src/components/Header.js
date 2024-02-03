import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // I want to unsubscribe whenever my component unmounts
    // unsubscribe when component unmounts

    return () => unsubscribe();
  }, []);

  const handleGPTSearchClick = () => {
    // Toggle GPT Search button

    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div
      className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex
    flex-col md:flex-row justify-center xl:justify-between"
    >
      <img className="w-44 mx-auto md:mx-0" alt="logo" src={LOGO} />

      {user && (
        <div className="flex p-2 gap-2 justify-between">
          {showGptSearch && (
            <select
              className="p-2 h-12 rounded-lg bg-gray-800 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="font-semibold p-2 h-12 bg-purple-800 text-white rounded-lg "
            onClick={handleGPTSearchClick}
          >
            {showGptSearch ? "HomePage" : "GPTSearch"}
          </button>
          <button
            onClick={handleSignOut}
            className="font-semibold p-2 h-12 bg-red-600 text-white rounded-lg "
          >
            SignOut
          </button>
          <img
            className=" hidden xl:block w-12 h-12 "
            alt="user"
            src={user?.photoURL}
          />
          <p className="hidden xl:block  text-2xl text-yellow-300 font-semibold py-2">
            {user.displayName}
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
