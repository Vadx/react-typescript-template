import React, {FC, useEffect, useState} from 'react'
import List from "../components/List"
import {ITodo} from "../types/types"
import TodoItem from "../components/TodoItem"
import axios from "axios"
import { Typography } from '@material-ui/core'

const Todos: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
          const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
      <>
        <Typography variant='h3' gutterBottom>Todo List</Typography>
        <List
          items={todos}
          renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id}/>}
        />
      </>
    );
};

export default Todos