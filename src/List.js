import "./List.css";
import TodoElement from "./TodoElement";
import NewElementBtn from "./NewElementBtn";
import { useState } from "react";

const initialList = [
  <TodoElement elementContent="Phase 1: Learn React" />,
  <TodoElement elementContent="Phase 2: ????" />,
  <TodoElement elementContent="Phase 3: Profit" />,
];



const List = () => {
  const[list, setList] = useState(initialList);

  function AddElement({value}) {
    const newList = list.concat(<TodoElement elementContent={value} />);
    setList(newList);
  }

  return (
    <div> 
      {list}
      <NewElementBtn content="Add" submit={AddElement}/>
    </div>
  );
};


export default List;
