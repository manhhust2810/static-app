import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as action from './../../actions/index';

function CurrentView(props) {
  const {
    status,
    deleteRow,
    generateId,
    examination,
    process,
    saveRowById,
    semeter,
    courseId,
    courseTitle,
    credits,
    factor
  } = props;

  const [newSemester, setNewSemester] = useState(semeter);
  const [newCourseId, setNewCourseId] = useState(courseId);
  const [newCourseTitle, setNewCourseTitle] = useState(courseTitle);
  const [newCredits, setNewCredits] = useState(credits);
  const [newProcess, setNewProcess] = useState(process);
  const [newExamination, setNewExamination] = useState(examination);
  const [newFactor, setNewFactor] = useState(factor);

  const handleChangeSemester = e => {
    const { value } = e.target;
    setNewSemester(value);
  };

  const handleChangeCourseId = e => {
    const { value } = e.target;
    setNewCourseId(value);
  };

  const handleChangeCourseTitle = e => {
    const { value } = e.target;
    setNewCourseTitle(value);
  };

  const handleChangeCredits = e => {
    const { value } = e.target;
    setNewCredits(value);
  };

  const handleChangeProcess = e => {
    const { value } = e.target;
    setNewProcess(value);
  };

  const handleChangeExamination = e => {
    const { value } = e.target;
    setNewExamination(value);
  };

  const handleChangeFactor = e => {
    const { value } = e.target;
    setNewFactor(value);
  };

  const newCourse = [
    generateId,
    newSemester,
    newCourseId,
    newCourseTitle,
    newCredits,
    newProcess,
    newExamination,
    newFactor
  ];

  function saveData() {
    saveRowById(...newCourse);
  }

  // useEffect(() => {
  //   saveRow(generateId, newFactor, newProcess, newExamination)
  // }, [newFactor, newProcess, newExamination])

  return (
    <tr>
      <td className="format-input-cell">
        <input
          type="text"
          className="border-input"
          size="5"
          maxlength="5"
          onChange={handleChangeSemester}
        />
      </td>
      <td className="format-input-cell">
        <input
          type="text"
          className="border-input"
          size="7"
          maxlength="7"
          onChange={handleChangeCourseId}
        />
      </td>
      <td className="format-input-cell">
        <input
          type="text"
          className="border-input"
          size="46"
          maxlength="46"
          onChange={handleChangeCourseTitle}
        />
      </td>
      <td className="format-input-cell">
        <input
          type="text"
          className="border-input"
          size="2"
          maxlength="2"
          onChange={handleChangeCredits}
        />
      </td>
      <td className="format-input-cell">
        <input
          type="text"
          className="border-input"
          size="3"
          maxlength="3"
          onChange={handleChangeProcess}
        />
      </td>
      <td>
        <input
          type="text"
          className="border-input"
          size="3"
          maxlength="3"
          onChange={handleChangeExamination}
        />
        {/* <select 
        className="form-control" 
        defaultValue={factor} 
        // onChange={handleSelectOption}
        >
        <option value="user">0.5</option>
        <option value="manager">0.3</option>
        <option value="custormer">0.4</option>
        </select> */}
      </td>
      <td>
        <input
          type="text"
          className="border-input"
          size="3"
          maxlength="3"
          onChange={handleChangeFactor}
        />
      </td>
      <td>
        <center>
          {/* {actionsArray.map((item)=>(<button 
        className={`btn btn-${item.buttonType}`}
        onClick={item.handleEvent}
        >{item.name}
        </button>))} */}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn btn-success" onClick={saveData}>
            Save
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="btn btn-danger"
            onClick={() => deleteRow(generateId)}
          >
            Delete
          </button>
        </center>
      </td>
      <td></td>
      <td></td>
      <td className="text-center">
        <span
          className={
            status === 'Pending'
              ? 'label label-success'
              : status === 'Error'
              ? 'label label-danger'
              : null
          }
        >
          {status}
        </span>
      </td>
    </tr>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    addNewRow: value => {
      dispatch(action.addNewRow(value));
    },
    deleteRow: id => {
      dispatch(action.deleteRow(id));
    },
    saveRowById: (
      id,
      semester,
      courseId,
      courseTitle,
      credits,
      process,
      examination,
      factor
    ) => {
      dispatch(
        action.saveRow(
          id,
          semester,
          courseId,
          courseTitle,
          credits,
          process,
          examination,
          factor
        )
      );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentView);
