import React from 'react'
import './TodoRedux.scss'
import { connect } from 'react-redux'

class TodoRedux extends React.Component {

    state = {
        inputValue: '',
        inputEdit: '',
        currentJob: {}
    }

    handleInput = (e) => {
        this.setState({ inputValue: e.target.value })
    }

    handleAdd = () => {
        const id = Math.floor(Math.random() * 10000)
        const nameJob = this.state.inputValue
        const value = {
            id,
            nameJob
        }
        this.props.handleAddJob(value)
        this.setState({ inputValue: '' })
    }

    handleDelete = (job) => {
        this.props.handleDeleteJob(job)
    }

    handleEdit = (job) => {
        const isEmpty = Object.keys(this.state.currentJob).length === 0
        if (!isEmpty && this.state.currentJob.id === job.id) {
            console.log(111111);
            const currentJob = this.state.currentJob
            currentJob.nameJob = this.state.inputEdit
            this.props.handleEditJob(currentJob)
            this.setState({ currentJob: {} })
        } else {
            this.setState({ currentJob: job })
        }
    }

    componentDidMount() {
        this.setState({
            listJob: this.props.listJob
        })
    }

    render() {

        const handleInputChangeJob = (e) => {
            const nameJob = e.target.value
            this.setState({
                currentJob: { ...currentJob, nameJob },
                inputEdit: nameJob
            })
        }

        const listJob = this.props.listJob
        const { currentJob } = this.state
        const isEmpty = Object.keys(this.state.currentJob).length === 0

        return (
            <div className="container">
                <div className="header">
                    <input
                        type="text"
                        className="form-control"
                        value={this.state.inputValue}
                        onChange={this.handleInput}
                    />
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={this.handleAdd}
                    >
                        Add
                    </button>
                </div>
                <div className="todo-container">
                    {listJob && listJob.map(item => (
                        <div className="todo-list" key={item.id}>
                            {!isEmpty && item.id === currentJob.id ?
                                <input
                                    type="text"
                                    className="form-control"
                                    value={currentJob.nameJob}
                                    onChange={(e) => handleInputChangeJob(e)}
                                />
                                :
                                <span>{item.nameJob}</span>
                            }
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => this.handleEdit(item)}
                            >
                                {!isEmpty && item.id === currentJob.id ? 'Save' : 'Edit'}
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => this.handleDelete(item)}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        listJob: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddJob: (payload) => dispatch({ type: 'ADD_JOB', payload }),
        handleDeleteJob: (payload) => dispatch({ type: 'DELETE_JOB', payload }),
        handleEditJob: (payload) => dispatch({ type: 'EDIT_JOB', payload })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoRedux)
