import React from 'react'

const TaskForm = (props) => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input type="text"
                autoFocus
                value={props.value}
                onChange={props.onChange}
                className="p-2 rounded-border task-input"
                placeholder="ADD SOMETHING" />
            </form>
        </div>
    )
}

export default TaskForm