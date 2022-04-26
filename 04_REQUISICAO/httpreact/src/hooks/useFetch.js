import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  //Exercicio 5
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  //console.log(callFetch);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }); //config
      setMethod(method); //method
    }
  };

  // GET
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);

      const json = await res.json();

      setData(json); //data
    };
    fetchData();
  }, [url, callFetch]);

  //Exercicio 5
  //POST
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];
        //console.log(fetchOptions);
        const res = await fetch(...fetchOptions);
        //console.log(res);
        const json = await res.json();
        //console.log(json);
        setCallFetch(json); //callFetch
      }
    };
    httpRequest();
  }, [config, method, url]);
  return { data, httpConfig };
};
