import React from "react";
import fire, { auth } from "../base";
// import Login from "../Login";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const LoginContext = React.createContext();

const LoginProvider = (props) => {
  const [user, setUser] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [hasAccount, setHasAccount] = React.useState(false);
  //   console.log(user, "jijhi");
  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();

    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };
  const logout = () => {
    return signOut(auth);
  };

  const handleSignup = () => {
    clearErrors();
    createUserWithEmailAndPassword(auth, email, password).catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
    // fire
    // .auth()
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  React.useEffect(() => {
    authListener();
  }, []);

  //   const INIT_STATE = {
  //     user: null,
  //   };

  //   const reducer = (state, action) => {
  //     switch (action.type) {
  //       case "CHECK_USER":
  //         return { ...state, user: action.payload };
  //       default:
  //         return state;
  //     }
  //   };

  //   const AuthProvider = (props) => {
  //     const [state, dispatch] = useReducer(reducer, INIT_STATE);

  //     const googleProvider = new createUserWithEmailAndPassword ();
  //     const authWithGoogle = async () => {
  //       try {
  //         const response = await signInWithPopup(auth, googleProvider);
  //         console.log(response);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     const checkUser = () => {
  //       onAuthStateChanged(auth, (user) => {
  //         let action = {
  //           type: "CHECK_USER",
  //           payload: user,
  //         };
  //         dispatch(action);
  //       });
  //     };

  //     const logout = async () => {
  //       try {
  //         await signOut(auth);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     useEffect(() => {
  //       checkUser();
  //     }, []);

  return (
    <LoginContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        setHasAccount,
        emailError,
        passwordError,
        user,
        logout,
      }}
    >
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;

// import React, { createContext, useContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   updateCurrentUser,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
// import { auth } from "../firebase";

// export const LoginContext = createContext();

// export function LoginProvider({ children }) {
//   const [user, setUser] = useState("");
//   function signUp(email, password) {
//     return createUserWithEmailAndPassword(auth, email, password);
//   }
//   function logIn(email, password) {
//     return signInWithEmailAndPassword(auth, email, password);
//   }

//   function logOut() {
//     return signOut(auth);
//   }
//   function googleSignIn() {
//     const googleAuthProvider = new GoogleAuthProvider();
//     return signInWithPopup(auth, googleAuthProvider);
//   }
//   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
//   });
//   useEffect(() => {
//     return () => {
//       unsubscribe();
//     };
//   }, []);
//   const values = {
//     signUp,
//     logIn,
//     logOut,
//     googleSignIn,
//     unsubscribe,
//     user,
//   };
//   return (
//     <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
//   );
// }

// export function useUserAuth() {
//   return useContext(LoginContext);
// }
