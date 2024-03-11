export enum PrefixEnum {
  BEGIN = 'BEGIN',
  END = 'END',
}

export enum AuthActionNamesEnum {
  LOAD_AUTH_STATE = 'loadAuthState',
  CHANGE_PASSWORD = 'changePassword',
  ACCEPT_PRIVACY_POLICY = 'acceptPrivacyPolicy',
  VERIFY_EMAIL = 'verifyEmail',
  CHANGE_MANAGER_ROLE = 'changeManagerRole',
  LOGGED_IN_USER = 'loggedInUser',
}

export enum UsersActionNamesEnum {
  LOAD_USERS = 'loadUsers',
  ADD_USER = 'addUser',
  DELETE_USER = 'deleteUser',
  UPDATE_USER = 'updateUser',
}
