const NewProjectButton = (props) => {
  let onClickHandler;
  return (
    <label>
      <button onClick={onClickHandler}>+</button> New Project
    </label>
  );
};

export default NewProjectButton;
