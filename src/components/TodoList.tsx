import React from 'react';
import { Todo } from "../model";
import SingleTodo from './SingleTodo';
import './styles.css';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <div className="container">
        <div className="todos">
            <span className="todos__heading">
                Active Tasks
            </span>
            {todos.map(todo => {
                return !todo.isDone && <SingleTodo 
                todo={todo} 
                todos={todos} 
                key={todo.id}
                setTodos={setTodos}/>
            })}
        </div>
        <div className="todos remove">
            <span className="todos__heading">Completed Todos</span>
        {todos.map(todo => {
                return todo.isDone && <SingleTodo 
                todo={todo} 
                todos={todos} 
                key={todo.id}
                setTodos={setTodos}/>
            })}
        </div>
    </div>

    // <div className="todos">
    //     {todos.map(t => {
    //         return <SingleTodo 
    //             todo={t} 
    //             key={t.id}
    //             todos={todos}
    //             setTodos={setTodos}
    //             />
    //     })}
    // </div>
    );
};

export default TodoList;
