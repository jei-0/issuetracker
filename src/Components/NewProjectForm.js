const NewProjectForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Project Name: <input id="projectName" type="text" />
        </label>
        <label>
          Project Description: <input id="projectDesc" type="text" />
        </label>
        <label>
          Project Members: <input id="projectMembers" type="text" />
        </label>
        <div>
          <button type="submit">Submit</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewProjectForm;
