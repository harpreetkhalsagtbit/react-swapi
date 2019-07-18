import {
    USER_LOG_IN_INITITATED,
    USER_LOG_IN_SUCCESS,
    USER_LOG_IN_FAILED
  } from "../../Constants/Types";
  
  /**
   * isVerifying - Waiting for Login Action to complete. Don't know yet
   * wheteher user is logged in or not
   * True if Action is USER_LOG_IN_INITIATED
   * False else
   *
   * isLoggedIn - Status whether login process is success or not
   * True if Success False if Failed
   */
  const initState = {
    isVerifying: false,
    isLoggedIn: false,
    isLogInFailed: false
  };
  export default (state = initState, action) => {
    console.log(action, "inreducer")
    switch (action.type) {
      case USER_LOG_IN_INITITATED:
        // Don't know yet Status of Login Action - Keep waiting, Verifying User
        return Object.assign({...initState}, { isVerifying: true, isLogInFailed:false });
      case USER_LOG_IN_SUCCESS:
        // We have got response from Log In API, set waiting flag to false,
        // User is Logged in Successfully
        return Object.assign({},  {...initState}, { isLoggedIn: true });
      case USER_LOG_IN_FAILED:
        // We have got response from Log In API, set waiting flag to false,
        // User Log In failed
        return Object.assign({}, {...initState}, { isLogInFailed: true });
      default:
        return initState;
    }
  };
  