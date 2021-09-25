import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, object) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .post(url, object)
      .then((rsp) => setData(rsp.data))
      .catch((e) => setError(e))
      .finally(setIsLoading(false));
  }, [url, object]);

  return { data, error, isLoading };
};

export default useFetch;
