import React, {PropTypes} from 'react';
import CourseFilterList from './CourseFilterList';

class SelectFilter extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  render(){
    const options = this.props.options;
    this.props.getRef.bind(null,this.refs.selectFilter.value);
    return(
        <select ref="selectFilter">

          {options.map((elem,i) =>
            <CourseFilterList key={i} elem={elem}/>
          )}
        </select>
    );
  }
}

export default SelectFilter;
