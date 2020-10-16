import React from "react";

const TaskItem = ({ data, onToggle, toggle, onDelete }) => {
  console.log(data);
  return (
    <li>
      <div>
        <input type="checkbox" onChange={onToggle} />
        {toggle ? (
          <label style={{ color: "green" }}>{data.title}</label>
        ) : (
          <label>{data.title}</label>
        )}
        <button id={data.id} onClick={() => onDelete(data.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

const TaskList = (props) => (
  <ul className="task-list">
    {props.todos.map((todo) => (
      <TaskItem
        key={todo.id}
        onToggle={props.onToggle}
        data={todo}
        onDelete={props.onDelete}
        toggle={props.toggle}
      />
    ))}
  </ul>
);

export default TaskList;
