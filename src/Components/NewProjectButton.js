const NewProjectButton = (props) => {
  return (
    <label>
      <button onClick={props.onClick}>+</button> New Project
    </label>
  );
};

export default NewProjectButton;
