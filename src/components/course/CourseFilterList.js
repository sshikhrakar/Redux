import React, {PropTypes} from 'react';

const CourseFilterList = ({elem}) => {
    return(
      <option value={elem.id}>{elem.id}</option>
    );
}

export default CourseFilterList ;
