import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoSelector, addToDo, removeToDo, searchToDo,todoSearch } from "./toDoSlice";
import { v4 as uuidv4 } from "uuid";
import Search from "./Search";

export default function ToDo() {
  const dispatch = useDispatch();

  const [jobName, setJobName] = useState("");

  const jobList = useSelector(todoSelector);

  const handleAddToDo = (e) => {
    e.preventDefault();

    if (jobName !== "") {
      dispatch(
        addToDo({
          id: uuidv4(),
          name: jobName,
        })
      );

      setJobName("");
    }
    
    console.log(jobList)
  };

  const handleChange = (e) => {
    if (e.target.value !== "") {
      setJobName(e.target.value);
    }
  };

  const handleRemove = (index) => {
    dispatch(removeToDo(index));
  };

  return (
    <div style={{ margin: "3%" }}>
      <Search jobList={jobList} />
      <div>
        <form onSubmit={handleAddToDo}>
          <input
            type={"text"}
            onChange={handleChange}
            name={"job"}
            placeholder={"Tên công việc..."}
            value={jobName}
          />
          <button type={"submit"}>Thêm</button>
        </form>
      </div>
      <div>
        {
          jobList.map(({ id, name }, index) => {
              return <p key={id}>
                <input type={"checkbox"} />
                <span>
                  {name}
                </span>
                <span
                  onClick={() => {
                    handleRemove(index);
                  }}
                >
                  x
                </span>
              </p>
          })
        }
      </div>
    </div>
  );
}
