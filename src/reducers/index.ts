interface IAction {
  type: string;
  data: {
    data: object;
  };
}
let defaultState = {
  logs: <any>[],
};
export default (state = defaultState, action: IAction) => {
  switch (action.type) {
    case "LOG":
      let _logs: Array<object> = [];
      _logs = [].concat(state.logs);
      _logs.push(action.data);
      return {
        ...state,
        logs: _logs,
      };
    case "GET_RESULT":
      return {
        ...state,
        urldata: action.data.data,
      };
    default:
      return state;
  }
};
