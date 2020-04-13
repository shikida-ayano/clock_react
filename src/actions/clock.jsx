import axios from 'axios';

const clickButtonSuccess = () => (
  {
    type: 'CLICK_BUTTON',
  }
);


export const clickButton = () => (
  (dispatch) => {
    dispatch(clickButtonSuccess());
  }
);
