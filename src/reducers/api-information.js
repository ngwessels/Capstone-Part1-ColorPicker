export default (state = {},
action) => {
  switch (action.type) {
    case 'IMAGERESULT':
    return action.result;
    default:
    return state;
  }
}
