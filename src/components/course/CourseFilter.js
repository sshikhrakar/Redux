import React, {PropTypes} from 'react';
import SelectFilter from './SelectFilter';

class CourseFilter extends React.Component{
  constructor(props, context){
    super(props, context);
    this.promptFilter = this.promptFilter.bind(this);
  }
  promptFilter(e){
    e.preventDefault();
    console.log(ref);
    // this.props.filterAuthor(ref);
  }
  getRef(ref){
    const ref = ref;
  }
  render(){
    const options = this.props.options;
    return(
      <form onSubmit={this.promptFilter}>
        <SelectFilter options={options} getRef={this.getRef}/>
        <button type="submit">Filter</button>
      </form>
    );
  }
}

export default CourseFilter;
