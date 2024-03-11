import { createReducer, on } from '@ngrx/store';
import { User } from '../../models/user.model';
import { UserActions } from '../actions/action-types';

export const userFeatureKey = 'users';

export interface UserState {
  users: Partial<User>[];
}
export const initialState: UserState = {
  users: [],
};
export const userReducer = createReducer(
  initialState,
  on(UserActions.getUserLoaded, (state, action) => {
    return {
      ...state,
      users: action.users || [],
    };
  }),

  on(UserActions.createUserLoaded, (state, action) => {
    let users: Partial<User>[] = [];
    users = [...state.users];
    users.push(action.user);
    return {
      ...state,
      users: users,
    };
  }),
  on(UserActions.deleteUserLoaded, (state, action) => {
    let users: Partial<User>[] = [];
    users = [...state.users];
    users = users.filter((obj) => obj.id !== action.userId);

    return {
      ...state,
      users: users,
    };
  }),
  on(UserActions.updateUserLoaded, (state, action) => {
    let users: Partial<User>[] = [];
    users = [...state.users];
    const userIndex = users.findIndex((user) => user.id === action.user.id);
    if (userIndex !== -1) {
      users[userIndex] = action.user;
    }

    return {
      ...state,
      users: users,
    };
  })
  // on(GoalActions.tempEmployeeSelected, (state, action) => {
  //   if (state.goal?.employee?.id === state.tempEmployee?.id) {
  //     return {
  //       ...state,
  //       goal: undefined,
  //       measures: [],
  //       tempEmployee: undefined,
  //     };
  //   } else {
  //     return {
  //       ...state,
  //       goal: {
  //         employee: state.tempEmployee,
  //       },
  //       measures: state.tempEmployee?.measures || [],
  //       tempEmployee: undefined,
  //     };
  //   }
  // }),
  // on(GoalActions.createGoalEmployeeByEmployeeLoaded, (state, action) => {
  //   return {
  //     ...state,
  //     measures: action.employee?.measures || [],
  //     goal: {
  //       employee: { ...action.employee },
  //     },
  //   };
  // }),
  // on(GoalActions.measureToggled, (state, action) => {
  //   if (state.goal?.dueDate || state.goal?.title || state.goal?.description) {
  //     return {
  //       ...state,
  //       tempMeasure: action.measure,
  //     };
  //   } else if (state.goal?.measure?.id === action.measure?.id) {
  //     return {
  //       ...state,
  //       goal: {
  //         ...state.goal,
  //         measure: undefined,
  //       },
  //     };
  //   } else {
  //     return {
  //       ...state,
  //       goal: {
  //         ...state.goal,
  //         measure: { ...action.measure },
  //       },
  //     };
  //   }
  // }),
  // on(GoalActions.oldMeasureKept, (state, action) => {
  //   return {
  //     ...state,
  //     tempMeasure: undefined,
  //   };
  // }),
  // on(GoalActions.tempMeasureSelected, (state, action) => {
  //   if (state.goal?.measure?.id === state.tempMeasure?.id) {
  //     return {
  //       ...state,
  //       goal: {
  //         employee: { ...state.goal?.employee },
  //       },
  //       tempMeasure: undefined,
  //     };
  //   } else {
  //     return {
  //       ...state,
  //       goal: {
  //         employee: state.goal?.employee,
  //         measure: state.tempMeasure,
  //       },
  //       tempMeasure: undefined,
  //     };
  //   }
  // }),
  // on(GoalActions.goalCompleted, (state, action) => {
  //   return {
  //     ...state,
  //     goal: {
  //       ...state.goal,
  //       title: action.goal?.title,
  //       dueDate: action.goal?.dueDate,
  //       description: action.goal?.description,
  //     },
  //   };
  // }),
  // on(GoalActions.goalCreated, (state, action) => {
  //   return {
  //     ...initialState,
  //   };
  // }),
  // on(GoalActions.createGoalStateRested, (state, action) => {
  //   return {
  //     ...initialState,
  //   };
  // }),
);
