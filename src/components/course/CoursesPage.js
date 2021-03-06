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
    this.filter =this.filter.bind(this);
  }

  componentWillMount(){
    this.props.actions.loadCourses({});
  }

  courseRow(course, index){
    return (<div key={index}>{course.title}</div>);
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

  filter(filters){
    this.props.actions.filterCourses(filters);
  }
  render(){
    const {courses} = this.props;
    return(
      <div>
        <h1>Courses</h1>
        <CourseFilter optionAuthor={this.props.authors} optionCourse={this.props.courses} filter={this.filter}/>
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
