import axios from "axios";

//sync action creator
const fetchGamesSuccess = (games) => ({
  type: "FETCH_GAMES_SUCCESS",
  payload: { games }
});

// async  action creator calls the api, then dispatches the synch action creator
export const fetchGames = () => {
  return async (dispatch) => {
    try {
      let games = await axios.get("");
      dispatch(fetchGamesSuccess(games));
    } catch (e) {
      console.log(e);
    }
  };
};
