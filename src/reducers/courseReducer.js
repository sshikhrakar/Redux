import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
      if (!action.filterVal) {
        return action.courses;
      }
      var filteredCourses = action.courses.splice(5,7);
      console.log(filteredCourses)
      return (filteredCourses);

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
