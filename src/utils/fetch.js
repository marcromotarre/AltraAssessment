import fetch from 'cross-fetch';
import * as actions from './../redux/actions/town';

export function fetchTown(dispatch) {
  dispatch(actions.fetchTownPending());
  fetch(
    'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.error) {
        throw response.error;
      }
      dispatch(actions.fetchTownSuccess(response));
    })
    .catch((error) => {
      dispatch(actions.fetchTownError(error));
    });
}
