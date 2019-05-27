import React, {Component} from 'react';
import './todo-list-item.css';
// const TodoListItem = (props) => {
//   return <span>{props.label}</span>;
// };
export default class TodoListItem extends Component {
  state ={
      done: false,
      important: false
    }//вместо конструктора(новый стандарт)
  
  // constructor(){
  //   super()
  //   this.state ={
  //     done: false
  //   };
  // }
  onLabelClick = () => {
    this.setState(({done}) =>{
      return{done: !done}
        
      
    });
    //console.log(`Done: ${this.props.label}`);эквивалент constructor ниже
  };
  onMarkImportant = () =>{
    this.setState(({important}) =>{ //setState((state) => {return{important: !state.important}})
      return{
        important: !important
      }
      
    });
  };
  // onLabelRemove = () =>{
  //   this.setState({
          
  //           remove: true
         
          
  //       });
  // }
  // constructor(){
  //   super();
  //   this.onLabelClick = () =>{
  //     console.log(`Done: ${this.props.label}`);
  //   }
  // }

  // onLabelClick(){
  //   console.log(`Done: ${this.props.label}`);see on top!
  // }

  render(){
    const {label, onRemoved} = this.props;
    const {done, important} = this.state;
    let classNames = 'todo-list-item';
    if(done){
      classNames += ' done';
    }
    if(important){
      classNames += ' important';
    }
    // if(remove){
    //   classNames += ' remove'
    // }
    // const style = {
    //   color: important? 'tomato': 'blue',
    //   fontWeight: important? 'bold': 'normal'
    // };
    return (
    <span className={classNames}>
      <span 
        className="todo-list-item-label"
        onClick={this.onLabelClick}> {/*(.bind(this) Это создает каждый раз новую функцию!)*/}
        {label}
      </span>
      <button type="button"
        className="btn btn-outline-success btn-sm float-left"
        onClick={this.onMarkImportant}>
        <i className="fa fa-exclamation" />
      </button>
  
      <button type="button"
        className="btn btn-outline-danger btn-sm float-right"
         /*onClick={this.props.onRemoved} without destructing */
         onClick={onRemoved} >
        <i className="fa fa-trash-o" />
      </button>
    </span>);
  };

}
// const TodoListItemFunc = ({label, important = false}) => {
//   const style = {
//     color: important? 'tomato': 'blue',
//     fontWeight: important? 'bold': 'normal'
//   };
//   return (
//   <span className="todo-list-item">
//     <span 
//       className="todo-list-item-label"
//       style={style}>
//       {label}
//     </span>
//     <button type="button"
//       className="btn btn-outline-success btn-sm float-right">
//       <i className="fa fa-exclamation" />
//     </button>

//     <button type="button"
//       className="btn btn-outline-danger btn-sm float-right">
//       <i className="fa fa-trash-o" />
//     </button>
//   </span>);
// };
// export default TodoListItem;