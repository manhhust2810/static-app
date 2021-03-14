import React from 'react';
import { connect } from 'react-redux';

function UpdateView(props) {
  const { 
    status,
    factor,
    process,
    courseTitle,
    courseId,
    semester,
    credits,
    examination,
    point,
    grade
} = props;


  return (
    <tr>
      <td className="text-center format-input-cell">
        {semester}
      </td>
      <td className="">{courseId}</td>
      <td className="" size="2" maxlength="2">{courseTitle}</td>
      <td className="text-center">{credits}</td>
      <td className="text-center">{process}</td>
      <td className="text-center">{examination}</td>
      <td className="text-center">{factor}</td>
      <td>
        <center>
          <button 
          className="btn btn-warning" 
        //   onClick={}
          >
            Edit
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="btn btn-success"
            // onClick={handleSave}
          >
            Save
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn btn-danger">Delete</button>
        </center>
      </td>
      <td className="text-center" maxlength="3">{point}</td>
      <td className="text-center">{grade}</td>
      <td className="text-center">
        <span className="label label-primary">{status}</span>
      </td>
    </tr>
  );
}

const mapStateToProps = state => {
  return {
    
  };
};

export default connect(mapStateToProps, null)(UpdateView);
