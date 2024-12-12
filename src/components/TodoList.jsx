import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;
  return (
    <ul className="main">
      {todos.map((todo, id) => {
        return (
          <TodoCard {...props} key={id} index={id}>
            <>{todo}</>
          </TodoCard>
        );
      })}
    </ul>
  );
}
