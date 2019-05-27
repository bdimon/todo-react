import React from 'react';
import TodoListItem from '../todo-list-item/';
import './todo-list.css';
const TodoList = ({todos, onRemoved}) => {
  const elements = todos.map((item) => {
    const {id, ...itemProps} = item;//передaется все кроме "id"(spread operator)
    return(
      <li key = {id} className="list-group-item">
        <TodoListItem {... itemProps}
         onRemoved={() => onRemoved(id)}/>
      </li>
      // <li>
      //   <TodoListItem 
      //   label={item.label}
      //   important={item.important}/>
      // </li>
    );
  })
  
  return(
    <ul className="list-group todo-list">
      {elements}
{/*       
      <li><TodoListItem 
        label={todos[1].label}
        important={todos[1].important}/>
      </li>*/}
    </ul>
  )
};
export default TodoList;