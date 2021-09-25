import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router-dom";

const Projects = () => {
  const { data, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      name: "Adam",
      username: "lotADAMage",
      id: 11,
    }
  );

  let history = useHistory();

  // const handleEditClick = (id) => {
  //   history.push(`/edit/${id}`);
  // };

  if (error) {
    return (
      <div>
        <p>Sorry! There was an error getting the data. 😓</p>
        <p>{error.message}</p>
      </div>
    );
  }
  if (isLoading) {
    return <p>One moment, please! ☝️</p>;
  }
  return (
    <div>
      {data?.name} | {data?.username} | {data?.id}
    </div>
  );
};

export default Projects;
