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

  function verifyIfEnabled(exerciseId) {
    if (clickedExercises[exerciseId]) return false;
    return true;
  }

  function logoutUser() {
    setIsLoggedIn(false);
    setUserData(null);
  }

  function clickExercise(exerciseId) {
    if (clickedExercises[exerciseId]) return true;
    setClickedExercises([...clickedExercises, exerciseId]);
    console.log(clickedExercises);
    return false;
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
        clickExercise,
        clickedExercises,
        resetClickedExercises,
        verifyIfEnabled,
      }}>
      {children}
    </UserContext.Provider>
  );
}
