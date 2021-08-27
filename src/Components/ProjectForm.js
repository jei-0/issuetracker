import { useState } from "react";

const ProjectForm = (props) => {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const obj = {};
    const key = e.target.name;
    const value =
      key !== "members"
        ? e.target.value.trim()
        : e.target.value.split(",").map((member) => member.trim());
    obj[key] = value;
    setInput({ ...input, ...obj });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const unixEp = Math.floor(Date.now() / 1000).toString(32);
    const randyNum = Math.random().toString(32).substr(2, 6);
    const newProject = {
      ...input,
      id: ("P|" + randyNum + unixEp.substr(unixEp.length - 2)).toUpperCase(),
      creationData: {
        creator: props.user || "User 1",
        date: new Date(),
      },
    };
    props.onSubmit(newProject);
    setInput({});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>{props.formType === "add" ? "New" : "Edit"} Project</h3>
        <label>
          Name: <input name="title" onChange={handleChange} type="text" />
        </label>
        <label>
          Description:{" "}
          <input name="description" onChange={handleChange} type="text" />
        </label>
        <label>
          Deadline:{" "}
          <input name="deadline" onChange={handleChange} type="date" />
        </label>
        <label>
          Project Members:{" "}
          <input name="members" onChange={handleChange} type="text" />
        </label>
        <div>
          <button type="submit">Submit</button>
          <button onClick={props.onCancel} type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
