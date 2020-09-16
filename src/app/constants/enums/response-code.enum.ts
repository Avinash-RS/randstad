export enum ResponseCode {

    Success = 10000,
    NoDataFound = 10001,
    AuthorizationFailed = 11000,
    ContentTypeError = 11001,
    HeaderMethodInvalid = 11002,
    SpecifiedAPINotExist = 11003,
    ExceptionRaised = 11004,
    MandatoryFieldMissing = 11005,
    ObjectUndefined = 11006,
    SessionNull = 11007,
    UpdateSuccess = 30001,
    RowsUnaffected = 31001,
    InsertFailed = 31002,
    RuleInsertError = 41001,
    RuleUpdateFailed = 41002,
    InvalidRuleId = 41003,
    InvalidRulesetId = 41004,
    ProcessTransIdMissing = 51001,
    ActionTransIdMissing = 51002,
    WorkflowActionTransNull = 51003,
    UpdateWorkflowFailed = 51004,
    InsertWorkflowTransFailed = 51005,
    WorkflowActionTransActivityNull = 51006,
    InvalidWorkflowActionId = 51007,
    SchedulerConfigurationNull = 61001,
    InvalidScheduleConfigCode = 61002,
    InsertScheduleFailed = 61003,
    InvalidCustomScheduleConfig = 61004,
    TriggerDaysRuleEqualLength = 61005,
    NotificationTemplateNull = 71001,
    EmployeeManagerCheckinNull = 81001,
    EmployeeManagerCheckinCommentsNull = 91001,
    ReviewPeriodDetailsNull = 101001,
    CompanyIdNull = 101002,
    ReviewPeriodIdNull = 101003,
    ReviewProcessDetailsNull = 111001,
    ActionSlotDetailsNull = 121001,
    ReviewProcessTransctionDetailsNull = 121001,
    ReviewProcessMasterDetailsNull = 131001,
    UploadFailed=131007






}