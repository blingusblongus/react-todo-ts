```
const TodoReducer = (state: Todo[], action: Actions) => {
    switch(action.type){
        case "add":
            return [...state]
    }
}

import { useReducer } from "react";
const ReducerExample = () => {
    const [state, dispatch] = useReducer(TodoReducer, []);
}
```