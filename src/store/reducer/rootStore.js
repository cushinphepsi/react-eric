const initValue = [
    { id: 1, nameJob: 'Doing homework' },
    { id: 2, nameJob: 'Study programs' },
    { id: 3, nameJob: 'Relax with music' }
]

const reducer = (state = initValue, action) => {
    switch (action.type) {
        case 'ADD_JOB':
            return [...state, action.payload]
        case 'DELETE_JOB':
            const newJob = [...state]
            const currentJob = newJob.filter(job => job.id !== action.payload.id)
            state = currentJob
            return state
        case 'EDIT_JOB':
            const currentJobEdit = action.payload
            const index = state.findIndex(item => item.id === currentJobEdit.id)
            state[index].nameJob = currentJobEdit.nameJob
            return [...state]
        default:
            break;
    }
    return state
}

export { reducer }