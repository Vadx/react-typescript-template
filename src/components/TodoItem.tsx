import { Checkbox, ListItem, ListItemText } from '@material-ui/core';
import React, {FC} from 'react'
import {ITodo} from "../types/types"

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <ListItem>
          <Checkbox color='primary' checked={todo.completed} />
          <ListItemText>
            {todo.id}. {todo.title}
          </ListItemText>
        </ListItem>
    );
};

export default TodoItem