import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import './styles.css';

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDone = (id: number) => {
        setTodos(todos.map(todo => {
            return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        }));
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(t => t.id !== id));
    }

    const handleEdit = (e: React.FormEvent, id: number) => {
        e.preventDefault();

        setTodos(todos.map(todo => {
            return todo.id == id ? {...todo, todo: editTodo} : todo
        }))

        setEdit(false);
    }

    useEffect(() => {
      inputRef.current?.focus();
    }, [edit]);
    

    return <form className="todos__single" 
        onSubmit={(e) => handleEdit(e,todo.id)}>

        {
            edit ? (
                <input type="text" 
                    ref={inputRef}
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className="todos__single--text"/>
            ) : (
                todo.isDone ? (
                    <s className="todos__single--text">
                        {todo.todo}
                    </s>
                ) : (
                    <span className="todos__single--text">
                        {todo.todo}
                    </span>
                )
            )
        }

        { // Display task, strikethrough if task is done

        }

        <div>
            <span className="icon">
                <AiFillEdit onClick={() => {
                    if (!edit && !todo.isDone) {
                        setEdit(!edit)
                    }
                }
                } />
            </span>
            <span className="icon">
                <AiFillDelete onClick={() => handleDelete(todo.id)} />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdDone />
            </span>
        </div>
    </form >;
};

export default SingleTodo;
