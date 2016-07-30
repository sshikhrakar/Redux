import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import CourseFilter from './CourseFilter.js';
class CoursesPage extends React.Component{
  constructor(props, context){
    super(props, context);
    this.redirectToAddCoursePage =this.redirectToAddCoursePage.bind(this);
    this.filterAuthor =this.filterAuthor.bind(this);
  }

  courseRow(course, index){
    return (<div key={index}>{course.title}</div>);
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

  filterAuthor(e){
    e.preventDefault();
    console.log(document.getElementsByClassName('table'))
  }
  render(){
    const {courses} = this.props;
    return(
      <div>
        <h1>Courses</h1>
        <CourseFilter authors={this.props.authors}/>
        <button onClick={this.filterAuthor}>Filter</button>
        <input type="submit" value="Add Course" className="btn btn-primary" onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={courses}/>
        {courses.map((course, index) => {
            this.courseRow(course, index);
          })
        }
      </div>
    );
  }
}
// CoursesPage.propTypes={
//   courses: PropTypes.object.isRequired,
//   actions: PropTypes.func.isRequired
// };
function mapStateToProps(state, ownProps){
  return{
    courses: state.courses,
    authors: state.authors
  };

}
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
