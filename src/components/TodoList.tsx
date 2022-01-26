import React from 'react';
import { Todo } from "../model";
import SingleTodo from './SingleTodo'
import './styles.css';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    return (
        <div className="container">
            <Droppable droppableId='TodosList'>
                {
                    (provided) => (
                        <div className="todos"
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            <span className="todos__heading">
                                Active Tasks
                            </span>
                            {todos.map((todo, i) => {
                                return !todo.isDone && <SingleTodo
                                    todo={todo}
                                    todos={todos}
                                    index={i}
                                    key={todo.id}
                                    setTodos={setTodos} />
                            })}
                            {provided.placeholder}
                        </div>
                    )
                }

            </Droppable>
            <Droppable droppableId='TodosList_remove'>
                {
                    (provided) => (
                        <div className="todos remove"
                            ref={provided.innerRef}
                            {...provided.droppableProps}>

                            <span className="todos__heading">Completed Todos</span>
                            {todos.map((todo, i) => {
                                return todo.isDone && <SingleTodo
                                    todo={todo}
                                    todos={todos}
                                    index={i}
                                    key={todo.id}
                                    setTodos={setTodos} />
                            })}
                            {provided.placeholder}
                        </div>
                    )
                }
                

            </Droppable>
        </div>
    );
};

export default TodoList;
