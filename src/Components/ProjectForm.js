import { useState } from "react";

const ProjectForm = (props) => {
  const [input, setInput] = useState({});
  const formFields = ["title", "description", "deadline", "members"];

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
    const newProjectData = {
      id: ("P|" + randyNum + unixEp.substr(unixEp.length - 2)).toUpperCase(),
      creationData: {
        creator: props.user || "You",
        date: new Date(),
        lastUpdate: new Date(),
      },
    };
    props.onSubmit(
      props.formType === "add"
        ? {
            ...newProjectData,
            ...input,
          }
        : {
            projectEntry: {
              ...props.activeProject,
              ...input,
              lastUpdate: new Date(),
            },
            projectIndex: props.projectIndex,
          }
    );
    setInput({});
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>{props.formType === "add" ? "New" : "Edit"} Project</h3>
        <div>
          {formFields.map((field, n) => {
            return (
              <label key={field + n}>
                <span className="field-title">{field}: </span>
                <input
                  name={field}
                  onChange={handleChange}
                  type={field === "deadline" ? "date" : "text"}
                  defaultValue={
                    props.activeProject &&
                    props.activeProject[field]?.length &&
                    (field === "members"
                      ? props.activeProject[field].join(", ")
                      : props.activeProject[field])
                  }
                />
              </label>
            );
          })}
        </div>
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
