import {
    PLANET_SEARCH_INITIATED,
    PLANET_SEARCH_SUCCESS,
    PLANET_SEARCH_FAILED
  } from "../../Constants/Types";
  
  /**
   * isVerifying - Waiting for Login Action to complete. Don't know yet
   * wheteher user is logged in or not
   * True if Action is PLANET_SEARCH_INITIATED
   * False else
   *
   * isLoggedIn - Status whether login process is success or not
   * True if Success False if Failed
   */
  const initState = {
    isSearching: false,
    planets:[]
  };
  export default (state = initState, action) => {
    console.log(action, "inreducer")
    switch (action.type) {
      case PLANET_SEARCH_INITIATED:
        // Don't know yet Status of Login Action - Keep waiting, Verifying User
        return Object.assign({...initState}, { isSearching: true, planets:[] });
      case PLANET_SEARCH_SUCCESS:
        // We have got response from Log In API, set waiting flag to false,
        // User is Logged in Successfully
        return Object.assign({...initState}, { isSearching: false, planets:action.planets });
      case PLANET_SEARCH_FAILED:
        // We have got response from Log In API, set waiting flag to false,
        // User Log In failed
        return Object.assign({...initState}, { isSearching: false, planets:[] });
      default:
        return initState;
    }
  };
  