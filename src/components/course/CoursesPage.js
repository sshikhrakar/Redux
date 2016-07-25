import React, {propTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
class CoursesPage extends React.Component{
  constructor(){
    super();
    this.state ={
      course: {title: ''}
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onTitleChange(e){
    const course = this.state.course;
    course.title = e.target.value;
    this.setState({course: course});
  }
  onClickSave(){
    this.props.actions.createCourse(this.state.course);
  }
  courseRow(course, index){
    return <div key={index}>{course.title}</div>
  }
  render(){
    return(
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
        <h2>Add Course</h2>
        <input type="text" onChange={this.onTitleChange} value={this.state.course.title}/>
        <input type="submit" value="Save" onClick={this.onClickSave}/>
      </div>
    )
  }
}
// CoursesPage.propTypes={
//   courses: PropTypes.object.isRequired,
//   actions: PropTypes.func.isRequired
// };
function mapStateToProps(state, ownProps){
  return{
    courses: state.courses
  };
}
function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);