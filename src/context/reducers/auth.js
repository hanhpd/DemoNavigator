import {
  REGISTER_SUCCESS,
  REGISTER_LOADING,
  REGISTER_FAIL,
} from '../../constants/actions/index';

const authReducer = (state, {type, payload}) => {
  switch (type) {
    case REGISTER_LOADING:
      console.log('state >>', state);
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      console.log('state success>>:', state);
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case REGISTER_FAIL:
      console.log('state fail >>:', state);
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
