import React from "react";
import "./TodoItem.scss";
class TodoItem extends React.Component {
  state = {
    jobCurrent: {},
  };

  render() {
    const arrJob = this.props.arrJob;
    const handleDelete = this.props.deleteJob;
    const handleEdit = this.props.editJob;
    const jobCurrent = this.props.jobCurrent;
    const isEmpty = Object.keys(jobCurrent).length === 0;
    const setJobCurrent = this.props.setJobCurrent;

    const handleInputChange = (e) => {
      let editTodoCopy = { ...this.props.jobCurrent };
      editTodoCopy.nameJob = e.target.value;
      setJobCurrent(editTodoCopy);
    };
    return (
      <>
        {arrJob &&
          arrJob.length > 0 &&
          arrJob.map((item, index) => (
            <div className="item-container" key={index}>
              {!isEmpty && item.id === jobCurrent.id ? (
                <input
                  value={jobCurrent.nameJob}
                  onChange={(e) => handleInputChange(e)}
                />
              ) : (
                <span>{item.nameJob}</span>
              )}

              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleEdit(item)}
              >
                {!isEmpty && item.id === jobCurrent.id ? "Save" : "Edit"}
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
      </>
    );
  }
}

export default TodoItem;
