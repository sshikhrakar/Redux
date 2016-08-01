import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action){
  switch(action.type){
    case types.LOAD_COURSES_SUCCESS:
      if (!action.filterVal) {
        return action.courses;
      }
      const courses = action.courses;
      const filterVal = action.filterVal;
      if(filterVal.author && filterVal.category){
        let filteredCourse = courses.filter(course =>
          course.authorId === filterVal.author || course.category === filterVal.category
        )
        return filteredCourse;
      }
      else if(filterVal.author){
        let filteredCourse = courses.filter(course =>
          course.authorId === filterVal.author
        )
        return filteredCourse;
      }
      else if(filterVal.category){
        let filteredCourse = courses.filter(course =>
          course.category === filterVal.category
        )
        return filteredCourse;
      }

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
