import React from "react";

// import CreateEvent from "../creat_event";


const CreateEvent = () => {
  return (
    <div className="content-wrapper">
      <form action="">
        <h1>To.gather makes it possible!</h1>

        <input type="text" placeholder="What's the occasion?" />
        <br />

        <input
          list="browsers"
          name="browser"
          id="browser"
          placeholder="Sports"
        />
        <datalist id="browsers">
          <option value="basketball"> </option>
          <option value="soccer"> </option>
          <option value="hockey"> </option>
          <option value="tennis"> </option>
          <option value="volleyball"> </option>
          <option value="handball"> </option>
        </datalist>
        <br />

        <input type="list" list="soccer" placeholder="Persons" />
        <br />

        <datalist id="browsers">
          <option value="1"> </option>
          <option value="2"> </option>
          <option value="3"> </option>
          <option value="4"> </option>
        </datalist>
        <br />

        <input type="text" placeholder="invitation" />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
};
export default CreateEvent;
