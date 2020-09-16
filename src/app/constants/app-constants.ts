export const AppConstants =
{
  /** URL end points */

  APP_KPI_WEIGHTAGE: 100,
  CountryID: 100,
  BASE64KEY: "45BLO2yoJkvBwz99kBEMlNkxvL40vUSGaqr/WBu3+Vg=",
  BASEIVKEY: "Ou3fn+I9SVicGWMLkFEgZQ==",
  //DEVELOPMENT
  BASE_URL: "https://devauthapi.randstad.in/",
  BASE_URL_AUTH: "https://devauthapi.randstad.in/",
  BASE_URL_KPI: "https://devpmskpiapi.randstad.in/",
  BASE_URL_CHECKINS: "https://devpmscheckinapi.randstad.in/",
  BULK_UPLOAD_BUCKETNAME: "ssc-s3-in-dta-webfarm-rdirect",
  BASE_URL_GC: "https://devpmsapi.randstad.in/",
  //TEST
  // BASE_URL: "https://tstauthapi.randstad.in/",
  // BASE_URL_AUTH:"https://tstauthapi.randstad.in/",
  // BASE_URL_KPI:"https://tstpmskpiapi.randstad.in/",
  // BASE_URL_CHECKINS:"https://tstpmscheckinapi.randstad.in/",
  // BASE_URL_GC:"https://tstpmsapi.randstad.in/",
  // BULK_UPLOAD_BUCKETNAME:"ssc-s3-in-dta-pms-qa-talenttool",
  //UAT
  // BASE_URL: "https://qaauthapi.randstad.in/",
  // BASE_URL_AUTH:"https://qaauthapi.randstad.in/",
  // BASE_URL_KPI:"https://qapmskpiapi.randstad.in/",
  // BASE_URL_GC:"https://qapmsapi.randstad.in/",
  // BASE_URL_CHECKINS:"https://qapmscheckinapi.randstad.in/",
  // BULK_UPLOAD_BUCKETNAME:"ssc-s3-in-dta-pms-uat-talenttool",
  //PRODUCTION
  // BASE_URL: "https://rtalentauthapi.randstad.in/",
  // BASE_URL_AUTH:"https://rtalentauthapi.randstad.in/",
  // BASE_URL_KPI:"https://rtalentkpiapi.randstad.in/",
  // BASE_URL_CHECKINS:"https://rtalentcheckinapi.randstad.in/",
  // BASE_URL_GC:"https://rtalentgcapi.randstad.in/",
  // BULK_UPLOAD_BUCKETNAME:"ssc-s3-in-prd-pms-r-talenttool",
  GOOGLE_ANALYTICS_ID: "",
  SUCESS_ICON: "rpms-completed",
  ERROR_ICON: "rpms-info-button",
  //GOOGLE_OAUTH_ID:"550990264525-2k5qfqg36tfgh9ukdirrjm8sr3tu2odc.apps.googleusercontent.com",
  GOOGLE_OAUTH_ID: "385683358769-tiv0fa1blsl0p2op0qb1vj5vjhqfdrtf.apps.googleusercontent.com",
  DEVICE_PLATFORM_KEY: 'platform',
  KPIEMPLOYEESUBMISSION: 1,
  SESSIONTIME: 30,
  DEVICE_PLATFORMS: {
    MOBILE: "Mobile",
    Web: "Web"
  },
  FILE_FORMAT_TYPES: {
    xls: '.xls',
    XLSX: '.xlsx'
  },
  MIMETypes: {
    TXT: 'text/plain',
    DOCX: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    DOC: 'application/msword',
    PDF: 'application/pdf',
    JPG: 'image/jpeg',
    BMP: 'image/bmp',
    PNG: 'image/png',
    XLS: 'application/vnd.ms-excel',
    XLSX: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    RTF: 'application/rtf',
    PPT: 'application/vnd.ms-powerpoint',
    PPTX: 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
  },
  END_POINTS: {
    LOGIN_URL: 'api/Security/validateUserDetails',
    PMS: {
      KPIMASTERDETAILS: 'api/kpi/FetchKPIMasterDetails',
      PROCESSTYPEMASTERDETAILS: 'api/kpi/FetchProcessTypeMasterDetails',
      FETCHREVIEWPEROID: 'api/kpi/FetchReviewPeriodByCompanyId/',
      FETCHREVIEWMASTER: 'api/kpi/FetchReviewProcessMasterListByReviewPeriodId/',
      INSERTREVIEWMASTER: 'api/kpi/InsertReviewProcessMaster',
      FETCH_TEAM_MASTER: 'api/kpi/FetchTeamMaster',
      FETCH_LOCATION_MASTER: 'api/kpi/FetchLocationMaster/',
      FETCH_STATE_MASTER: 'api/kpi/FetchStateMaster/',
      FETCH_COUNTRY_MASTER: 'api/kpi/FetchCountryMaster',
      FETCH_SERVICE_MASTER: 'api/kpi/FetchServiceMaster',
      FETCH_SUBSERVICE_MASTER: 'api/kpi/fetchSubServiceDetails/',
      FETCH_VERTICAL_MASTER: 'api/kpi/fetchVerticalDetails/',
      FETCH_MANAGER_MASTER: 'api/Security/fetchManagerDetails/',
      FETCH_DESIGNATION_MASTER: 'api/kpi/FetchDesignationMaster',
      FETCH_DESIGNATION_DETAILS: 'api/kpi/FetchDesignationDetails/',
      FETCH_KPIDETAILS_REVIEW_TRANSACTIONID: 'api/kpi/FetchKpiDetailsByReviewProcessTransactionId/',
      FETCH_COMPDETAILS_REVIEW_TRANSACTIONID: 'api/kpi/FetchCompetencyDetailsReviewProcessTransactionId/',
      INSERT_UPDATE_ORGANIZATION_GOAL: 'api/kpi/InsertUpdateOrganisationGoal',
      FETCH_ORGANIZATION_GOAL: 'api/kpi/FetchEmployeeOrganisationGoal/',
      FETCH_KPIDETAILS_EMPID: 'api/kpi/FetchKPIDetailsByEmployee/',
      INSERT_UPDATE_COMPDETAILS: 'api/kpi/InsertUpdateCompentancyDetails',
      INSERT_UPDATE_KPIDETAILS: 'api/kpi/InsertUpdateKPIDetails',
      FETCH_PROFICIENCY_MASTER: 'api/kpi/FetchCompetancyMasterDetails',
      FETCH_KPI_COMP_DATAGRID: 'api/kpi/FetchKPIandCompetancyDetailsByReviewProcessTransactionId/',
      DELETE_KPIDETAILS: 'api/kpi/DeleteKPIDetails',
      DELETE_COMPDETAILS: 'api/kpi/DeleteCompentancyDetails',
      SUBMIT_KPI_DETAILS: 'api/kpi/SubmitKPIDetails',
      FETCH_MANAGERUSER_DETAILS: 'api/kpi/FetchManagerLandingScreen/',
      FETCH_HRBPUSER_DETAILS: 'api/kpi/FetchHrbpLandingScreen/',
      FETCH_KPI_COMP_REPORTS: 'api/kpi/FetchKpiandCompentancyReports/',
      FETCH_SUPER_ADMIN_DETAILS: 'api/kpi/FetchSuperAdminDetails/',
      UPLOAD_FILE: 'api/kpi/uploadFile',
      INSERT_UPDATE_EM_CHECKIN: 'api/EmployeeManagerCheckIn/InsertUpdateEmployeeManagerCheckInDetails',
      FETCH_THREAD_MASTER: 'api/EmployeeManagerCheckIn/FetchThreadMaster',
      INIT_DEFAULT_KPI: 'api/kpi/IntiateKPIDetails',
      FETCH_EMP_CHECKINS: 'api/EmployeeManagerCheckIn/FetchEmployeeManagerCheckin/',
      FETCH_ADMIN_DETAILS_EMP: 'api/kpi/FetchEmployeeDetailsForSuperAdmin',
      FETCH_EMP_MANAGER_REPORTS: 'api/EmployeeManagerCheckIn/FetchEmployeeManagerCheckInReport/',
      UPLOAD_DOCUMENT: 'api/kpi/uploadFile/',
      FETCH_REINIT_STATUS: 'api/kpi/FetchReIntiateKpiListForManager/',
      FETCH_MANAGER_EMPLIST: 'api/EmployeeManagerCheckIn/EmployeeListForMangerCheckInForm/',
      INSERT_BULK_KPI_UPLOAD: 'api/kpi/InsertBulkDefaultKPIDetails',
      INSERT_BULK_COMP_UPLOAD: 'api/kpi/InsertBulkDefaultCompentencyDetails',
      FETCH_COMMENTS_HISTORY: 'api/EmployeeManagerCheckIn/FetchEmployeeMangerCheckinDetailsById/',
      INSERT_COMMENTS: 'api/EmployeeManagerCheckIn/InsertUpdateEmployeeManagerCheckInComments',
      CLOSE_REOPEN_THREAD: 'api/EmployeeManagerCheckIn/UpdteEmployeeManagerCheckInDetails',
      INSERT_EMP_BULKCOMP: 'api/kpi/InsertBulkCompentencyDetails',
      INSERT_EMP_BULKKPI: 'api/kpi/InsertBulkKPIDetails',
      FETCH_BULKMASTERID: 'api/kpi/FetchBulkUploadMasterIdBycategoryName/',
      FETCH_GENERIC_CODE: 'api/kpi/FetchGenericCodeMaster',
      FETCH_ROLE_MODEL: 'api/kpi/FetchRoleDetailsMaster',
      INSERT_EMPLOYEE_USER: 'api/kpi/InsertEmployeeDetails',
      INSERT_BULK_EMPLOYEE_DETAILS: 'api/kpi/InsertBulkEmployeeDetails',
      FETCH_HRBP_DETAILS: 'api/kpi/FetchHrbpMaster',
      INACTIVE_USERS: 'api/Security/InActivateUser',
      FETCH_GC_HISTORY: 'FetchGCLandingScreen/',
      FETCH_GC_INTERIM: 'FetchStatusForGCInterim/',
      FETCH_QUARTERS: 'QuaterLandingScreen/',
      FETCH_GC_DETAILS: 'SpecificQuaterScreen/',
      INITIATE_GC: 'IntiateGCDetails',
      INSERT_UPDATE_GCDETAILS: 'InsertUpdateGCDetails',
      GC_SUBMISSION: 'EmployeeGCSubmission',
      FETCH_MANAGER_GCLIST: 'FetchManagersPeopleGCStatus/',
      EMPLOYEE_ACKNOWLEDGEMENT_GC: 'GCRequestAcknowledgedByEmployee/',
      EMPLOYEE_ROLECHANGEREQ: 'EmployeeRequestInterimGC',
      HRBP_APPROVALREJECTIONRC: 'HRBPStatusUpdate',
      HRBP_ROLECHANGE_REQUEST: 'FetchHRBPRCEmployeeStatus/',
      CHECK_KPI_STATUS: 'CheckStatusKPISubmit',
      FETCH_GC_REPORT: 'GCReport/',
      FETCH_TALENTCLASSIFICATION: 'FetchAllTalentClasificationDetails',
      FETCH_REVIEWMASTERID_ROLECHANGE: 'ReviewProcessForRoleChange',
      REINIT_GC: 'SubmitGC',
      FETCH_MANAGER_REINITGC: 'FetchReIntiateGCListForManager/',
      FETCH_HRBP_REINITGC: 'FetchReIntiateGCListForHRBP/',
      FETCH_ACTIONSLOT_GC: 'FetchAllGCActionSlot/'

    },
    COMMON: {

    },
  },
  BULK_KPI: 'KPI',
  BULK_COMP: 'Competencies',
  BULK_DEFAULT_KPI: 'DefaultKPIDetails',
  BULK_DEFAULT_COMP: 'DefaultCompetenciesDetails',
  BULK_EMPLOYEE: 'UserDetails',

  OPERATORS: {
    SEPARATOR: "/",
    QUESTION: "?",
    EQUAL: "=",
  },
  RESPONSE_MESSAGE: {
    SUCCESS: {
      SAVE: "Data saved successfully",
      FETCH: "Data fetched successfully",
    },
    ERROR: {
      API_FAILURE: "Oops, something went wrong, contact admin",
      NETWORK_FAILURE: "Network failure",
    }
  },
  DASHBOARD: {
    DASHBOARD: 'home',
    DASHBOARD_ICON: 'rpms-home'
  },
  ROUTE_URLS: {
    LOGIN: "login",
    DASHBOARD: "kpi/dashboard",
    KPIADD: "kpi/add",
    KPIHOME: 'kpi/home',
    KPICOMP: 'kpi/competencies',
    MASTER: 'kpi/master',
    ADMINSCHEDULE: 'kpi/adminschedule',
    ADMINHOME: 'admin/home',
    KPIMANAGERHOME: 'kpi/manager',
    COMPETENCYEDIT: 'kpi/editcompetencies',
    MYPEOPLE: 'kpi/mypeople',
    ADMINUSERHOME: 'admin/userhome',
    ADMINADDUSER: "admin/adduser",
    CHECKINSHOME: "checkin/home",
    CHECKINSADDTHREAD: "checkin/addthread",
    CHECKINSDISCUSSION: "checkin/discussions",
    REPORTSHOME: "reports/home",
    REPORTSGET: 'reports/all',
    REPORTSVIEW: "reports/view",
    NOTIFY: "notification/",
    ERROR: "error",
    GCHOME: "GC/home",
    GCQUARTERSHOME: "GC/quartershome",
    GCREVIEW: "GC/GCReview",
    GCROLECHANGE: 'GC/edituser',
    GCHRBPCOMMENTSVIEW: 'GC/ViewComments'
  },
  LOCAL_STORAGE: {
    SESSIONTIME: 'SESSIONTIME',
    PROFILE_PIC: "PROFILE_PIC",
    NEW_USER: "NEW_USER",
    IS_LOGGEDIN: "IS_LOGGEDIN",
    AUTH_TOKEN: "AUTH_TOKEN",
    ALL_LOCATIONS: "ALL_LOCATIONS",
    EMPLOYEE_ID: "EMPLOYEE_ID",
    GENERIC_CODE_DETAILS: 'GenericeCodeDetails',
    FILE_FORMAT: 'FILE_FORMAT',
    LANG_EVENT: 'LANG_EVENT',
    MENU_INDEX: 'MENU_INDEX',
    ROLE_DETAILS: 'ROLE_DETAILS',
    SELECTED_ROLE: 'SELECTED_ROLE',
    SELECTED_ROLE_ID: 'SELECTED_ROLE_ID'
  },
  IS_MANDATORY: {
    TRUE: true,
    FALSE: false
  },
  GENDER: {
    MALE: 1,
    FEMALE: 2,
    OTHERS: 3
  },
  ACTION_SHEET: {
    TEXT: 'text',
    CODE: 'code'
  },
  MESSAGE_SUCESS_MODALS: {
    icons: 'rpms-home',
    message: 'Your Details have been sucessfully saved',
    sub_message: '',
    id: 'sucess'
  },
  MESSAGE_FAILURES_MODALS: {
    icons: '',
    message: '',
    sub_message: '',
    id: 'failure'
  },
  MESSAGE_DISCARD_MODALS: {
    icons: 'rpms-home',
    message: 'Confirm Discard',
    sub_message: 'By clicking on discard, all unsaved changes will be removed.',
    id: 'discard'
  },
  MESSAGE_VALIDATION_MODALS: {
    icons: 'rpms-home',
    message: 'Please Check',
    id: 'validation'
  },
  MESSAGE_INACTIVE_MODALS: {
    icons: 'rpms-home',
    message: 'Deactivate User',
    sub_message: 'Are you sure you want to deactivate the selected user?',
    id: 'discard'
  },
  MESSAGE_ACTIVE_MODALS: {
    icons: 'rpms-home',
    message: 'Activate User',
    sub_message: 'Are you sure you want to activate the selected user?',
    id: 'discard'
  },
  MESSAGE_SAVE_MODALS: {
    icons: 'rpms-home',
    message: 'Confirm Changes',
    sub_message: 'Are you sure you want to save all the details you have entered?',
    id: 'discard'
  },
  MESSAGE_APPROVE_MODALS: {
    icons: 'rpms-home',
    message: 'Confirm Approval',
    sub_message: 'Are you sure you want to approve all the details for the selected employee ?',
    id: 'approve'
  },
  MESSAGE_GCSAVE_MODALS: {
    icons: 'rpms-home',
    message: 'Confirm Changes',
    sub_message: 'Are you sure you want to save your great conversation comments?',
    id: 'approve'
  },
  MESSAGE_GCSUBMIT_MODALS: {
    icons: 'rpms-home',
    message: 'Confirm Changes',
    sub_message: 'Are you sure want to submit your great conversation comments?',
    id: 'approve'
  },
  MESSAGE_GCSUBMITEMPLOYEE_MODALS: {
    icons: 'rpms-home',
    message: 'Confirm Changes',
    sub_message: 'Are you sure you want to submit your great conversation comments for your manager review?',
    id: 'approve'
  },
  MESSAGE_REJECT_MODALS: {
    icons: 'rpms-home',
    message: 'Confirm Rejection',
    sub_message: 'Are you sure you want to reject? This shall reject all the MAP Goals and Competencies submitted by the member. ',
    id: 'approve'
  },
  MESSAGE_REJECT_REMARKS_MODALS: {
    icons: 'rpms-home',
    message: 'Rejection Remarks',
    sub_message: 'Please provide your remarks before rejecting.',
    id: 'discard'
  },
  MESSAGE_DISCUSSION_MODALS: {
    icons: 'rpms-home',
    message: 'Was it all discussed ?',
    sub_message: "Did your manager have a Great Conversation with you regarding the MAP Goals and expectations based on competencies?",
    id: 'approve'
  },
  MESSAGE_DISCUSSION_MODALS_GC: {
    icons: 'rpms-home',
    message: 'Was it all discussed ?',
    sub_message: "Did your manager have a Great Conversation with you regarding the MAP Goals and expectations based on competencies?",
    id: 'approve'
  },
  MESSAGE_REQUEST_REINIT_KPI: {
    icons: 'rpms-home',
    message: 'Edit Map Goals',
    sub_message: "",
    id: 'approve'
  },
  MESSAGE_REQUEST_REINIT_GC: {
    icons: 'rpms-home',
    message: 'Reset Great Conversation',
    sub_message: "",
    id: 'approve'
  },
  MESSAGE_REQUEST_ROLECHANGE: {
    icons: 'rpms-home',
    message: 'Review Role Change',
    sub_message: "",
    id: 'approve'
  },
  MESSAGE_ROLECHANGE_KPI: {
    icons: 'rpms-home',
    message: 'New MAP Goal Request',
    sub_message: "",
    id: 'approve'
  },
  MESSAGE_ROLECHANGE_APPROVE: {
    icons: 'rpms-home',
    message: 'Approve Role Change Request',
    sub_message: "Are you sure you want to approve the role change request?",
    id: 'approve'
  },
  MESSAGE_GCREINIT_APPROVE: {
    icons: 'rpms-home',
    message: 'Approve GC Reset Request',
    sub_message: "Are you sure you want to approve the GC reset request?",
    id: 'approve'
  },
  MESSAGE_GCREINIT_REJECT: {
    icons: 'rpms-home',
    message: 'Reject GC Reset Request',
    sub_message: "Are you sure you want to reject the GC reset request?",
    id: 'approve'
  },
  MESSAGE_ROLECHANGE_REJECT: {
    icons: 'rpms-home',
    message: 'Reject Role Change Request',
    sub_message: "Are you sure you want to reject the role change request?",
    id: 'approve'
  },
  MESSAGE_REINIT_MODALS: {
    icons: 'rpms-kpi',
    message: 'You Have Requested for Reset',
    sub_message: "Please wait until your manager responds !!",
    id: 'sucess'
  },
  MESSAGE_DELETE_MODALS: {
    icons: 'rpms-kpi',
    message: 'Delete Map Goals',
    sub_message: 'Are you sure you want to delete the selected MAP Goal?',
    id: 'discard'
  },
  MESSAGE_DELETE_COMP_MODALS: {
    icons: 'rpms-kpi',
    message: 'Delete Competancy',
    sub_message: 'Are you sure you want to delete the selected Competancy?',
    id: 'discard'
  },
  APP_THEMES: [
    {
      name: 'THEME001',
      styles: []
    }
  ],
  LANGUAGES: [
    {
      lang: 'English',
      value: 'en'
    },
    {
      lang: 'Hindi',
      value: 'hin_in'
    }
  ],
  CONTENT_TYPES: {
    APPLICATION_JSON: 'json',
    TEXT: 'text',
  },
  SLIDE_CONSTANT: {

  },
  SHARED_SERVICE: {
    LANGUAGE: 'LANGUAGE',
    CANDIDATE_DETAILS: 'CandidateDetails',
  }
};
