import React, {Component} from 'react';
import TodoList from '../todo-list/';
import AppHeader from '../app-header/';
import SearchBar from '../search-bar/';
import TodoStatusFilter from '../item-status-filter/';
import ItemAddForm from '../item-add-form';
import './app.css';



export default class App extends Component{
  maxId = 100;
  state = {
    todoData: [
      {label: 'Drink Coffee', important: false, id: 1},
      {label: 'Learn React', important: false, id: 2},
      {label: 'Build App', important: true, id: 3}
  ]

  };
  
  // removeItem = (id) =>{
  //   this.setState(({todoData}) => {
  //     const idx = todoData.findIndex((el) => el.id === id);
  //     // console.log(idx);
  //     todoData.splice(idx, 1); BAD PRACTICE!!!
  //     return{
  //       todoData: todoData
  //     };
  //   });
  // };
  removeItem = (id) =>{
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      // const before = todoData.slice(0, idx);
      // const after = todoData.slice(idx + 1);
      // const newArray = [...before, ...after];
      const newArray = [
        ...todoData.slice(0, idx),
         ...todoData.slice(idx + 1)];
      return{
        todoData: newArray
      }

    })
  };
  addItem = (text) => {
    // console.log('Added ', text);
    const newItem = {
      label: text,
      important:false,
      id: this.maxId++
    }
    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newItem
      ];
      return{
        todoData: newArr
      };
        
      
    })
  };
  

  render(){
    return(
      <div className="todo-app">
        {/* <span>{new Date().toString()}</span> */}
        <AppHeader toDo={1} done={3}/>
        <div className="top-panel d-flex">
          <SearchBar />
          <TodoStatusFilter />
        </div>
        
        <TodoList todos={this.state.todoData}
         onRemoved={this.removeItem} />
         <ItemAddForm 
          onItemAdded = {this.addItem}/>
      </div>
    );
  }

};
