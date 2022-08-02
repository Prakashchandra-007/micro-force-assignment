const initialState = {
  position: { x: 0, y: 0 },
  restart: false,
  show: true,
  switchPos: "center",
  manual: false,
};

function stateReducer(state = initialState, action) {
  switch (action.type) {
    case "hideBlock":
      return {
        position: state.position,
        restart: true,
        switchPos: state.switchPos,
        show: false,
        manual: state.manual,
      };
    case "showBlock":
      return {
        position: state.position,
        restart: true,
        switchPos: state.switchPos,
        show: true,
        manual: state.manual,
      };
    case "restarter":
      return {
        position: state.position,
        show: state.show,
        restart: true,
        switchPos: state.switchPos,
        manual: state.manual,
      };
    case "restarterFalse":
      return {
        position: state.position,
        show: state.show,
        restart: false,
        switchPos: state.switchPos,
        manual: state.manual,
      };
    case "switch": {
      return {
        position: state.position,
        show: state.show,
        restart: state.restart,
        switchPos: action.pos,
        manual: state.manual,
      };
    }
    case "setManual": {
      return {
        position: state.position,
        show: state.show,
        restart: state.restart,
        switchPos: state.switchPos,
        manual: true,
      };
    }
    case "setManualFalse": {
      return {
        position: state.position,
        show: state.show,
        restart: state.restart,
        switchPos: state.switchPos,
        manual: false,
      };
    }
    default:
      return state;
  }
}

export default stateReducer;
