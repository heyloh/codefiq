import React, {createContext, useState} from 'react';

export const UserContext = createContext({});

export function UserProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [clickedExercises, setClickedExercises] = useState([]);
  const [answers, setAnswers] = useState({
    correct: 0,
    incorrect: 0
  });

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

  function resetAnswers() {
    setAnswers({
      correct: 0,
      incorrect: 0,
    });
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
        answers,
        setAnswers,
        resetAnswers
      }}>
      {children}
    </UserContext.Provider>
  );
}
