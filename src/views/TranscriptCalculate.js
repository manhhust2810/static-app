import CurrentView from '../components/TranscriptCalculate/CurrentView';
import UpdateView from '../components/TranscriptCalculate/UpdateView';
import { connect } from 'react-redux';
import * as action from '../actions/index';
import CourseList from '../courseList';

function TranscriptCalculate(props) {
  const { status, currentState, addNewRow, handleState } = props;

  const columnTitles = [
    "Semester",
    "Course Id",
    "Course Title",
    "Credits",
    "Process point",
    "Final exam",
    "Factor",
    "Action",
    "Point",
    "Grade",
    "Status"
  ];

  const buttonStyle = {
    marginTop: "6px"
  };

  return (
    <div className="row-mt-15 format-table text">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              {columnTitles.map((columnTitle, index) => (
                <th className="text-center" key={index}>
                  {columnTitle}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CourseList.map(post => (
              <tr key={post.id}>
                <td className="text-center">{post.semester}</td>
                <td>{post.courseId}</td>
                <td className="">{post.courseTitle}</td>
                <td className="text-center">{post.credits}</td>
                <td className="text-center">{post.process}</td>
                <td className="text-center">{post.examination}</td>
                <td className="text-center">{post.factor}</td>
                <td className="text-center">
                  <center>
                    <button 
                      className="btn btn-warning">
                        Edit
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button 
                      className="btn btn-success">
                        Save
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button 
                      className="btn btn-danger">
                        Delete
                    </button>
                  </center>
                </td>
                <td className="text-center">
                  {`${
                    post.process * post.factor +
                    post.examination * (1 - post.factor)
                  }`}
                </td>
                <td className="text-center">{post.grade}</td>
                <td className="text-center">
                  <span
                    className={
                      post.status === 'Success'
                        ? 'label label-success'
                        : post.status === 'Pending'
                        ? 'label label-primary'
                        : post.status === 'Rejected'
                        ? 'label label-warning'
                        : 'label label-danger'
                    }
                  >
                    {post.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
          <>
          {handleState&&handleState.map(item => (
              <UpdateView 
                key={item.generateId}
                {...item}
              />
          ))}       
          </>
          <>
          {currentState&&currentState.map(item => (
              <CurrentView 
                key={item.generateId}
                {...item} 
              />
          ))}
          </>
            
          </tfoot>
        </table>
        <button 
            className="btn btn-info" 
            style={buttonStyle}
            onClick={addNewRow}>
          Add more
        </button>
        <span>
          {status === 'Pending' ? (
            <div className="alert alert-success">
              <strong>Saved New Member On Success Action!</strong>
            </div>
          ) : status === 'Error' ? (
            <div className="alert alert-danger">
              <strong>Saved New Member On Failure Action!</strong>
            </div>
          ) : null}
        </span>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    handleState: state.TranscriptReducer.handleState,
    currentState: state.TranscriptReducer.currentState
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addNewRow: () => {
      dispatch(action.addNewRow());
    },
    deleteRow: id => {
      dispatch(action.deleteRow(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TranscriptCalculate);
