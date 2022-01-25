import React, { useRef } from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd} : Props) => {

  // allows us to attach a reference to an element, much like document.getById()
  // These element types follow the format HTML____Element
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="input" onSubmit={(e) => {
        handleAdd(e)
        // shift the focus off of the referenced input element
        // this removes the darkened screen even if we use enter
        // instead of clicking on the go button (changing focus)
        inputRef.current?.blur()
    }}>
    <input type="input"
      ref={inputRef}
      value={todo}
      onChange={(e)=>setTodo(e.target.value)}
      placeholder="Enter a task" 
      className="input__box"/>
    <button type="submit" className="input__submit">Go</button>
  </form>
  )
};

export default InputField;
