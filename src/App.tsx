import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import {Todo} from './model';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {
        id: Date.now(), 
        todo: todo, 
        isDone: false}])

      setTodo("")
    }
  }

  const onDragEnd = (result: DropResult) => {
    const {source, destination} = result;

    if(!destination) return;
    if(destination.droppableId === source.droppableId
      && destination.index === source.index) return;

    let add;
    if(source.droppableId === 'TodosList'){
      
    }


  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <span className="heading">
        Another Task App
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
    </DragDropContext>
  )
}

export default App;
