import React, {PropTypes} from 'react';

const CourseFilterList = ({author}) => {
    return(
      <option value={author.id}>{author.id}</option>
    );
}

export default CourseFilterList ;
