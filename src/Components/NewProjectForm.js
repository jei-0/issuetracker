const NewProjectForm = (props) => {
  return (
    <div>
      <form>
        <label>
          Project Name: <input type="text" />
        </label>
        <label>
          Project Description: <input type="text" />
        </label>
        <label>
          Project Members: <input type="text" />
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
