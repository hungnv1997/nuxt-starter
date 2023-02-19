import { API } from "../api/api.constant";
import { requestData } from "../api/api.requestData.auth";
/**
 * userAuthoziation
 * @param {Object} parameter
 * @returns
 */
export const _userAuthoziation = (parameter = {}) => {
  const response = requestData(
    API.API_PATH.AUTH.AUTHOZIATION,
    API.METHOD.POST,
    parameter
  );

  return response;
};

/**
 * changePassword
 * @param {Object} parameter
 * @returns
 */
export const _changePassword = (parameter = {}) => {
  const response = requestData(
    API.API_PATH.AUTH.CHANGE_PASSWORD,
    API.METHOD.POST,
    parameter
  );

  return response;
};

/**
 * changeUserShortName
 * @param {Object} parameter
 * @returns
 */
export const _changeUserShortName = (parameter = {}) => {
  const response = requestData(
    API.API_PATH.AUTH.USERS,
    API.METHOD.POST,
    parameter
  );

  return response;
};

/**
 * getUserInfo
 * @param {Object} parameter
 * @returns
 */
export const _getUserInfo = (parameter = {}) => {
  const response = requestData(
    API.API_PATH.AUTH.USERS,
    API.METHOD.GET,
    parameter
  );

  return response;
};
