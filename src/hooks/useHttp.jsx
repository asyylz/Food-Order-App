import { useState } from "react";

async function sendHttpRequest(url, config) {
  // this function dealing with  sending requests
  const response = await fetch(url, config);

  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request"
    );
  }
  return resData;
}

export default function useHttp() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // this function dealing with updating the states
  async function sendRequest() {
    setIsLoading(true);
    try {
      const restData = sendHttpRequest();
      setData(restData);
    } catch (error) {
      setError(error.message || "Something went wrong");
    }
    setIsLoading(false);
  }
  return { data, isLoading, error };
}
