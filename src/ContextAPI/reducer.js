export const initialState = {
    data: [],
    email: null,
    password: null
  };
  
  const reducer = (state, action) => {
    // console.log(action);
    switch (action.type) {
      case "Term":
        return {
          ...state,
          data: action.data,
          email: action.email,
          password: action.password
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  