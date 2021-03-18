const SET_LOGIN_DATA = "SET_LOGIN_DATA";
const SET_USER_LOGIN = "SET_USER_LOGIN";
const SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN";

let initialState = {
  // people: null,

  loginData: [
    { login: "klim.victor.ua@gmail.com", password: "klim0471klim" },
    { login: "vk@gmail.com", password: "31031988" },
    { login: "post.gmail.com", password: "5989849" },
  ],
  userLogin: { login: "", password: "" },
  isLoggedIn: false,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN_DATA:
      return {
        ...state,
        loginData: state.loginData.concat(action.data),
      };
    case SET_USER_LOGIN:
      return {
        ...state,
        userLogin: action.data,
      };
    case SET_IS_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
      };

    default:
      return state;
  }
};
//action-creaters
export const setLoginData = (data) => ({ type: SET_LOGIN_DATA, data });
export const setUserLogin = (data) => ({ type: SET_USER_LOGIN, data });
export const setIsLoggedIn = (isLoggedIn) => ({
  type: SET_IS_LOGGED_IN,
  isLoggedIn,
});

//Tunk-creators
// export const getPeople = (next) => {
//   return (dispatch) => {
//     allPeopleAPI.getAllPeople(next).then((response) => {
//       dispatch(setAllPeople(response.data.results));
//     });
//   };
// };

export default signupReducer;
