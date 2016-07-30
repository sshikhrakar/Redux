import React, {PropTypes} from 'react';
import CourseFilterList from './CourseFilterList';

const CourseFilter = ({authors}) => {
    return(
      <select className="select-author" name="filter-author">
        {authors.map((author,i) =>
          <CourseFilterList key={i} author={author}/>
        )}
      </select>
    );
}

export default CourseFilter;
