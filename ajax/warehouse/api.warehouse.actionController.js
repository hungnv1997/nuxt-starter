import { API } from "~/ajax/api/api.constant";
import { requestData } from "~/ajax/api/api.requestData.default";

export const _getListActionLog = (parameter = {}) => {
  const response = requestData(
    API.API_PATH.WAREHOUSE.ACTION_CONTROLLER.ACTION_LOG,
    API.METHOD.GET,
    parameter
  );

  return response;
};
