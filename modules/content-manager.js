const actionTypes = {
  reuqest: `export const <ACTION_NAME>_REQUEST: '<ACTION_NAME>_REQUEST' = '<ACTION_NAME>_REQUEST';`,
  success: `export const <ACTION_NAME>_SUCCESS: '<ACTION_NAME>_SUCCESS' = '<ACTION_NAME>_SUCCESS';`,
  failure: `export const <ACTION_NAME>_FAILURE: '<ACTION_NAME>_FAILURE' = '<ACTION_NAME>_FAILURE';`,
  requestAction: `export type <ACTION_NAME>_REQUEST_ACTION = { type: typeof <ACTION_NAME>_REQUEST };`,
  successAction: `export type <ACTION_NAME>_SUCCESS_ACTION = { type: typeof <ACTION_NAME>_SUCCESS };`,
  failureAction:  `export type <ACTION_NAME>_FAILURE_ACTION = { type: typeof <ACTION_NAME>_SUCCESS, error: Object };`
};

const actions = {
  request: `| <ACTION_NAME>_REQUEST_ACTION`,
  success: `| <ACTION_NAME>_SUCCESS_ACTION`,
  failure: `| <ACTION_NAME>_FAILURE_ACTION`
};

const token = '<ACTION_NAME>';

module.exports = {
  getFileStub(moduleName) {
    return  `//@flow \n\n // Action Types \n // Global Action Type \n export type ${moduleName} = \n`;
  },
  getActionTypes(actionName) {
    let output = '';    
    
    for (key in actionTypes) {
      output += actionTypes[key].replace(new RegExp(token, 'g'), actionName) + '\n';
    }

    return output;
  },
  getActions(actionName) {
    let output = '';    
    
    for (key in actions) {
      output += actions[key].replace(new RegExp(token, 'g'), actionName) + '\n';
    }

    return output;
  }
}

