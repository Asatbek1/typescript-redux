import { useDispatch } from "react-redux";
import { toggleComplete, removeTodo, Todo } from "../store/todoSlice";

const TodoItem: React.FC<Todo> = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{text}</span>
      <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;
