export const enError = {
  errorDialogHeader: 'Something went wrong!',
  errorDialogAction: 'Ok',
  firebase: {
    auth: 'Authentication failed. Please check your credentials and try again.',
    'auth/too-many-requests':
      'We have detected too many requests from your device. Try again later.',
    'auth/user-disabled':
      'You are now disabled, please contact the system adminstrator.',
    'auth/user-token-expired': 'Your session is expired, please login again.',
    'auth/network-request-failed': 'Please check your internet connection',
    'auth/invalid-action-code':
      'Your link is now expired, please request a new one.',
  },
  apiErrors: {
    serverDownError:
      'Server is starting up, please try again in a few seconds.',
    errorReferenceId: 'Reference: {{id}}',
    BUSINESS_CONSTRAINT_VIOLATION: {
      ORGANIZATION_UNIT_CYCLE_REFERENCE:
        'A unit cannot be edited in a way that makes it a sub-unit to one of its own sub-units/parent unit, causing circular reference. Reference: {{id}}',
      EVALUATION_INVALID_GIVER_NATURE:
        'The evaluation cannot be added because the giver nature is invalid . Reference: {{id}}',
      EVALUATION_CYCLE_DATE_OVERLAP_ERROR:
        'The evaluation cycle cannot be added because it is overlapping with another evaluation cycle . Reference: {{id}}',
      EVALUATION_CYCLE_STARTED:
        'The evaluation cycle cannot be deleted because it is already started. Reference: {{id}}',
    },
    FOREIGN_KEY_CONSTRAINT_VIOLATION: {
      FK_EMPLOYEE_ORGANIZATION_ORGANIZATIONID:
        'Organization and employee relation is violated.  Reference: {{id}}',
      FK_EMPLOYEE_ORGANIZATIONUNIT_ORGANIZATIONUNITID:
        'Organization unit and employee relation is violated.  Reference: {{id}}',
      FK_ORGANIZATIONUNIT_ORGANIZATION_ORGANIZATIONID:
        'Organization and organization unit relation is violated.  Reference: {{id}}',
      FK_ORGANIZATIONUNIT_ORGANIZATIONUNIT_CHILDREN:
        'Organization unit heirarchy relation is violated.  Reference: {{id}}',
      FK_ORGANIZATIONUNIT_ORGANIZATIONUNIT_PARENT:
        'Organization unit heirarchy relation is violated.  Reference: {{id}}',
      FK_ORGANIZATIONUNIT_EMPLOYEE_EMPLOYEEID:
        'Organization unit and unit leader relation is violated.  Reference: {{id}}',
      FK_ORGANIZATIONUNIT_MEASURE_MEASUREID:
        'Organization unit and skill/value relation is violated.  Reference: {{id}}',
      FK_MEASURE_ORGANIZATION_ORGANIZATIONID:
        'Organization and skill/value relation is violated.  Reference: {{id}}',
      FK_FEEDFORWARDREQUEST_EMPLOYEE_REQUESTOR:
        'FeedForward reuest and requesting employee relation is violated.  Reference: {{id}}',
      FK_FEEDFORWARDREQUEST_EMPLOYEE_RECEIVER:
        'FeedForward reuest and receiving employee relation is violated.  Reference: {{id}}',
      FK_FEEDFORWARDREQUEST_MEASURE_MEASUREID:
        'FeedForward reuest and employee relation is violated.  Reference: {{id}}',
      FK_FEEDFORWARD_EMPLOYEE_GIVER:
        'FeedForward score and giving employee relation is violated.  Reference: {{id}}',
      FK_FEEDFORWARD_EMPLOYEE_RECEIVER:
        'FeedForward score and receiving Employee relation is violated.  Reference: {{id}}',
      FK_FEEDFORWARD_MEASURE_MEASUREID:
        'FeedForward score and Employee relation is violated.  Reference: {{id}}',
      FK_FEEDFORWARD_FEEDFORWARDREQUEST_FEEDFORWARDREQUESTID:
        'FeedForward score and feedforward request relation is violated.  Reference: {{id}}',
      FK_GOAL_EMPLOYEE_EMPLOYEEID:
        'Goal and employee relation is violated.  Reference: {{id}}',
      FK_GOAL_EMPLOYEE_CREATEDBY:
        'Goal and creating employee relation is violated.  Reference: {{id}}',
      FK_GOAL_MEASURE_MEASUREID:
        'Goal and skill/value relation is violated.  Reference: {{id}}',
      FK_PROGRESSUPDATE_GOAL_GOALID:
        'Goal progress and goal relation is violated.  Reference: {{id}}',
      FK_PROGRESSUPDATE_EMPLOYEE_EMPLOYEEID:
        'Goal progress and Employee relation is violated.  Reference: {{id}}',
      FK_EVENT_EMPLOYEE_EMPLOYEEID:
        'Event and Employee relation is violated.  Reference: {{id}}',
      FK_EVENT_EMPLOYEE_MANAGER:
        'Event and manager relation is violated.  Reference: {{id}}',
      FK_EVENT_GOAL_GOALID:
        'Event and goal relation is violated.  Reference: {{id}}',
    },
    UNIQUE_KEY_CONSTRAINT_VIOLATION: {
      UQ_EMPLOYEE_EMAIL: 'Employee email already exists. Reference: {{id}}',
      UQ_ORGANIZATION_NAME:
        'Organization name already exists. Reference: {{id}}',
      UQ_PLATFORM_ADMIN_EMAIL: 'Admin email already exists. Reference: {{id}}',
    },
    BAD_REQUEST:
      'Field {{field}} violated {{constraint}} constraint because {{params}}',
    FIREBASE_ADMIN_AUTH_ERROR:
      'Problem happened with identity service, please try again later. Reference: {{id}}',
    MEDIA_TYPE_NOT_ACCEPTABLE:
      'Invalid image type, please use a valid image. Reference: {{id}}',
    INTERNAL_SERVER_ERROR:
      'Something went wrong, please try again later. Reference: {{id}}',
    MAXIMUM_UPLOAD_SIZE_EXCEEDED:
      "Sorry, maximum upload size exceeded, please use image doesn't exceed the size limit. Reference: {{id}}",
    FORBIDDEN:
      'Authentication failed. You are not allowed for access. Reference: {{id}}',
    FIREBASE_ADMIN_EMAIL_EXIST_ERROR:
      'Creating Account failed. The email address already exists. Reference: {{id}}',
    SENDGRID_RESPONSE_ERROR_EMAILS_LIMIT_REACHED:
      'Sending Emails failed, The Limit of sent Emails Already Reached',
    SENDGRID_RESPONSE_ERROR_EMAILS_EXCEED_LIMIT:
      'Sending Emails failed, This Email will exceed the limit of Emails that must be sent per day',
  },
};
