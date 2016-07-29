import * as types from './actionTypes';
import courseApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors){
  return {type: types.LOAD_AUTHORS_SUCCESS, authors: authors};
}

export function loadAuthors(){
  return function(dispatch){
    return courseApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  }
}
