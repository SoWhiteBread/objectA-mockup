const games = (state = [], action) => {
  switch (action.type) {
    case "FETCH_GAMES_SUCCESS":
      return action.payload.games;
    default:
      return state;
  }
};

export default games;
