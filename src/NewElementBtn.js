import "./NewElementBtn.css";
import { useState } from "react";

const NewElementBtn = ({ content, submit }) => {
  const [value, setValue] = useState("");

  function HandleChange(event) {
    event.preventDefault();
    var newValue = event.target.value;
    setValue(newValue);
  }

  function HandleSubmit({ submit }) {
    return (event) => {
      event.preventDefault();
      submit({value});
      setValue("");
    };
  }

  return (
    <div className="submit-div">
      <form onSubmit={HandleSubmit({ submit })}>
        <input
          type="text"
          className="new-element-text"
          value={value}
          onChange={HandleChange}
        />
        <input type="submit" content={content} className="new-element-btn" />
      </form>
    </div>
  );
};

export default NewElementBtn;
