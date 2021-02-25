import React, {createContext, useState} from 'react';

export const UserContext = createContext({});

export function UserProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [clickedExercises, setClickedExercises] = useState([]);

  function login(email, token) {
    setIsLoggedIn(true);
    setUserData({
      email,
      token,
    });
  }

  function logoutUser() {
    setIsLoggedIn(false);
    setUserData(null);
  }

  function resetClickedExercises() {
    setClickedExercises([]);
  }

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        userData,
        login,
        logoutUser,
        clickedExercises,
        resetClickedExercises,
        setClickedExercises,
      }}>
      {children}
    </UserContext.Provider>
  );
}
