export const API = {
  METHOD: {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
  },
  STATUS_CODE: {
    SUCCESS: 200,
    ERROR: 500,
    ERROR_403: 403,
    ERROR_401: 401,
    ERROR_404: 404,
  },
  API_PATH: {
    SYSTEM_INFO: "/systemInfo",

    AUTH: {
      USERS: "/users/{user_id}",
      AUTHOZIATION: "/users/authorization",
      CHANGE_PASSWORD: "/users/change-password",
    },

    WAREHOUSE: {
      COMPANY_CONTROLLER: {
        COMPANIES: "/companies",
      },
      CUSTOMER_CONTROLLER: {
        CUSTOMERS: "/customers",
      },
      TYPES_CONTROLLER: {
        TYPES: "/types",
      },
      ITEM_CONTROLLER: {
        ITEMS: "/items",
        ITEMS_ITEM_CD: "/items/{item_cd}",
      },
      CATEGORY_CONTROLLER: {
        CATEGORIES: "/categories",
        CATEGORIES_CATEGORY_CD_ITEM_USAGE_SETTINGS:
          "/categories/{category_cd}/item-usage-settings",
      },
      WAREHOUSE_CONTROLLER: {
        WAREHOUSES: "/warehouses",
      },
      SYSTEM_CODES_CONTROLLER: {
        SYSTEM_CODES: "/system-codes",
      },
      COMMON_CODE_CONTROLLER: {
        COMMON_CODES: "/common-codes",
      },
      BILLING_CONTROLLER: {
        BILLING_MASTER_BILLING_CODES: "/billing-master/billing-codes",
        BILLING_MASTER_CD: "/billing-master/{billing_cd}",
      },
      IMPORTATION_CONTROLLER: {
        IMPORTATIONS: "/importations",
        MASTER_DATA_FILE: "/importations/master-data-file",
      },
      LABEL_CONTROLLER: {
        REAL_GOODS_RECEIPTS_LABEL: "/real-goods-receipts/labels",
      },
      BILLING_ENTRY_CONTROLLER: {
        BILLING: "/billings",
        BILLING_TRANSACTION_ID: "/billings/{transaction_id}",
      },
      PLAN_GR_CONTROLLER: {
        PLANNED_GOODS_RECEIPTS_TRANSACTION_ID:
          "/planned-goods-receipts/{transaction_id}",
        PLANNED_GOODS_RECEIPT: "/planned-goods-receipts",
        PLANNED_GOODS_RECEIPTS_DOWLOAD: "/planned-goods-receipts/download-data",
      },
      REAL_GR_CONTRLLER: {
        REAL_GOODS_RECEIPTS_TRANSACTION_ID:
          "/real-goods-receipts/{transaction_id}",
      },
      ALLOCATE_INS_CONTROLLER: {
        GOODS_ISSUES_ALLOCATION_INSTRUCTIONS:
          "/goods-issues/allocation-instructions",
        GOODS_ISSUES_ALLOCATION_INSTRUCTIONS_TRANSACTION_ID:
          "/goods-issues/allocation-instructions/{transaction_id}",
        GOODS_ISSUES_ALLOCATION_INSTRUCTIONS_TRANSACTION_ID_ALLOCATE:
          "/goods-issues/allocation-instructions/{transaction_id}/allocate",
      },
      INSTRUCTION_INFO_CONTROLLER: {
        GOODS_ISSUE_INSTRUCTIONS_TRANSACTION:
          "/goods-issues/goods-issue-instructions/{transaction_id}",
        GOODS_ISSUES_INSTRUCTIONS: "/goods-issues/goods-issue-instructions",
      },
      PLACES_CONTROLLER: {
        PLACES: "/places",
      },
      PICKING_INS_CONTROLLER: {
        GOODS_ISSUES_ALLOCATION_INSTRUCTIONS_TRANSACTION_ID_ALLOCATE:
          "/goods-issues/picking-instructions/{transaction_id}",
      },
      ALLOCATION_CONTROLLER: {
        ALLOCATION_CONTROL: "/allocation-control",
      },
      FUNCTION_CONTROLLER: {
        FUNCTION_CONTROL: "/function-control",
      },
      MENU_CONTROLLER: {
        LIST_MENU: "/menu",
      },
      NOTIFICATION_CONTROLLER: {
        LIST_NOTIFICATION: "/notification",
      },
      ACTION_CONTROLLER: {
        ACTION_LOG: "/action-log",
      },
    },
  },
};
