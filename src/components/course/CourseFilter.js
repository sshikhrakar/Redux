import React, {PropTypes} from 'react';
import CourseFilterList from './CourseFilterList';

const CourseFilter = ({authors, filterAuthor}) => {
    return(
      <form onSubmit={filterAuthor.bind(null,this.refs.filter.value)}>
        <select className="select-author" name="filter-author" ref="filter">
          {authors.map((author,i) =>
            <CourseFilterList key={i} author={author}/>
          )}
        </select>
        <button type="submit">Filter</button>
      </form>
    );
}

export default CourseFilter;
