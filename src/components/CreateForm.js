import { useState } from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";
import { nanoid } from "nanoid";
// import { useProjectsContext } from "../contexts/ProjectsContext";
// import { useIssuesContext } from "../contexts/IssuesContext";
import CreateFormConfig from "./CreateFormConfig";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, TextField } from "@material-ui/core/";

const useStyles = makeStyles({
  fields: {
    marginTop: "1em",
    marginBottom: "1em",
  },
  form: {
    paddingTop: "1.5em",
  },
  capitalize: {
    textTransform: "capitalize",
  },
});

const CreateForm = ({ currentUser, fresh, onDiscard }) => {
  let history = useHistory();
  const { id } = useParams();
  const [userInput, setUserInput] = useState({});
  const { pathname } = useLocation();
  // const { issues, addToIssues, submitEditToIssues } = useIssuesContext();
  // const {
  //   projects,
  //   addToProjects,
  //   submitEditToProjects,
  // } = useProjectsContext();
  const classes = useStyles();

  const type =
    pathname.includes("projects") || id?.[0] === "P" ? "project" : "issue";
  const formFields = CreateFormConfig(type);
  // const activeItem = fresh
  //   ? undefined
  //   : type === "project"
  //   ? projects.find((item) => item.id === id)
  //   : issues.find((item) => item.id === id);

  // const handleChange = (e) => {
  //   const obj = {};
  //   const key = e.target.name;
  //   const value = e.target.value.trim();
  //   obj[key] = value;
  //   setUserInput({ ...userInput, ...obj });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newItemData = {
  //     id: (type === "project" ? "P" : "I") + nanoid(9),
  //     "modified on": new Date(),
  //     "modified by": currentUser || "You",
  //     "created on": new Date(),
  //     "created by": currentUser || "You",
  //   };
  //   if (fresh) {
  //     if (type === "project") {
  //       addToProjects({
  //         ...newItemData,
  //         ...userInput,
  //       });
  //     }
  //     if (type === "issue") {
  //       addToIssues({
  //         ...newItemData,
  //         ...userInput,
  //       });
  //     }
  //   } else {
  //     if (type === "project") {
  //       submitEditToProjects({
  //         ...activeItem,
  //         ...userInput,
  //         "modified on": new Date(),
  //         "modified by": currentUser || "You",
  //       });
  //       if (type === "issue") {
  //         submitEditToIssues({
  //           ...activeItem,
  //           ...userInput,
  //           "modified on": new Date(),
  //           "modified by": currentUser || "You",
  //         });
  //       }
  //     }
  //   }
  //   setUserInput({});
  //   history.push(`/${type}s`);
  // };

  // return (
  //   <Container>
  //     <form
  //       className={classes.form}
  //       noValidate
  //       autoComplete="off"
  //       onSubmit={handleSubmit}
  //     >
  //       <Typography variant="h5" className={classes.capitalize}>
  //         {(fresh ? "New" : "Edit") + " " + type}
  //       </Typography>
  //       <div>
  //         {formFields.map((field, n) => {
  //           const fieldProps = {
  //             InputLabelProps: { className: classes.capitalize },
  //             type: "text",
  //           };
  //           if (field.name.includes("date")) {
  //             fieldProps.InputLabelProps = {
  //               ...fieldProps.InputLabelProps,
  //               shrink: true,
  //             };
  //             fieldProps.type = "date";
  //           }

  //           return (
  //             <TextField
  //               className={classes.fields}
  //               key={field.name + n}
  //               {...fieldProps}
  //               fullWidth
  //               label={field.name}
  //               name={field.name}
  //               variant="outlined"
  //               multiline={field.multiline}
  //               required={field.required}
  //               defaultValue={activeItem ? activeItem[field.name] : activeItem}
  //               onChange={handleChange}
  //             />
  //           );
  //         })}
  //       </div>
  //       <div>
  //         <button onClick={onDiscard} type="button">
  //           Discard
  //         </button>
  //         <button type="submit">Submit</button>
  //       </div>
  //     </form>
  //   </Container>
  // );
};

export default CreateForm;
