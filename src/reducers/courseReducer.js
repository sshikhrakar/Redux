import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
      if (!action.filterVal) {
        return action.courses;
      }
      var courses = action.courses;
      var filterVal = action.filterVal;
      var filteredCourse =courses.filter(course =>
        course.authorId === filterVal
      )
      return filteredCourse;

    case types.CREATE_COURSE_SUCCESS:
      return[
        ...state,
        Object.assign({}, action.course)
      ];

      case types.UPDATE_COURSE_SUCCESS:
        return[
          ...state.filter(course =>
            course.id !== action.course.id),
            Object.assign({}, action.course)
        ];
  default:
    return state;
  }
}
