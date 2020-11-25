import { take, put, takeEvery, all, delay } from "redux-saga/effects";
import { API } from "../config/env";
import axios from "axios";

function* FetchData() {
  let calltime = new Date().toLocaleString(),
    start = performance.now(),
    end;
  const response = yield axios
    .get(API.GITHUB)
    .then((res) => {
      return {
        success: res,
      };
    })
    .catch((error) => {
      return {
        error: error.response.status,
      };
    });
  end = performance.now();
  response.log = {
    status: response.success ? "pass" : "failure",
    calltime: calltime,
    duration: `${(parseInt(end.toString()) - parseInt(start.toString())) /
      1000}s`,
  };
  yield put({
    type: "GET_RESULT",
    data: response.success ? response.success : "fetch failed",
  });
  yield put({
    type: "LOG",
    data: response.log,
  });
  /**/
}

function* actionWatcher() {
  yield takeEvery("FETCH_DATA", FetchData);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
