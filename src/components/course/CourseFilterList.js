import React, {PropTypes} from 'react';

const CourseFilterList = (props) => {
    return(
      <option value={props.elem.id} key={props.elem.id}>{props.elem}</option>
    );
}

export default CourseFilterList ;
