import _ from 'lodash';

const initialState = {
  clicked: false,
  history: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CLICK_BUTTON': {
      const now = Date.now();
      const history = _.clone(state.history);
      history.push(now);
      const clicked = !state.clicked;
      return _.assign({}, state, { history, clicked });
    }
    default:
      return state;
  }
};
