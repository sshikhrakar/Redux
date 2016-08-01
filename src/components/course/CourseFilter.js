import React, {PropTypes} from 'react';
import CourseFilterList from './CourseFilterList';

class CourseFilter extends React.Component{
  constructor(props, context){
    super(props, context);
    this.promptFilter = this.promptFilter.bind(this);
    this.state= {

    }
  }
  promptFilter(e){
    e.preventDefault();
    if(this.refs.authorFilter.value && this.refs.categoryFilter.value){
      this.props.filter({author:this.refs.authorFilter.value, category:this.refs.categoryFilter.value});
    }
    else if(this.refs.categoryFilter.value){
      this.props.filter({category:this.refs.categoryFilter.value});
    }
    else if(this.refs.authorFilter.value){
      this.props.filter({author:this.refs.authorFilter.value});
    }
  }

  render(){
    const authors = this.props.optionAuthor;
    const category = ['JavaScript', 'Software Practices', 'Software Architecture', 'Career', 'HTML5'];
    return(
      <form onSubmit={this.promptFilter}>
        <select ref="authorFilter">
          <option value=""> Select any option </option>
          {authors.map((elem,i) =>
            <CourseFilterList key={i} index={i} elem={elem.id}/>
          )}
        </select>
        <select ref="categoryFilter">
          <option value=""> Select any option </option>
          {category.map((elem,i) =>
            <CourseFilterList key={elem + i} index={elem + i} elem={elem}/>
          )}
        </select>
        <button type="submit">Filter</button>
      </form>
    );
  }
}

export default CourseFilter;
