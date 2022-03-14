import React from 'react'
import './TodoItem.scss'
class TodoItem extends React.Component {

    state = {
        jobCurrent: {}
    }

    render() {
        const arrJob = this.props.arrJob
        const handleDelete = this.props.deleteJob
        const handleEdit = this.props.editJob
        const jobCurrent = this.props.jobCurrent
        const isEmpty = Object.keys(jobCurrent).length === 0

        const handleInputChange = (e, item) => {
            item.nameJob = e.target.value
        }
        return (
            <>
                {
                    arrJob && arrJob.length > 0 && arrJob.map((item, index) => (
                        <div className="item-container" key={index}>
                            {!isEmpty && item.id === jobCurrent.id ?
                                <input
                                    value={jobCurrent.nameJob}
                                    onChange={(e) => handleInputChange(e, item)}
                                />
                                :
                                <span>{item.nameJob}</span>
                            }


                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => handleEdit(item)}
                            >
                                {!isEmpty && item.id === jobCurrent.id ? 'Save' : 'Edit'}
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => handleDelete(item.id)}
                            >Delete</button>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default TodoItem
