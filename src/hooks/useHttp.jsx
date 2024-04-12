import { useCallback, useEffect, useState } from "react";

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

export default function useHttp(url, config) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  // this function dealing with updating the states
  const sendRequest = useCallback(
    async function sendRequest() {
      setIsLoading(true);
      try {
        const restData = sendHttpRequest(url, config);
        setData(restData);
      } catch (error) {
        setError(error.message || "Something went wrong");
      }
      setIsLoading(false);
    },
    [url, config]
  );

  useEffect(() => {
    if (config && config.method === "GET") {
      sendRequest();
    }
  }, [sendRequest, config]);

  return { data, isLoading, error, sendRequest };
}
