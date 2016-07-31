import React, {PropTypes} from 'react';
import CourseFilterList from './CourseFilterList';

class CourseFilter extends React.Component{
  constructor(props, context){
    super(props, context);
    this.promptFilter = this.promptFilter.bind(this);
  }
  promptFilter(e){
    e.preventDefault();
    this.props.filterAuthor(this.refs.selectFilter.value);
  }
  render(){
    const authors = this.props.authors;
    return(
      <form onSubmit={this.promptFilter}>
        <select className="select-author" ref="selectFilter">
          {authors.map((author,i) =>
            <CourseFilterList key={i} author={author}/>
          )}
        </select>
        <button type="submit">Filter</button>
      </form>
    );
  }
}

export default CourseFilter;
