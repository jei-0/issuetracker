import { useState } from "react";
import { TextField, Typography } from "@material-ui/core";

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
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Typography variant="h5">
          {props.formType === "add" ? "New" : "Edit"} Project
        </Typography>
        <div>
          {formFields.map((field, n) => {
            const fieldProps = {
              multiline: undefined,
              minRows: undefined,
              InputLabelProps: undefined,
              type: "text",
              defaultValue: undefined,
            };

            if (field === "description") {
              fieldProps.multiline = true;
              fieldProps.minRows = 2;
            }

            if (field === "deadline") {
              fieldProps.InputLabelProps = { shrink: true };
              fieldProps.type = "date";
            }
            if (props.activeProject && props.activeProject[field]?.length) {
              fieldProps.defaultValue =
                field === "members"
                  ? props.activeProject[field].join(", ")
                  : props.activeProject[field];
            }

            return (
              <TextField
                key={field + n}
                {...fieldProps}
                fullWidth
                label={field}
                name={field}
                variant="outlined"
                onChange={handleChange}
              />
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
