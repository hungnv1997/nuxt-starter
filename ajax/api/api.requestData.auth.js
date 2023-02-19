import axios from "axios";
import { API } from "./api.constant";
import { env } from "~/assets/js/env.js";
import {
  isEmptyObject,
  getTokenInLocalStorage,
  replaceUrl,
  // sleep,
} from "~/utils/common.js";

/**
 * Call API
 * @param {String} url - API Url
 * @param {String} method - HTTP request method
 * @param {Object} data - HTTP request params/ body (based on HTTP request method)
 * @returns {Object} API response
 */
export async function requestData(url, method, data) {
  if (!isEmptyObject(data.path)) {
    url = replaceUrl(url, data.path);
  }

  // option
  const option = {
    method,
    url: env.baseAuthApi + url,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  // set param
  if (!isEmptyObject(data.params)) {
    option.params = data.params;
  }

  // set request body
  if (!isEmptyObject(data.body)) {
    option.data = data.body;
  }

  // set token
  if (
    url !== API.API_PATH.AUTH.AUTHOZIATION &&
    url !== API.API_PATH.AUTH.CHANGE_PASSWORD
  ) {
    option.headers.Authorization = "Bearer " + getTokenInLocalStorage();
  }

  // call api method
  let response = await axios
    .request(option)
    .then((response) => {
      if (response.status !== 200) {
        response.data.codeResult = response.status;
      }
      return response;
    })
    .catch((error) => {
      let response;
      if (isEmptyObject(error.response)) {
        response = {
          data: {
            status: 0,
            error: { message: error.message, timestamp: "" },
          },
        };
      } else {
        response = error.response;
      }

      return response;
    });
  if (!response) {
    response = {
      data: {
        status: API.STATUS_CODE.ERROR,
        error: { errorCode: "ERROR", timestamp: "" },
      },
    };
  }
  // await sleep(1000);
  return response;
}
